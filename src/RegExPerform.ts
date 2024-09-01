import {
  IClass,
  IClassNameCssSourceAndFilename,
  IMediaClassCSSOrderFilenameAndSource,
} from "../interfaces/ICustomClassBuilder";
import {
  GenerateMimicCSSCustomClasses,
  GenerateMimicCSSNonMedia,
  GenerateMimicCSSMedia,
} from "./GenerateMimicCss";

let debug = true;

export function GenericRegexNonMedia(
  item: any,
  regex: RegExp,
  source: string
): IClassNameCssSourceAndFilename {
  let single_colon_matches = item.matchAll(regex);
  let result = { className: "", css: "", source: "", filename: "" };

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let media = match.groups["media"];
    let color = match.groups["color"];
    let pseudo = match.groups["pseudo"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];
    let className = match.groups["customclass"];

    if (media != undefined || className != undefined) return result;

    result = GenerateMimicCSSNonMedia(
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
      color
    );
  }
  return result;
}

export function GenericRegexNonMediaCustomClass(
  item: any,
  regex: RegExp,
  source: string
): { classMember: string; className: string } {
  if (item == "") return { classMember: "", className: "" };

  let single_colon_matches = item.matchAll(regex);
  let classMember: string = "";
  let className: string = "";
  let classNamePseudo: string = "";

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let media = match.groups["media"];
    let color = match.groups["color"];
    let pseudo = match.groups["pseudo"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];
    className = match.groups["customclass"];
    classNamePseudo = match.groups["customclass_subgroup_pseudo"];

    if (className == undefined) return { classMember: "", className: "" };

    classMember = GenerateMimicCSSCustomClasses(
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
      color,
      classNamePseudo
    );
  }
  // const classNameWithMaybePseudoAppended =
  //   classNamePseudo != "" && classNamePseudo != undefined
  //     ? className + classNamePseudo
  //     : className;
  return { classMember, className: className };
}

export function GenericRegexMedia(
  item: any,
  regex: RegExp,
  source: string
): IMediaClassCSSOrderFilenameAndSource {
  let single_colon_matches = item.matchAll(regex);
  let result = {
    mediaDescription: "",
    className: "",
    css: "",
    order: 0,
    filename: "",
    source: "",
  };

  for (const match of single_colon_matches) {
    let style = match.groups["style"];
    let value1 = match.groups["value1"];
    let value2 = match.groups["value2"];
    let value3 = match.groups["value3"];
    let value4 = match.groups["value4"];
    let media = match.groups["media"];
    let color = match.groups["color"];
    let pseudo = match.groups["pseudo"];
    let value1type = match.groups["value1type"];
    let value2type = match.groups["value2type"];
    let value3type = match.groups["value3type"];
    let value4type = match.groups["value4type"];

    if (media == undefined || media == "") return result;

    result = GenerateMimicCSSMedia(
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
      color
    );
  }
  return result;
}
