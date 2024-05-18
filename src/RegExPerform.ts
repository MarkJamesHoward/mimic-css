import {
  double_hyphen_no_colon,
  double_hyphen_then_colon,
  single_hyphen_then_colon,
  single_hyphen_then_colon_snappable,
  single_colon,
  single_colon_padding_shorthand,
  single_colon_padding_shorthand_snappable,
  single_colon_padding_shorthand_2_values,
  single_colon_padding_shorthand_2_values_snappable,
  single_hyphen_then_colon_then_another_hyphen,
  single_hyphen_then_colon_box_shadow,
} from "./RegExDefinitions";
import { GenerateMimicClass } from "./GenerateMimicCss";
import { Escape } from "./EscapingClassNames";
import { PerformSnap } from "./performSnap";

let debug = true;

export function GenericRegex(item: any, regex: RegExp, source: string) {
  let single_colon_matches = item.matchAll(regex);
  let result;

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let media = match.groups["media"];
    let pseudo = match.groups["pseudo"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];

    result = GenerateMimicClass(
      source,
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
      pseudo,
      ""
    );
  }
  return result;
}

export function Single_Hyphen_Then_Colon_Snapable(item: any) {
  let single_colon_matches = item.matchAll(single_hyphen_then_colon_snappable);
  let result;

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let media = match.groups["media"];
    let pseudo = match.groups["pseudo"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];

    result = GenerateMimicClass(
      "Single_Colon",
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
      pseudo,
      ""
    );
  }
  return result;
}

export function Single_Colon(item: any) {
  let single_colon_matches = item.matchAll(single_colon);
  let result;

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let media = match.groups["media"];
    let pseudo = match.groups["pseudo"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];

    result = GenerateMimicClass(
      "Single_Colon",
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
      pseudo,
      ""
    );
  }
  return result;
}

export function Single_Colon_Padding_Shorthand_Snappable(item: any) {
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
      `
      ${debug ? "/* Single_Colon_Padding_Shorthand_Snappable */" : ""}
      .${style}\\:${snap1}${snap2}${snap3}${snap4} {\r\n\t` +
      style +
      ": " +
      `${snap1value} ${snap2value} ${snap3value} ${snap4value};\r\n}\r\n`
    );
  }
}

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
    let pseudo = match.groups["pseudo"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];

    return GenerateMimicClass(
      "SingleColonPaddingShorthand",
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
      pseudo,
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
    let pseudo = match.groups["pseudo"] ?? "";
    let media = match.groups["media"] ?? "";

    let value1type = match.groups["value1type"] ?? "";
    let value2type = match.groups["value2type"] ?? "";
    let value3type = match.groups["value3type"] ?? "";
    let value4type = match.groups["value4type"] ?? "";
    result = GenerateMimicClass(
      "SingleHyphenThenColonBoxShadow",
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
      pseudo,
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
    //console.log("single_hyphen_then_colon " + match);

    let style = match.groups["style"];
    let value1 = match.groups["value1"] ?? "";
    let value2 = match.groups["value2"] ?? "";
    let value3 = match.groups["value3"] ?? "";
    let value4 = match.groups["value4"] ?? "";
    let color = match.groups["color"] ?? "";
    let pseudo = match.groups["pseudo"] ?? "";
    let media = match.groups["media"] ?? "";

    let value1type = match.groups["value1type"] ?? "";
    let value2type = match.groups["value2type"] ?? "";
    let value3type = match.groups["value3type"] ?? "";
    let value4type = match.groups["value4type"] ?? "";

    result = GenerateMimicClass(
      "Single_Colon_Padding_Shorthand_2_Values_Snappable",
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
      pseudo,
      color
    );
  }

  return result;
}

export function Single_Hypen_Then_Colon(item: any) {
  let result;

  let single_hyphen_then_colon_matches = item.matchAll(
    single_hyphen_then_colon
  );

  for (const match of single_hyphen_then_colon_matches) {
    //console.log("single_hyphen_then_colon " + match);

    let style = match.groups["style"];
    let value1 = match.groups["value1"] ?? "";
    let value2 = match.groups["value2"] ?? "";
    let value3 = match.groups["value3"] ?? "";
    let value4 = match.groups["value4"] ?? "";
    let color = match.groups["color"] ?? "";
    let pseudo = match.groups["pseudo"] ?? "";
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
      pseudo,
      color
    );
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

export function Double_hyphen_then_colon(item: any) {
  let double_hyphen_then_colon_matches = item.matchAll(
    double_hyphen_then_colon
  );
  let result: string = "";

  for (const match of double_hyphen_then_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"] ?? "";
    let value2 = match.groups["value2"] ?? "";
    let value3 = match.groups["value3"] ?? "";
    let value4 = match.groups["value4"] ?? "";
    let color = match.groups["color"] ?? "";
    let pseudo = match.groups["pseudo"] ?? "";
    let media = match.groups["media"] ?? "";

    let value1type = match.groups["value1type"] ?? "";
    let value2type = match.groups["value2type"] ?? "";
    let value3type = match.groups["value3type"] ?? "";
    let value4type = match.groups["value4type"] ?? "";

    result = GenerateMimicClass(
      "DoubleHyphenThenColon",
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
      pseudo,
      color
    );
    return result;
  }
}

export function Double_Hyphen_No_Colon(item: any) {
  let double_hyphen_no_colon_matches = item.matchAll(double_hyphen_no_colon);
  let result;
  for (const match of double_hyphen_no_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"] ?? "";
    let value2 = match.groups["value2"] ?? "";
    let value3 = match.groups["value3"] ?? "";
    let value4 = match.groups["value4"] ?? "";
    let color = match.groups["color"] ?? "";
    let pseudo = match.groups["pseudo"] ?? "";
    let media = match.groups["media"] ?? "";

    let value1type = match.groups["value1type"] ?? "";
    let value2type = match.groups["value2type"] ?? "";
    let value3type = match.groups["value3type"] ?? "";
    let value4type = match.groups["value4type"] ?? "";

    result = GenerateMimicClass(
      "DoubleHyphenNoColon",
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
      pseudo,
      color
    );
    return result;
  }
}
