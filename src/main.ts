import { DeDuplication } from "../src/DeDuplication";
import {
  Single_Colon,
  Single_Colon_Hover,
  Single_Colon_Media,
  Single_Colon_Padding_Shorthand,
  Single_Colon_Padding_Shorthand_Snappable,
  Single_Hypen_Then_Colon,
  Single_Hypen_Then_Colon_Hover,
  Sindle_Hypen_Then_Colon_Media,
  Single_Hypen_Then_Colon_Media_Hover,
  Single_Hypen_Then_Colon_Then_Another_Hyphen,
  Double_Hyphen_No_Colon,
  Double_Hyphen_No_Colon_Media,
} from "../src/RegExPerform";

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

      result = Single_Colon_Media(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Hover(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Padding_Shorthand(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Colon_Padding_Shorthand_Snappable(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon_Hover(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Single_Hypen_Then_Colon_Then_Another_Hyphen(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      result = Double_Hyphen_No_Colon(item);
      if (result != "" && result != undefined) mostSpecificMatch = result;

      NonMediaCSS += DeDuplication(ExistingCSS, mostSpecificMatch);

      result = Sindle_Hypen_Then_Colon_Media(item);
      MediaCSS += DeDuplication(ExistingCSS, result);

      result = Single_Hypen_Then_Colon_Media_Hover(item);
      MediaCSS += DeDuplication(ExistingCSS, result);

      result = Double_Hyphen_No_Colon_Media(item);
      MediaCSS += DeDuplication(ExistingCSS, result);
    });
  }
  return NonMediaCSS + MediaCSS;
}
