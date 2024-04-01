#!/usr/bin/env node
import yargs from "yargs";

const argv = yargs(process.argv.slice(2))
  .options({
    i: { type: "string", default: "./index.html" },
    o: { type: "string", default: "./ACEcss.css" },
  })
  .parse();

import {
  small,
  large,
  xtraLarge,
  smallText,
  largeText,
  xtraLargeText,
} from "../mediaBreakpoints.mjs";
import fs from "fs";
var fsp = fs.promises;

async function UpdateACEcssOutputFile() {
  let output = "";

  const data = await fsp.readFile("./index.html", "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;

  // border-style-solid border-width-5 flex-direction-row
  const classRegEx3Parts =
    /\s(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)\s/gi;
  const classRegEx3PartsWithMedia =
    /\s(?<media>small:|large:|xtraLarge:+)(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)\s/gi;

  // display: flex
  const classRegExSingleHyphen =
    /\s(?<style>[A-Za-z0-9]+)-(?<value>[A-Za-z]+)\s/gi;

  let classCompleteMatch = data.matchAll(classComplete);

  //console.log(classCompleteMatch)
  for (const classIndividual of classCompleteMatch) {
    //   console.log(
    //     `Indivisual class found: ${classIndividual.groups["classComplete"]}`
    //   );
    let classIndividualString = ` ${classIndividual.groups["classComplete"]} `;

    // border-style-solid border-width-5 flec-direction-row
    let classIndividualMatch3Parts =
      classIndividualString.matchAll(classRegEx3Parts);

    for (const match of classIndividualMatch3Parts) {
      //console.log(match)

      let style = match.groups["style"];
      let value = match.groups["value"];

      // console.log(style);
      // console.log(value);

      output +=
        `.${style}-${value} {\r\n\t` + style + ": " + value + `;\r\n}\r\n`;
    }

    // border-style-solid border-width-5 flec-direction-row ** Plus Media prefix
    let classIndividualMatch3PartsWithMedia = classIndividualString.matchAll(
      classRegEx3PartsWithMedia
    );

    for (const match of classIndividualMatch3PartsWithMedia) {
      //console.log(match);

      let style = match.groups["style"];
      let value = match.groups["value"];
      let media = match.groups["media"];

      //console.log(`MEDIA FOUND ${media} ${style} ${value}`);

      switch (media) {
        case smallText:
          output +=
            `@media (min-width: ${small}px) {\r\n.${style}-${value} {\r\n\t` +
            style +
            ": " +
            value +
            `;\r\n}\r\n}\r\n`;
          break;
        case largeText:
          output +=
            `@media (min-width: ${large}px) {\r\n.${style}-${value} {\r\n\t` +
            style +
            ": " +
            value +
            `;\r\n}\r\n}\r\n`;
          break;
        case xtraLargeText:
          output +=
            `@media (min-width: ${xtraLarge}px) {\r\n.${style}-${value} {\r\n\t` +
            style +
            ": " +
            value +
            `;\r\n}\r\n}\r\n`;
          break;
        default:
          console.log("unknown media!!");
      }
    }

    // display: flex
    let classIndividualMatchSingleHypen = classIndividualString.matchAll(
      classRegExSingleHyphen
    );

    for (const match of classIndividualMatchSingleHypen) {
      //console.log(match)

      let style = match.groups["style"];
      let value = match.groups["value"];

      // console.log(style)
      // console.log(value)

      output +=
        `.${style}-${value} {\r\n\t` + style + ": " + value + `;\r\n}\r\n`;
    }
  }

  //console.log(output)
  await fsp.writeFile(argv.o, output);
}
// Now watch for changes to the input file
fs.watch(argv.i, {}, async () => {
  console.log("file changed");
  await UpdateACEcssOutputFile();
  console.log("Update completed");
});
