#!/usr/bin/env node
import yargs from "yargs";
import { ProcessMediaQueries } from "../src/ProcessMediaQueries.mjs";
import { PerformSnap } from "../src/performSnap.mjs";
import {
  classRegEx3Parts,
  classRegEx3PartsWithMedia,
  classRegEx1HyphenThenColumn,
  classRegEx1HyphenThenColumnWithMedia,
  classRegExSingleHyphen,
} from "../src/RegEx.mjs";
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

  //console.log(classCompleteMatch)
  for (const classIndividual of classCompleteMatch) {
    // console.log(
    //   `Indivisual class found: ${classIndividual.groups["classComplete"]}`
    // );
    let classIndividualString = ` ${classIndividual.groups["classComplete"]} `;

    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      //console.log(item)
      // border-style-solid border-width-5 flex-direction-row ////
      //////////////////////////////////
      let classIndividualMatch3Parts = item.matchAll(classRegEx3Parts);

      for (const match of classIndividualMatch3Parts) {
        // console.log('3 part type match ' + match)

        let style = match.groups["style"];
        let value = match.groups["value"];

        // console.log(style);
        // console.log(value);

        let snappedvalue = PerformSnap(style, value);

        output +=
          `.${style}-${value} {\r\n\t` +
          style +
          ": " +
          `${snappedvalue == 0 ? value : snappedvalue}` +
          `;\r\n}\r\n`;
      }

      // border-width:5  ////
      //////////////////////////////////
      let classIndividualMatch_1HyphenThenColumn = item.matchAll(
        classRegEx1HyphenThenColumn
      );

      for (const match of classIndividualMatch_1HyphenThenColumn) {
        //console.log('1 Hyphen Then Column ' + match)

        let style = match.groups["style"];
        let value = match.groups["value"];

        // console.log(style);
        // console.log(value);
        let snappedvalue = PerformSnap(style, value);

        output +=
          `.${style}\\:${value} {\r\n\t` +
          style +
          ": " +
          `${snappedvalue == 0 ? value : snappedvalue}` +
          `;\r\n}\r\n`;
      }

      // border-width:5 ** Plus Media prefix
      ////////////////////////////////
      let classIndividualMatch_1HyphenThenColumnWithMedia = item.matchAll(
        classRegEx1HyphenThenColumnWithMedia
      );

      output += ProcessMediaQueries(
        classIndividualMatch_1HyphenThenColumnWithMedia,
        false
      );

      // border-style-solid border-width-5 flex-direction-row ** Plus Media prefix
      ////////////////////////////////
      let classIndividualMatch3PartsWithMedia = item.matchAll(
        classRegEx3PartsWithMedia
      );

      output += ProcessMediaQueries(classIndividualMatch3PartsWithMedia, true);

      // display: flex /////////////////////////////////
      ////////////////////////////////////////////////
      let classIndividualMatchSingleHypen = item.matchAll(
        classRegExSingleHyphen
      );

      for (const match of classIndividualMatchSingleHypen) {
        //console.log('Display:Flex type match ' + match)

        let style = match.groups["style"];
        let value = match.groups["value"];

        // console.log(style)
        // console.log(value)

        output +=
          `.${style}\\:${value} {\r\n\t` + style + ": " + value + `;\r\n}\r\n`;
      }
    });
  }

  //console.log(output)
  await fsp.writeFile(argv.o, output);
}
// Now watch for changes to the input file
fs.watch(argv.i, {}, async () => {
  console.log("file changed");
  await UpdateACEcssOutputFile();
  //console.log("Update completed");
});
