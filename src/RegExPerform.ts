import { GenerateMimicClass, GenerateMimicClass_CustomClass } from "./GenerateMimicCss";

let debug = true;

export function GenericRegexNonMedia(item: any, regex: RegExp, source: string) {
  let single_colon_matches = item.matchAll(regex);
  let result;

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


    if (media != undefined || className != undefined) return "";

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
      color
    );
  }
    return result 
}

export function GenericRegexNonMediaCustomClass(item: any, regex: RegExp, source: string): { classMember: string, className: string } {
  
  if (item == '')
    return { classMember:'', className:''}

  let single_colon_matches = item.matchAll(regex);
  let classMember: string = '';
  let className: string = '';

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

    if (className == undefined) return { classMember: '', className: ''};

    classMember = GenerateMimicClass_CustomClass(
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
    return { classMember, className } 
}


export function GenericRegexMedia(item: any, regex: RegExp, source: string) {
  let single_colon_matches = item.matchAll(regex);
  let result;

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

    if (media == undefined || media == "") return "";

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
      color
    );
  }
  if (result != undefined) {
    return result
  }
  else return undefined
}
