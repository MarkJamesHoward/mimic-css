#!/usr/bin/env node
import "../src/instrument.js";
import yargs from "yargs";
import path from "path";
import fs from "fs";
import { DoWork } from "../src/main";
import { LoadConfig, mimicConfig } from "../src/ConfigurationLoader";
import {
  IClassNameCssSourceAndFilename,
  IMediaClassCSSOrderFilenameAndSource,
  IMimicFinalCSSOutput,
} from "../interfaces/ICustomClassBuilder";
import { ConstructGeneratedCSS } from "../src/FinalCSSOutputGeneration";

const argv = yargs(process.argv.slice(2))
  .options({
    i: { type: "string", default: "./", alias: "input" },
    o: { type: "string", default: "./mimic.css", alias: "output" },
    e: { type: "string", default: "", alias: "exclude" },
    l: { type: "boolean", default: false, alias: "lit" },
    d: { type: "boolean", default: false, alias: "debug" },
  })
  .parseSync();

let mimicFinalCSSOutput: IMimicFinalCSSOutput = { str: "" };

let DictionaryOfFoundCSSFromAllFile: Record<
  string,
  IClassNameCssSourceAndFilename
> = {};
let DictionaryOfFoundMediaCSSFromAllFile: Record<
  string,
  IMediaClassCSSOrderFilenameAndSource
> = {};

let InputFolder = argv.i ?? "./";
const OutputFilename = argv.o;
const ExcludeFilesFromArgs = argv.e;
const EmitLitFile = argv.l;
const debug = argv.d;

if (InputFolder == "") {
  InputFolder = "./";
}

function searchFile(dir: string, extension: string) {
  let exit = false;

  // Check if this is a folder we don't want to look in (e.g. node_modules)
  mimicConfig?.excludeFolders?.forEach((element) => {
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
      let exitDueToFileExclusionRequested = false;

      mimicConfig?.excludeFiles?.forEach((excludeMePlease) => {
        if (filePath?.includes(excludeMePlease)) {
          exitDueToFileExclusionRequested = true;
        }
      });

      if (!exitDueToFileExclusionRequested) {
        // if the file is a match, print it
        console.log("Performing first run check on file " + filePath);
        let result = DoWork(
          filePath,
          DictionaryOfFoundCSSFromAllFile,
          DictionaryOfFoundMediaCSSFromAllFile,
          undefined
        );

        ConstructGeneratedCSS(
          mimicFinalCSSOutput,
          DictionaryOfFoundMediaCSSFromAllFile,
          DictionaryOfFoundCSSFromAllFile,
          debug
        );

        fs.writeFileSync(OutputFilename, mimicFinalCSSOutput.str);

        if (EmitLitFile) {
          WriteLitFile(OutputFilename, mimicFinalCSSOutput.str);
        }
      } else {
        console.log(`Excluding file ${filePath}`);
      }
    }
  }
}

async function Start() {
  //Load Configuration
  try {
    await LoadConfig();
  } catch (e) {
    console.info("Configuration file not found");
  }

  console.dir(mimicConfig);

  mimicConfig?.extensions?.forEach((extension: string) => {
    searchFile(InputFolder, extension);
  });

  // Now setup to check for file changes
  fs.watch(
    InputFolder,
    { recursive: true },
    async (eventType: any, fileName: any) => {
      let validFile = false;
      mimicConfig?.extensions?.forEach((extension: string) => {
        if (fileName?.includes(extension)) {
          validFile = true;
        }
      });

      if (validFile) {
        // Check for excluded filenames
        let exitDueToFileExclusionRequested = false;
        let exitDueToFolderExclusionRequested = false;

        mimicConfig?.excludeFiles?.forEach((excludeMePlease) => {
          if (fileName?.includes(excludeMePlease)) {
            exitDueToFileExclusionRequested = true;
          }
        });
        // Check for exclued Folders
        mimicConfig?.excludeFolders?.forEach((excludeMePlease) => {
          if (InputFolder?.includes(excludeMePlease)) {
            exitDueToFolderExclusionRequested = true;
          }
        });

        if (
          !exitDueToFileExclusionRequested &&
          !exitDueToFolderExclusionRequested
        ) {
          if (
            ExcludeFilesFromArgs == "" ||
            !fileName?.includes(ExcludeFilesFromArgs)
          ) {
            console.log("change detected.. performing update: " + fileName);
            let filenamePlusPath = path.join(InputFolder, fileName);

            DoWork(
              filenamePlusPath,
              DictionaryOfFoundCSSFromAllFile,
              DictionaryOfFoundMediaCSSFromAllFile,
              undefined
            );

            ConstructGeneratedCSS(
              mimicFinalCSSOutput,
              DictionaryOfFoundMediaCSSFromAllFile,
              DictionaryOfFoundCSSFromAllFile,
              debug
            );

            fs.writeFileSync(OutputFilename, mimicFinalCSSOutput.str);

            if (EmitLitFile) {
              WriteLitFile(OutputFilename, mimicFinalCSSOutput.str);
            }
          } else {
            console.log(`file excluded ${path.join(InputFolder, fileName)}`);
          }
        } else {
          console.log(`file excluded ${path.join(InputFolder, fileName)}`);
        }
      } else {
        if (debug) {
          console.log(
            `filename not in list to examine ${path.join(
              InputFolder,
              fileName
            )}`
          );
        }
      }
    }
  );
}

async function WriteLitFile(filename: string, data: string) {
  let cleanContents = data.replaceAll("`", "");
  cleanContents = cleanContents.replaceAll("\\", "\\\\");

  const litContents = `import { css } from "lit";\r\nexport const TWStyles = css\`\r\n${cleanContents} \`
    `;
  fs.writeFileSync(filename + ".js", litContents);
}

Start();
