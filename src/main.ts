import { DeDuplication } from "../src/DeDuplication";
import { GenericRegex } from "../src/RegExPerform";

import {
  double_hyphen_then_colon,
  single_hyphen_then_colon,
  single_hyphen_then_colon_snappable,
  single_hyphen_then_colon_then_another_hyphen,
  single_hyphen_then_colon_box_shadow,
  no_hyphen_pixel_values,
  no_hyphen_snappable,
  no_hyphen,
  single_hyphen_hash_value,
} from "./RegExDefinitions";

import fs from "fs";

export function DoWork(filename: string, ExistingCSS: string): string {
  let NonMediaCSS = "";
  let MediaCSS = "";

  const data = fs.readFileSync(filename, "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      // display:flex
      let mostSpecificMatch = "";

      let result;

      result = GenericRegex(item, single_hyphen_then_colon, "SingleHypen");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenAnotherHyphen"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(item, double_hyphen_then_colon, "DoubleHyphen");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadow"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(
        item,
        single_hyphen_then_colon_snappable,
        "SingleHyphenSnapable"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(item, no_hyphen, "NoHypen");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(item, no_hyphen_snappable, "NoHyphenSnapable");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(item, no_hyphen_pixel_values, "NoHyphenPixeValues");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValue"
      );
      if (result != "" && result != undefined) mostSpecificMatch = result;
      // Deduplicate
      NonMediaCSS += DeDuplication(ExistingCSS, mostSpecificMatch);
    });
  }
  return NonMediaCSS + MediaCSS;
}
