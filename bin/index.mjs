#!/usr/bin/env node
import yargs from "yargs";
import {
  Single_Colon,
  Single_Colon_Hover,
  Single_Hypen_Then_Colon,
  Single_Hypen_Then_Colon_Hover,
  Sindle_Hypen_Then_Colon_Media,
  Single_Hypen_Then_Colon_Media_Hover,
  Double_Hyphen_No_Colon,
  Double_Hyphen_No_Colon_Media,
} from "../src/RegExPerform.mjs";
import fs from "fs";

const argv = yargs(process.argv.slice(2))
  .options({
    i: { type: "string", default: "../test/index.html" },
    o: { type: "string", default: "../test/mimic.css" },
  })
  .parse();

var fsp = fs.promises;

async function UpdateACEcssOutputFile() {
  let output = "";
  const data = await fsp.readFile(argv.i, "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      // display:flex
      let result = Single_Colon(item);
      if (result != undefined) output += result;

      result = Single_Colon_Hover(item);
      if (result != undefined) output += result;

      // border-width:5
      // large?border-width:5
      // border-width:5:hover
      // large?border-width:5:hover
      ////////////////////////////////
      result = Single_Hypen_Then_Colon(item);
      if (result != undefined) output += result;

      result = Sindle_Hypen_Then_Colon_Media(item);
      if (result != undefined) output += result;

      result = Single_Hypen_Then_Colon_Hover(item);
      if (result != undefined) output += result;

      result = Single_Hypen_Then_Colon_Media_Hover(item);
      if (result != undefined) output += result;

      // border-style-solid flex-direction-row
      // large?border-style-solid
      result = Double_Hyphen_No_Colon(item);
      if (result != undefined) output += result;

      result = Double_Hyphen_No_Colon_Media(item);
      if (result != undefined) output += result;
    });
  }
  output = output.replace("undefined", "");
  await fsp.writeFile(argv.o, output);
}

fs.watch(argv.i, {}, async () => {
  console.log("file changed");
  await UpdateACEcssOutputFile();
});
