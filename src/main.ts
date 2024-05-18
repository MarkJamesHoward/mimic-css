import { DeDuplication } from "../src/DeDuplication";
import {
  Single_Colon,
  Single_Colon_Padding_Shorthand,
  Single_Colon_Padding_Shorthand_Snappable,
  Single_Colon_Padding_Shorthand_2_Values,
  Single_Colon_Padding_Shorthand_2_Values_Snappable,
  Single_Hyphen_Then_Colon_Box_Shadow,
  Single_Hypen_Then_Colon,
  Single_Hyphen_Then_Colon_Snapable,
  Single_Hypen_Then_Colon_Then_Another_Hyphen,
  Double_hyphen_then_colon,
  GenericRegex,
} from "../src/RegExPerform";

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
  no_hyphen_pixel_values,
  no_hyphen_snappable,
  no_hyphen,
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

      let result = Single_Colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Padding_Shorthand(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon_Then_Another_Hyphen(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Double_hyphen_then_colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hyphen_Then_Colon_Box_Shadow(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hyphen_Then_Colon_Snapable(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(item, no_hyphen, "NoHypen");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(item, no_hyphen_snappable, "NoHyphenSnapable");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = GenericRegex(item, no_hyphen_pixel_values, "NoHyphenPixeValues");
      if (result != "" && result != undefined) mostSpecificMatch = result;

      // Deduplicate
      NonMediaCSS += DeDuplication(ExistingCSS, mostSpecificMatch);
    });
  }
  return NonMediaCSS + MediaCSS;
}
