#!/usr/bin/env node
import yargs from "yargs";
import { ProcessMedia  } from '../src/processMedia.mjs'
import { PerformSnap } from '../src/performSnap.mjs'
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

  // border-style-solid border-width-5 flex-direction-row
  const classRegEx3Parts =
    /\s(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)\s/gi;

  const classRegEx3PartsWithMedia =
    /\s(?<media>small|large|xtraLarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)\s/gi;
  //////////////  

  //border-width:5 
  const classRegEx1HyphenThenColumn =
  /\s(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)\s/gi;

  const classRegEx1HyphenThenColumnWithMedia =
    /\s(?<media>small|large|xtraLarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)\s/gi;
  ////////////// 


  // display: flex
  const classRegExSingleHyphen =
    /\s(?<style>[A-Za-z0-9]+):(?<value>[A-Za-z]+)\s/gi;

  let classCompleteMatch = data.matchAll(classComplete);

  //console.log(classCompleteMatch)
  for (const classIndividual of classCompleteMatch) {
    //   console.log(
    //     `Indivisual class found: ${classIndividual.groups["classComplete"]}`
    //   );
    let classIndividualString = ` ${classIndividual.groups["classComplete"]} `;

    // border-style-solid border-width-5 flex-direction-row ////
    //////////////////////////////////
    let classIndividualMatch3Parts =
      classIndividualString.matchAll(classRegEx3Parts);

    for (const match of classIndividualMatch3Parts) {
     // console.log('3 part type match ' + match)

      let style = match.groups["style"];
      let value = match.groups["value"];

      // console.log(style);
      // console.log(value);

      snapped = PerformSnap(style, value)
      if (snapped > 0)
        value = snapped

      output +=
        `.${style}-${value} {\r\n\t` + style + ": " + value + `;\r\n}\r\n`;
    }

    // border-width:5  ////
    //////////////////////////////////
    let classIndividualMatch_1HyphenThenColumn =
      classIndividualString.matchAll(classRegEx1HyphenThenColumn);

    for (const match of classIndividualMatch_1HyphenThenColumn) {
      //console.log('1 Hyphen Then Column ' + match)

      let style = match.groups["style"];
      let value = match.groups["value"];

      // console.log(style);
      // console.log(value);
      value = PerformSnap(style, value)

      output +=
        `.${style}\\:${value} {\r\n\t` + style + ": " + value + `;\r\n}\r\n`;
    }

    // border-width:5 ** Plus Media prefix
    ////////////////////////////////
    let classIndividualMatch_1HyphenThenColumnWithMedia = classIndividualString.matchAll(
      classRegEx1HyphenThenColumnWithMedia
    );

    output += ProcessMedia(classIndividualMatch_1HyphenThenColumnWithMedia, false)

    
    // border-style-solid border-width-5 flex-direction-row ** Plus Media prefix
    ////////////////////////////////
    let classIndividualMatch3PartsWithMedia = classIndividualString.matchAll(
      classRegEx3PartsWithMedia
    );
    
    output += ProcessMedia(classIndividualMatch3PartsWithMedia, true)

    // display: flex /////////////////////////////////
    ////////////////////////////////////////////////
    let classIndividualMatchSingleHypen = classIndividualString.matchAll(
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
