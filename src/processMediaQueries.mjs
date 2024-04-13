import { PerformSnap } from "./performSnap.mjs";
import {
  extrasmall,
  small,
  medium,
  large,
  extraLarge,
  extrasmallText,
  smallText,
  mediumText,
  largeText,
  extraLargeText,
} from "../src/mediaBreakpoints.mjs";

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
      case extrasmallText:
        width = extrasmall;
        break;
      case smallText:
        width = small;
        break;
      case mediumText:
        width = medium;
        break;
      case largeText:
        width = large;
        break;
      case extraLargeText:
        width = extraLarge;
        break;
      default:
        console.log("unknown media!!");
    }
    //console.log("Process Media with " + style + " " + value);
    let snappedvalue = PerformSnap(style, value);
    //console.log('Snapped Media with ' + snappedvalue)

    output +=
      `@media (min-width: ${width}px) {\r\n.${media}\\?${style}${
        colon == false ? "\\:" : "-"
      }${value}\\:hover:hover {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n}\r\n}\r\n`;
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
      case smallText:
        width = small;
        break;
      case mediumText:
        width = small;
        break;
      case largeText:
        width = large;
        break;
      case xtraLargeText:
        width = xtraLarge;
        break;
      default:
        console.log("unknown media!!");
    }
    //console.log("Process Media with " + style + " " + value);
    let snappedvalue = PerformSnap(style, value);
    //console.log('Snapped Media with ' + snappedvalue)

    output +=
      `@media (min-width: ${width}px) {\r\n.${media}\\?${style}${
        colon == false ? "\\:" : "-"
      }${value} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n}\r\n}\r\n`;
  }
  return output;
}
