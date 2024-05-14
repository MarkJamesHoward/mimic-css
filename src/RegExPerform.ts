import {
  double_hyphen_no_colon,
  double_hyphen_then_colon,
  double_hyphen_no_colon_media,
  single_hyphen_then_colon,
  single_hyphen_then_colon_pseudo_class,
  media_single_hyphen_then_colon,
  media_single_hyphen_then_colon_pseudo_class,
  single_colon,
  // single_colon_media,
  single_colon_pseudo_class,
  single_colon_padding_shorthand,
  // single_colon_padding_shorthand_snappable,
  single_colon_padding_shorthand_2_values,
  single_colon_padding_shorthand_2_values_snappable,
  single_hyphen_then_colon_then_another_hyphen,
  single_hyphen_then_colon_box_shadow,
} from "./RegExDefinitions";
import { GenerateMimicClass } from "./GenerateMimicCss";
import { Escape } from "./EscapingClassNames";
import { PerformSnap } from "./performSnap";
import {
  ProcessMediaQueries,
  ProcessMediaQueriesWithHover,
  MapMediaQuery,
} from "./processMediaQueries";

let debug = true;

export function Single_Colon_Pseudo_Class(item: any) {
  let output = "";
  let single_colon_pseudo_class_matches = item.matchAll(
    single_colon_pseudo_class
  );

  // Check matches with HOVER
  for (const match of single_colon_pseudo_class_matches) {
    let style = match.groups["style"];
    let value = match.groups["value"];
    let pseudo_class = match.groups["pseudo_class"];

    // console.log(style);
    // console.log(value);
    // console.log(pseudo_class);

    let snappedvalue = PerformSnap(style, value);

    output +=
      `
      ${debug ? "/* Single_Colon_Pseudo_Class */" : ""}
      .${style}\\:${Escape(value)}\\:${pseudo_class}:${pseudo_class} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue}` +
      `;\r\n}\r\n`;
  }
  return output;
}

export function Single_Colon(item: any) {
  let single_colon_matches = item.matchAll(single_colon);
  let result;

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value = match.groups["value"];
    let media = match.groups["media"] ?? "";
    let hover = match.groups["hover"] ?? "";

    result = result = GenerateMimicClass(
      "SingleColon",
      style,
      value,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      media,
      hover,
      ""
    );
  }
  return result;
}

// export function Single_Colon_Padding_Shorthand_Snappable(item: any) {
//   let single_colon_padding_shorthand_snappable_matches = item.matchAll(
//     single_colon_padding_shorthand_snappable
//   );

//   for (const match of single_colon_padding_shorthand_snappable_matches) {
//     let style = match.groups["style"];
//     let snap1 = match.groups["snap1"];
//     let snap2 = match.groups["snap2"];
//     let snap3 = match.groups["snap3"];
//     let snap4 = match.groups["snap4"];
//     let snap1value = PerformSnap(style, snap1);
//     let snap2value = PerformSnap(style, snap2);
//     let snap3value = PerformSnap(style, snap3);
//     let snap4value = PerformSnap(style, snap4);

//     return (
//       `
//       ${debug ? "/* Single_Colon_Padding_Shorthand_Snappable */" : ""}
//       .${style}\\:${snap1}${snap2}${snap3}${snap4} {\r\n\t` +
//       style +
//       ": " +
//       `${snap1value} ${snap2value} ${snap3value} ${snap4value};\r\n}\r\n`
//     );
//   }
// }

export function Single_Colon_Padding_Shorthand(item: any) {
  let single_colon_padding_shorthand_matches = item.matchAll(
    single_colon_padding_shorthand
  );

  for (const match of single_colon_padding_shorthand_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let media = match.groups["media"];
    let hover = match.groups["hover"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];

    return GenerateMimicClass(
      "SingleHyphenThenColon",
      style,
      value1,
      value2,
      value3,
      value4,
      value1type,
      value2type,
      value3type,
      value4type,
      media,
      hover,
      ""
    );
  }
}

export function Single_Hyphen_Then_Colon_Box_Shadow(item: any) {
  let Single_Hyphen_Then_Colon_Box_Shadow_matches = item.matchAll(
    single_hyphen_then_colon_box_shadow
  );

  let result;

  for (const match of Single_Hyphen_Then_Colon_Box_Shadow_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"] ?? "";
    let value2 = match.groups["value2"] ?? "";
    let value3 = match.groups["value3"] ?? "";
    let value4 = match.groups["value4"] ?? "";
    let color = match.groups["color"] ?? "";
    let hover = match.groups["hover"] ?? "";
    let media = match.groups["media"] ?? "";

    let value1type = match.groups["value1type"] ?? "";
    let value2type = match.groups["value2type"] ?? "";
    let value3type = match.groups["value3type"] ?? "";
    let value4type = match.groups["value4type"] ?? "";
    result = GenerateMimicClass(
      "SingleHyphenThenColon",
      style,
      value1,
      value2,
      value3,
      value4,
      value1type,
      value2type,
      value3type,
      value4type,
      media,
      hover,
      color
    );
  }
  return result;
}

export function Single_Colon_Padding_Shorthand_2_Values(item: any) {
  let single_colon_padding_shorthand_2_values_matches = item.matchAll(
    single_colon_padding_shorthand_2_values
  );

  for (const match of single_colon_padding_shorthand_2_values_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];

    return (
      `${debug ? "/* Single_Colon_Padding_Shorthand_2_Values */" : ""}\r\n` +
      `.${style}\\:${value1}${value1type}${value2}${value2type}{\r\n\t` +
      style +
      ": " +
      `${value1}${value1type} ${value2}${value2type} ${value1}${value1type} ${value2}${value2type};\r\n}\r\n`
    );
  }
}

export function Single_Colon_Padding_Shorthand_2_Values_Snappable(item: any) {
  let single_colon_padding_shorthand_2_values_snappable_matches = item.matchAll(
    single_colon_padding_shorthand_2_values_snappable
  );

  let result = "";

  for (const match of single_colon_padding_shorthand_2_values_snappable_matches) {
    let style = match.groups["style"];
    let snap1 = match.groups["snap1"];
    let snap2 = match.groups["snap2"];
    let snap1value = PerformSnap(style, snap1);
    let snap2value = PerformSnap(style, snap2);

    result =
      `${
        debug ? "/* Single_Colon_Padding_Shorthand_2_Values_Snappable */" : ""
      }\r\n` +
      `.${style}\\:${snap1}${snap2} {\r\n\t` +
      style +
      ": " +
      `${snap1value} ${snap2value};\r\n}\r\n`;
  }
  return result;
}

// export function Single_Colon_Media(item: any) {
//   let single_colon_media_results = item.matchAll(single_colon_media);

//   return ProcessMediaQueries(single_colon_media_results, false);
// }

// export function Sindle_Hypen_Then_Colon_Media(item: any) {
//   let media_single_hyphen_then_colon_matches = item.matchAll(
//     media_single_hyphen_then_colon
//   );

//   return ProcessMediaQueries(media_single_hyphen_then_colon_matches, false);
// }

export function Single_Hypen_Then_Colon_Media_Hover(item: any) {
  let media_single_hyphen_then_colon_pseudo_class_matches = item.matchAll(
    media_single_hyphen_then_colon_pseudo_class
  );

  return ProcessMediaQueriesWithHover(
    media_single_hyphen_then_colon_pseudo_class_matches,
    false
  );
}

export function Single_Hypen_Then_Colon_Hover(item: any) {
  let single_hyphen_then_colon_pseudo_class_matches = item.matchAll(
    single_hyphen_then_colon_pseudo_class
  );

  for (const match of single_hyphen_then_colon_pseudo_class_matches) {
    //console.log("single_hyphen_then_colon_hover " + match);

    let style = match.groups["style"];
    let value = match.groups["value"];
    let pseudo_class = match.groups["pseudo_class"];

    //console.log(`${style} ${value}`);
    let snappedvalue = PerformSnap(style, value);

    return (
      `.${style}\\:${Escape(value)}\\:${pseudo_class}:${pseudo_class} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue}` +
      `;\r\n}\r\n`
    );
  }
}

export function Single_Hypen_Then_Colon(item: any) {
  let result;

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

    result =
      `${debug ? "/* Single_Hypen_Then_Colon */" : ""}\r\n` +
      `.${style}\\:${Escape(value)} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue}` +
      `;\r\n}\r\n`;
  }

  return result;
}

export function Single_Hypen_Then_Colon_Then_Another_Hyphen(item: any) {
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
      `.${style}\\:${Escape(value)} {\r\n\t` +
      style +
      ": " +
      `${value}` +
      `;\r\n}\r\n`
    );
  }
}

export function Double_Hyphen_No_Colon_Media(item: any) {
  let double_hyphen_no_colon_media_matches = item.matchAll(
    double_hyphen_no_colon_media
  );

  return ProcessMediaQueries(double_hyphen_no_colon_media_matches, true);
}

export function Double_hyphen_then_colon(item: any) {
  let double_hyphen_then_colon_matches = item.matchAll(
    double_hyphen_then_colon
  );
  let result: string = "";

  for (const match of double_hyphen_then_colon_matches) {
    //console.log("double_hyphen_no_colon " + match);

    let style = match.groups["style"];
    let value = match.groups["value"];

    //console.log(`${style} {value}`);

    let snappedvalue = PerformSnap(style, value);

    result =
      `.${style}\\:${Escape(value)} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue}` +
      `;\r\n}\r\n`;
  }
  return result;
}

export function Double_Hyphen_No_Colon(item: any) {
  let double_hyphen_no_colon_matches = item.matchAll(double_hyphen_no_colon);

  for (const match of double_hyphen_no_colon_matches) {
    //console.log("double_hyphen_no_colon " + match);

    let style = match.groups["style"];
    let value = match.groups["value"];

    //console.log(`${style} {value}`);

    let snappedvalue = PerformSnap(style, value);

    return (
      `.${style}-${Escape(value)} {\r\n\t` +
      style +
      ": " +
      `${snappedvalue}` +
      `;\r\n}\r\n`
    );
  }
}
