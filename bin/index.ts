#!/usr/bin/env node
import yargs from "yargs";
import path from "path";
import fs from "fs";
import { DoWork } from "../src/main";
import { ExcludeFolders } from "../src/FolderExclusions";

const argv = yargs(process.argv.slice(2))
  .options({
    i: { type: "string", default: "./", alias: "input" },
    o: { type: "string", default: "./mimic.css", alias: "output" },
    e: { type: "string", default: "", alias: "exclude" },
    l: { type: "boolean", default: false, alias: "lit" },
    r: { type: "boolean", default: true, alias: "run" },
    w: { type: "boolean", default: true, alias: "watch" },
  })
  .parseSync();

let ExistingCSS = "";
let InputFolder = argv.i;
let OutputFilename = argv.o;
let ExcludeFiles = argv.e;
let EmitLitFile = argv.l;

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
    }
  }
}

// Check all files initially
searchFile(InputFolder, ".html");
searchFile(InputFolder, ".ts");
searchFile(InputFolder, ".astro");

// Now setup to check for file changes
fs.watch(
  InputFolder,
  { recursive: true },
  async (eventType: any, fileName: any) => {
    if (
      fileName?.includes(".html") ||
      fileName?.includes(".astro") ||
      fileName?.includes(".ts")
    ) {
      // Check for excluded filenames
      if (ExcludeFiles == "" || !fileName?.includes(ExcludeFiles)) {
        console.log("change detected.. performing update: " + fileName);
        let filenamePlusPath = path.join(InputFolder, fileName);

        let result = DoWork(filenamePlusPath, ExistingCSS);

        WriteFile(OutputFilename, result);

        if (EmitLitFile) {
          WriteLitFile(OutputFilename, result);
        }
      } else {
        console.log(`filename excluded ${fileName}`);
      }
    } else {
      console.log(`filename not in list to examine ${fileName}`);
    }
  }
);

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
