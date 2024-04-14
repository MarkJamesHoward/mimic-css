import {
  double_hyphen_no_colon,
  double_hyphen_no_colon_media,
  single_hyphen_then_colon,
  single_hyphen_then_colon_hover,
  media_single_hyphen_then_colon,
  media_single_hyphen_then_colon_hover,
  single_colon,
  single_colon_media,
  single_colon_hover,
  single_colon_padding_shorthand,
  single_colon_padding_shorthand_snappable,
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
    let snappedvalue = PerformSnap(style, value);

    return (
      `.${style}\\:${value} {\r\n\t` +
      style +
      ": " +
      snappedvalue +
      `;\r\n}\r\n`
    );
  }
}

export function Single_Colon_Padding_Shorthand_Snappable(item) {
  let single_colon_padding_shorthand_snappable_matches = item.matchAll(
    single_colon_padding_shorthand_snappable
  );

  for (const match of single_colon_padding_shorthand_snappable_matches) {
    let style = match.groups["style"];
    let snap1 = match.groups["snap1"];
    let snap2 = match.groups["snap2"];
    let snap3 = match.groups["snap3"];
    let snap4 = match.groups["snap4"];
    let snap1value = PerformSnap(style, snap1);
    let snap2value = PerformSnap(style, snap2);
    let snap3value = PerformSnap(style, snap3);
    let snap4value = PerformSnap(style, snap4);

    return (
      `.${style}\\:${snap1}${snap2}${snap3}${snap4} {\r\n\t` +
      style +
      ": " +
      `${snap1value} ${snap1value} ${snap1value} ${snap1value};\r\n}\r\n`
    );
  }
}

export function Single_Colon_Padding_Shorthand(item) {
  let single_colon_padding_shorthand_matches = item.matchAll(
    single_colon_padding_shorthand
  );

  for (const match of single_colon_padding_shorthand_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];

    return (
      `.${style}\\:${value1}${value1type}${value2}${value2type}${value3}${value3type}${value4}${value4type} {\r\n\t` +
      style +
      ": " +
      `${value1}${value1type} ${value2}${value2type} ${value3}${value3type} ${value4}${value4type};\r\n}\r\n`
    );
  }
}

export function Single_Colon_Media(item) {
  let single_colon_media_results = item.matchAll(single_colon_media);

  return ProcessMediaQueries(single_colon_media_results, false);
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
