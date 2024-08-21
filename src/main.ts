import { CSSAlreadyExists, DeDuplication } from "../src/DeDuplication";
import { GenericRegexNonMedia, GenericRegexMedia, GenericRegexNonMediaCustomClass } from "../src/RegExPerform";

import {
  double_hyphen_then_colon,
  single_hyphen_then_colon,
  single_hyphen_then_colon_snappable,
  single_hyphen_then_colon_then_another_hyphen,
  single_hyphen_then_colon_box_shadow,
  single_hyphen_percentage_value,
  no_hyphen_pixel_values,
  no_hyphen_snappable,
  no_hyphen,
  single_hyphen_hash_value,
  no_hyphen_custom_class,
  single_hyphen_then_colon_snappable_custom_class
} from "./RegExDefinitions";

import fs from "fs";

export function DoWork(filename: string, ExistingCSS: string): string {
  let NonMediaCSS = "";
  let MediaCSS = "";
  let CustomClass = "";
  let ThisFilesCSS = "";

  const data = fs.readFileSync(filename, "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  // Find Non Media Queries
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      // display:flex
      let mostSpecificMatch = "";

      let result;

      result = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenColonThenAnotherHyphen"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenTheColon"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadow"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon_snappable,
        "SingleHyphenSnapable"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(item, no_hyphen, "NoHypen");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(
        item,
        no_hyphen_snappable,
        "NoHyphenSnapable"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexNonMedia(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValue"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      // result = GenericRegexNonMedia(
      //   item,
      //   single_hyphen_percentage_value,
      //   "singleHyphenPercentageValue"
      // );
      // if (result != "" && result != undefined) mostSpecificMatch = result;

      
      // Deduplicate
      if (
        mostSpecificMatch != undefined &&
        mostSpecificMatch != "" &&
        !CSSAlreadyExists(ThisFilesCSS, mostSpecificMatch?.trim())
      ) {
        ThisFilesCSS += mostSpecificMatch.trim();
        NonMediaCSS +=
          DeDuplication(ExistingCSS, mostSpecificMatch.trim());
      }
    });
  }

  classComplete = /class=\"(?<classComplete>.+)\"/gi;
  classCompleteMatch = data.matchAll(classComplete);

  // Now look for Media queries
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      // display:flex
      let mostSpecificMatch = "";

      let result;  
    
      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon,
        "SingleHypenMedia"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenAnotherHyphenMedia"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenMedia"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadowMedia"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_snappable,
        "SingleHyphenSnapableMedia"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(item, no_hyphen, "NoHypenMedia");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(
        item,
        no_hyphen_snappable,
        "NoHyphenSnapableMedia"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegexMedia(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValueMedia"
      );
      // Deduplicate
      if (
        mostSpecificMatch != undefined &&
        mostSpecificMatch != "" &&
        !CSSAlreadyExists(ThisFilesCSS, mostSpecificMatch?.trim())
      ) {
        ThisFilesCSS += mostSpecificMatch.trim();
        MediaCSS +=
          DeDuplication(ExistingCSS, mostSpecificMatch.trim());
      }
    });
  }

  classComplete = /class=\"(?<classComplete>.+)\"/gi;
  classCompleteMatch = data.matchAll(classComplete);

  // Check for Custom Class creation - NonMedia
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    let className: string = "";
    let classMembers: string = "";

    splitIndividualClassItems.forEach((item) => {
      let classMember: string;
      let classMemberName: string = "";

      // display:flex^MYBUTTON
      // background:red^MYBUTTON
      let r = GenericRegexNonMediaCustomClass(
        item,
        no_hyphen_custom_class,
        "no_hyphen_custom_class"
      );
      classMember = r.classMember;
      classMemberName = r.className.replace('^','');

      if (classMember != "") {
        classMembers += `\r\n\t${classMember}`;
      }

      if (classMemberName != "") {
        className = classMemberName;
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        single_hyphen_then_colon_snappable_custom_class,
        "single_hyphen_then_colon_snappable_custom_class"
      );

      classMember = r.classMember;
      classMemberName = r.className.replace('^','');

      if (classMember != "") {
        classMembers += `\r\n\t${classMember}`;
      }

      if (classMemberName != "") {
        className = classMemberName;
      }



    });

    if (className != "") {

    let TempCustomClass = `.${className} {${classMembers}\r\n}`
      // Deduplicate Custom Classes
  if (
    !CSSAlreadyExists(ExistingCSS, TempCustomClass?.trim())
  ) {
    ThisFilesCSS += TempCustomClass.trim();
    CustomClass += `\r\n${TempCustomClass}\r\n`
  }
  

    }
  }

  

  return `${NonMediaCSS} ${MediaCSS} ${CustomClass}`.trim();
}
