import {
  double_hyphen_no_colon,
  double_hyphen_no_colon_media,
  single_hyphen_then_colon,
  single_hyphen_then_colon_hover,
  media_single_hyphen_then_colon,
  media_single_hyphen_then_colon_hover,
  single_colon,
  single_colon_hover,
  single_hyphen_then_colon_then_another_hyphen,
} from "./RegExDefinitions.mjs";
import { PerformSnap } from "./performSnap.mjs";
import {
  ProcessMediaQueries,
  ProcessMediaQueriesWithHover,
} from "./processMediaQueries.mjs";

export function Single_Colon_Hover(item) {
  let output = "";
  let single_colon_hover_matches = item.matchAll(single_colon_hover);

  // Check matches with HOVER
  for (const match of single_colon_hover_matches) {
    let style = match.groups["style"];
    let value = match.groups["value"];

    // console.log(style);
    // console.log(value);

    let snappedvalue = PerformSnap(style, value);

    output +=
      `.${style}\\:${value}\\:hover:hover {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n}\r\n`;
  }
  return output;
}

export function Single_Colon(item) {
  let single_colon_matches = item.matchAll(single_colon);

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value = match.groups["value"];
    // console.log(`${style} ${value})

    return `.${style}\\:${value} {\r\n\t` + style + ": " + value + `;\r\n}\r\n`;
  }
}

export function Sindle_Hypen_Then_Colon_Media(item) {
  let media_single_hyphen_then_colon_matches = item.matchAll(
    media_single_hyphen_then_colon
  );

  return ProcessMediaQueries(media_single_hyphen_then_colon_matches, false);
}

export function Single_Hypen_Then_Colon_Media_Hover(item) {
  let media_single_hyphen_then_colon_hover_matches = item.matchAll(
    media_single_hyphen_then_colon_hover
  );

  return ProcessMediaQueriesWithHover(
    media_single_hyphen_then_colon_hover_matches,
    false
  );
}

export function Single_Hypen_Then_Colon_Hover(item) {
  let single_hyphen_then_colon_hover_matches = item.matchAll(
    single_hyphen_then_colon_hover
  );

  for (const match of single_hyphen_then_colon_hover_matches) {
    //console.log("single_hyphen_then_colon_hover " + match);

    let style = match.groups["style"];
    let value = match.groups["value"];

    //console.log(`${style} ${value}`);
    let snappedvalue = PerformSnap(style, value);

    return (
      `.${style}\\:${value}\\:hover:hover {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n}\r\n`
    );
  }
}

export function Single_Hypen_Then_Colon(item) {
  let single_hyphen_then_colon_matches = item.matchAll(
    single_hyphen_then_colon
  );

  for (const match of single_hyphen_then_colon_matches) {
    //console.log("single_hyphen_then_colon " + match);

    let style = match.groups["style"];
    let value = match.groups["value"];

    //console.log(style);
    //console.log(value);
    let snappedvalue = PerformSnap(style, value);

    return (
      `.${style}\\:${value} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n}\r\n`
    );
  }
}

export function Single_Hypen_Then_Colon_Then_Another_Hyphen(item) {
  let single_hyphen_then_colon_then_another_hyphen_matches = item.matchAll(
    single_hyphen_then_colon_then_another_hyphen
  );

  for (const match of single_hyphen_then_colon_then_another_hyphen_matches) {
    //console.log("single_hyphen_then_colon " + match);

    let style = match.groups["style"];
    let value = match.groups["value"];

    //console.log(style);
    //console.log(value);

    return (
      `.${style}\\:${value} {\r\n\t` + style + ": " + `${value}` + `;\r\n}\r\n`
    );
  }
}

export function Double_Hyphen_No_Colon_Media(item) {
  let double_hyphen_no_colon_media_matches = item.matchAll(
    double_hyphen_no_colon_media
  );

  return ProcessMediaQueries(double_hyphen_no_colon_media_matches, true);
}

export function Double_Hyphen_No_Colon(item) {
  let double_hyphen_no_colon_matches = item.matchAll(double_hyphen_no_colon);

  for (const match of double_hyphen_no_colon_matches) {
    //console.log("double_hyphen_no_colon " + match);

    let style = match.groups["style"];
    let value = match.groups["value"];

    //console.log(`${style} {value}`);

    let snappedvalue = PerformSnap(style, value);

    return (
      `.${style}-${value} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue == 0 ? value : snappedvalue}` +
      `;\r\n}\r\n`
    );
  }
}
