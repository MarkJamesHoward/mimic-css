import { PerformSnap } from "./performSnap.mjs";
import {
  extrasmall,
  small,
  medium,
  large,
  extralarge,
  extrasmalltext,
  smalltext,
  mediumtext,
  largetext,
  extralargetext,
} from "../src/mediaBreakpoints.mjs";
import { Escape } from "./EscapingClassNames.mjs";

export function ProcessMediaQueriesWithHover(matches, colon) {
  let output = "";

  for (const match of matches) {
    //console.log(match);

    let style = match.groups["style"];
    let value = match.groups["value"];
    let media = match.groups["media"];

    // console.log(`MEDIA FOUND ${media} ${style} ${value}`);
    let width;

    switch (media) {
      case extrasmalltext:
        width = extrasmall;
        break;
      case smalltext:
        width = small;
        break;
      case mediumtext:
        width = medium;
        break;
      case largetext:
        width = large;
        break;
      case extralargetext:
        width = extralarge;
        break;
      default:
        width = extrasmall;
        console.log("unknown media!!");
    }
    //console.log("Process Media with " + style + " " + value);
    let snappedvalue = PerformSnap(style, value);
    //console.log('Snapped Media with ' + snappedvalue)

    output +=
      `@media (min-width: ${width}px) {\r\n.${media}\\?${style}${
        colon == false ? "\\:" : "-"
      }${Escape(value)}\\:hover:hover {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n\t}\r\n}\r\n`;
  }
  return output;
}

export function ProcessMediaQueries(matches, colon) {
  let output = "";

  for (const match of matches) {
    //console.log(match);

    let style = match.groups["style"];
    let value = match.groups["value"];
    let media = match.groups["media"];

    // console.log(`MEDIA FOUND ${media} ${style} ${value}`);
    let width;

    switch (media) {
      case extrasmalltext:
        width = extrasmall;
        break;
      case smalltext:
        width = small;
        break;
      case mediumtext:
        width = medium;
        break;
      case largetext:
        width = large;
        break;
      case extraLargetext:
        width = extralarge;
        break;
      default:
        width = extrasmall;
        console.log("unknown media!!");
    }
    //console.log("Process Media with " + style + " " + value);
    let snappedvalue = PerformSnap(style, value);
    //console.log('Snapped Media with ' + snappedvalue)

    output +=
      `@media (min-width: ${width}px) {\r\n.${media}\\?${style}${
        colon == false ? "\\:" : "-"
      }${Escape(value)} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n\t}\r\n}\r\n`;
  }
  return output;
}
