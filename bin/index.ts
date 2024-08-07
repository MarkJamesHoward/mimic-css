#!/usr/bin/env node
import yargs from "yargs";
import path from "path";
import fs from "fs";
import { DoWork } from "../src/main";
import { ExcludeFolders } from "../src/FolderExclusions";
import { LoadConfig, mimicConfig } from "../src/configurationLoader";
import { IMimicConfig } from "../interfaces/IFileExtensions";
import { MediaBreakPointsValue } from "../src/mediaBreakpoints";

const argv = yargs(process.argv.slice(2))
  .options({
    i: { type: "string", default: "./", alias: "input" },
    o: { type: "string", default: "./mimic.css", alias: "output" },
    e: { type: "string", default: "", alias: "exclude" },
    l: { type: "boolean", default: false, alias: "lit" },
    d: { type: "boolean", default: false, alias: "debug" },
  })
  .parseSync();

let ExistingCSS = "";
let InputFolder = argv.i;
let OutputFilename = argv.o;
let ExcludeFiles = argv.e;
let EmitLitFile = argv.l;
let debug = argv.d;


function searchFile(dir: string, extension: string) {
  let exit = false;

  // Check if this is a folder we don't want to look in (e.g. node_modules)
  ExcludeFolders.forEach((element) => {
    if (dir.includes(element)) exit = true;
  });

  if (exit) return;

  // read the contents of the directory
  const files = fs.readdirSync(dir);

  // search through the files
  for (const file of files) {
    // build the full path of the file
    const filePath = path.join(dir, file);

    // get the file stats
    const fileStat = fs.statSync(filePath);

    // if the file is a directory, recursively search the directory
    if (fileStat.isDirectory()) {
      searchFile(filePath, extension);
    } else if (file.endsWith(extension)) {
      // if the file is a match, print it
      console.log("Performing first run check on file " + filePath);
      let result = DoWork(filePath, ExistingCSS);
      ExistingCSS += result;
      fs.writeFileSync(OutputFilename, ExistingCSS);
      if (EmitLitFile) {
        WriteLitFile(OutputFilename, ExistingCSS);
      }
    }
  }
}

async function Start() {
  //Load Configuration
  try {
    await LoadConfig();

    if (
      mimicConfig.mediaBreakPointsValueOverride.extrasmall !=
      MediaBreakPointsValue.small
    ) {
      console.log("Using override for media breakpoints");
    }
  } catch (e) {
    console.log("Info: Configuration file not found");
  }

  console.dir(mimicConfig);

  mimicConfig?.extensions.forEach((extension: string) => {
    searchFile(InputFolder, extension);
  });

  // Now setup to check for file changes
  fs.watch(
    InputFolder,
    { recursive: true },
    async (eventType: any, fileName: any) => {
      let validFile = false;
      mimicConfig?.extensions.forEach((extension: string) => {
        if (fileName?.includes(extension)) {
          validFile = true;
        }
      });

      if (validFile) {
        // Check for excluded filenames
        if (ExcludeFiles == "" || !fileName?.includes(ExcludeFiles)) {
          console.log("change detected.. performing update: " + fileName);
          let filenamePlusPath = path.join(InputFolder, fileName);

          let result = DoWork(filenamePlusPath, ExistingCSS);
          ExistingCSS += result;

          WriteFile(OutputFilename, ExistingCSS);

          if (EmitLitFile) {
            WriteLitFile(OutputFilename, ExistingCSS);
          }
        } else {
          console.log(`filename excluded ${fileName}`);
        }
      } else {
        if (debug) {
          console.log(`filename not in list to examine ${fileName}`);
        }
      }
    }
  );
}

function WriteFile(filename: string, data: string) {
  fs.writeFileSync(filename, data);
}

async function WriteLitFile(filename: string, data: string) {
  let cleanContents = data.replaceAll("`", "");
  cleanContents = cleanContents.replaceAll("\\", "\\\\");

  const litContents = `import { css } from "lit";\r\nexport const TWStyles = css\`\r\n${cleanContents} \`
    `;
  fs.writeFileSync(filename + ".js", litContents);
}

Start();
