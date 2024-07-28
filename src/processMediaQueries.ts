import { PerformSnap } from "./performSnap";
import {
  MediaBreakPointsText,
  MediaBreakPointsValue,
} from "./mediaBreakpoints";
import { mimicConfig } from "./configurationLoader";
import { Escape } from "./EscapingClassNames";

export function MapMediaQuery(media: string) {
  let width;

  switch (media) {
    case MediaBreakPointsText.extrasmall:
      width =
        mimicConfig?.mediaBreakPointsValueOverride?.extrasmall ??
        MediaBreakPointsValue.extrasmall;
      break;
    case MediaBreakPointsText.small:
      width =
        mimicConfig?.mediaBreakPointsValueOverride?.small ??
        MediaBreakPointsValue.small;
      break;
    case MediaBreakPointsText.medium:
      width =
        mimicConfig?.mediaBreakPointsValueOverride?.medium ??
        MediaBreakPointsValue.medium;
      break;
    case MediaBreakPointsText.large:
      width =
        mimicConfig?.mediaBreakPointsValueOverride?.large ??
        MediaBreakPointsValue.large;
      break;
    case MediaBreakPointsText.extralarge:
      width =
        mimicConfig?.mediaBreakPointsValueOverride?.extralarge ??
        MediaBreakPointsValue.extralarge;
      break;
    default:
      width = "unknown";
    //console.log("unknown media!!");
  }
  return width;
}
export function ProcessMediaQueriesWithHover(matches: any, colon: boolean) {
  let output = "";

  for (const match of matches) {
    //console.log(match);

    let style = match.groups["style"];
    let value = match.groups["value"];
    let media = match.groups["media"];

    // console.log(`MEDIA FOUND ${media} ${style} ${value}`);
    let width;

    switch (media) {
      case MediaBreakPointsText.extrasmall:
        width = MediaBreakPointsValue.extrasmall;
        break;
      case MediaBreakPointsText.small:
        width = MediaBreakPointsValue.small;
        break;
      case MediaBreakPointsText.medium:
        width = MediaBreakPointsValue.medium;
        break;
      case MediaBreakPointsText.large:
        width = MediaBreakPointsValue.large;
        break;
      case MediaBreakPointsText.extralarge:
        width = MediaBreakPointsValue.extralarge;
        break;
      default:
        width = MediaBreakPointsValue.large;
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
      `${snappedvalue}` +
      `;\r\n\t}\r\n}\r\n`;
  }
  return output;
}

export function ProcessMediaQueries(matches: any, colon: boolean) {
  let output = "";

  for (const match of matches) {
    //console.log(match);

    let style = match.groups["style"];
    let value = match.groups["value"];
    let media = match.groups["media"];

    // console.log(`MEDIA FOUND ${media} ${style} ${value}`);
    let width;

    switch (media) {
      case MediaBreakPointsText.extrasmall:
        width = MediaBreakPointsValue.extrasmall;
        break;
      case MediaBreakPointsText.small:
        width = MediaBreakPointsValue.small;
        break;
      case MediaBreakPointsText.medium:
        width = MediaBreakPointsValue.medium;
        break;
      case MediaBreakPointsText.large:
        width = MediaBreakPointsValue.large;
        break;
      case MediaBreakPointsText.extralarge:
        width = MediaBreakPointsValue.extralarge;
        break;
      default:
        width = MediaBreakPointsValue.large;
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
      `${snappedvalue}` +
      `;\r\n\t}\r\n}\r\n`;
  }
  return output;
}
