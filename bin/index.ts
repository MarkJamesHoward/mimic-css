#!/usr/bin/env node
import yargs from "yargs";
import path from "path";
import { DeDuplication } from "../src/DeDuplication";
import {
  Single_Colon,
  Single_Colon_Hover,
  Single_Colon_Media,
  Single_Colon_Padding_Shorthand,
  Single_Colon_Padding_Shorthand_Snappable,
  Single_Hypen_Then_Colon,
  Single_Hypen_Then_Colon_Hover,
  Sindle_Hypen_Then_Colon_Media,
  Single_Hypen_Then_Colon_Media_Hover,
  Single_Hypen_Then_Colon_Then_Another_Hyphen,
  Double_Hyphen_No_Colon,
  Double_Hyphen_No_Colon_Media,
} from "../src/RegExPerform";
import fs from "fs";

const argv = yargs(process.argv.slice(2))
  .options({
    i: { type: "string", default: "./", alias: "input" },
    o: { type: "string", default: "./mimic.css", alias: "output" },
    e: { type: "string", default: "", alias: "exclude" },
    l: { type: "boolean", default: false, alias: "lit" },
    r: { type: "boolean", default: false, alias: "run" },
    w: { type: "boolean", default: false, alias: "watch" },
  })
  .parseSync();

let output = "";
let outputMedia = "";
let InputFolder = argv.i;
let OutputFilename = argv.o;
let ExcludeFiles = argv.e;
let EmitLitFile = argv.l;
let PerformInitialRun = argv.r;
let Watch = argv.w;

export function DoWork(
  filename: string,
  outputInternal: string,
  outputMediaInternal: string
): string {
  const data = fs.readFileSync(filename, "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      // display:flex
      let mostSpecificMatch = "";

      let result = Single_Colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Media(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Hover(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Padding_Shorthand(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Padding_Shorthand_Snappable(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon_Hover(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon_Then_Another_Hyphen(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Double_Hyphen_No_Colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      outputInternal += DeDuplication(outputInternal, mostSpecificMatch);

      result = Sindle_Hypen_Then_Colon_Media(item);
      outputMediaInternal += DeDuplication(outputMediaInternal, result);

      result = Single_Hypen_Then_Colon_Media_Hover(item);
      outputMediaInternal += DeDuplication(outputMediaInternal, result);

      result = Double_Hyphen_No_Colon_Media(item);
      outputMediaInternal += DeDuplication(outputMediaInternal, result);
    });
  }
  output = outputInternal;
  outputMedia = outputMediaInternal;
  return outputInternal + outputMediaInternal;
}

function searchFile(dir: string, extension: string) {
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
      let outputForFile = DoWork(filePath, output, outputMedia);
      fs.writeFileSync(OutputFilename, outputForFile);
    }
  }
}

if (PerformInitialRun) {
  // Check all files initially
  searchFile(InputFolder, ".html");
  searchFile(InputFolder, ".ts");
  searchFile(InputFolder, ".astro");
}

if (Watch) {
  // Now setup to check for file changes
  fs.watch(
    InputFolder,
    { recursive: true, encoding: "buffer" },
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

          let result = DoWork(filenamePlusPath, output, outputMedia);

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
