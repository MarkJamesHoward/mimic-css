#!/usr/bin/env node
import yargs from "yargs";
import path from "path";
import { DeDuplication } from "../src/DeDuplication.mjs";
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
} from "../src/RegExPerform.mjs";
import fs from "fs";

const argv = yargs(process.argv.slice(2))
  .options({
    i: { type: "string", default: "./" },
    o: { type: "string", default: "./mimic.css" },
    e: { type: "string", default: "" },
    l: { type: "boolean", default: false },
  })
  .parse();

var fsp = fs.promises;
let output = "";
let outputMedia = "";

async function UpdateACEcssOutputFile(filename) {
  let filenamePlusPath = argv.i + filename;
  const data = await fsp.readFile(filenamePlusPath, "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups["classComplete"]} `;
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

      output += DeDuplication(output, mostSpecificMatch);

      result = Sindle_Hypen_Then_Colon_Media(item);
      outputMedia += DeDuplication(outputMedia, result);

      result = Single_Hypen_Then_Colon_Media_Hover(item);
      outputMedia += DeDuplication(outputMedia, result);

      result = Double_Hyphen_No_Colon_Media(item);
      outputMedia += DeDuplication(outputMedia, result);
    });
  }
}

async function searchFile(dir, fileName) {
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
      searchFile(filePath, fileName);
    } else if (file.endsWith(fileName)) {
      // if the file is a match, print it
      console.log("Performing first run check on file " + filePath);
      await UpdateACEcssOutputFile(filePath);
    }
  }
  await fsp.writeFile(argv.o, output + outputMedia);
}

// Check all files initially
await searchFile(argv.i, ".html");
await searchFile(argv.i, ".ts");

// Now setup to check for file changes
fs.watch(argv.i, { recursive: true }, async (eventType, filename) => {
  if (filename?.includes(".html") || filename?.includes(".ts")) {
    // Check for excluded filenames
    if (argv.e == "" || !filename?.includes(argv.e)) {
      console.log("change detected.. performing update: " + filename);
      await UpdateACEcssOutputFile(filename);

      await WriteFile(argv.o, output + outputMedia);

      if (argv.l) {
        await WriteLitFile(argv.o, output + outputMedia);
      }
    } else {
      console.log(`filename excluded ${filename}`);
    }
  } else {
    console.log(`filename not in list to examine ${filename}`);
  }
});

async function WriteFile(filename, data) {
  await fsp.writeFile(filename, data);
}

async function WriteLitFile(filename, data) {
  let cleanContents = data.replaceAll("`", "");
  cleanContents = cleanContents.replaceAll("\\", "\\\\");

  const litContents = `import { css } from "lit";\r\nexport const TWStyles = css\`\r\n${cleanContents} \`
    `;
  await fsp.writeFile(filename + ".js", litContents);
}
