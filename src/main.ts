import { IClass, ICustomClassBuilder } from "../interfaces/ICustomClassBuilder";
import { CSSAlreadyExists, DeDuplication } from "../src/DeDuplication";
import {
  GenericRegexNonMedia,
  GenericRegexMedia,
  GenericRegexNonMediaCustomClass,
  GenericRegexNonMedia_ReturnDistinctClassAndCSS,
} from "../src/RegExPerform";
import { GenerateMimicClass_NONMEDIA_Return_ClassName_Separate } from "./GenerateMimicCss";

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

export function DoWork(
  filename: string,
  DictionaryOfFoundCSSFromAllFile: Record<string, string>,
  DictionaryOfFoundMediaCSSFromAllFile: Record<string, IClass>
): string {
  let NonMediaCSS = "";
  let MediaCSS = "";
  let CustomClass = "";
  let ThisFilesCSS = "";
  let ExistingCSS = "";

  const data = fs.readFileSync(filename, "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  // Find Non Media Queries
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      if (item === "") return;

      // display:flex
      let mostSpecificMatch = "";

      let result;
      let distinctClassAndCss;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon"
      );

      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenColonThenAnotherHyphen"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenTheColon"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadow"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon_snappable,
        "SingleHyphenSnapable"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        no_hyphen,
        "NoHypen"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        no_hyphen_snappable,
        "NoHyphenSnapable"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValue"
      );
      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] =
        distinctClassAndCss.css;
    });
  }

  classComplete = /class=\"(?<classComplete>.+)\"/gi;
  classCompleteMatch = data.matchAll(classComplete);

  // Now look for Media queries
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      if (item === "") return;

      // display:flex
      let mostSpecificMatch = "";

      let result;

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon,
        "SingleHypenMedia"
      );
      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenAnotherHyphenMedia"
      );

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenMedia"
      );

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadowMedia"
      );

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_snappable,
        "SingleHyphenSnapableMedia"
      );

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(item, no_hyphen, "NoHypenMedia");

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(
        item,
        no_hyphen_snappable,
        "NoHyphenSnapableMedia"
      );

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues"
      );

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };

      result = GenericRegexMedia(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValueMedia"
      );

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
      };
    });
  }

  classComplete = /class=\"(?<classComplete>.+)\"/gi;
  classCompleteMatch = data.matchAll(classComplete);

  let classGenerationInProgress: Array<string> = [];

  ////////////// Check for Custom Class creation - NonMedia ////////////////////////
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    let constructedClassName: string = "";
    let constructedClassMemberList: string = "";

    splitIndividualClassItems.forEach((item) => {
      if (item == "") return;

      constructedClassName = "";
      // display:flex@MYBUTTON
      // background:red@MYBUTTON
      let r = GenericRegexNonMediaCustomClass(
        item,
        no_hyphen,
        "no_hyphen_custom_class"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));
      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
        return;
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        single_hyphen_then_colon_snappable,
        "single_hyphen_then_colon_snappable_custom_class"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));
      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
        return;
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon_CustomClass"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));
      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
        return;
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenColonThenAnotherHyphen_CustomClass"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));
      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
        return;
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenTheColon_CustomClass"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));
      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadow_CUstomClass"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));

      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        no_hyphen_snappable,
        "NoHyphenSnapable_CustomClass"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));

      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues_CustomClass"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));

      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
      }

      r = GenericRegexNonMediaCustomClass(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValue_CustomClass"
      );

      ({ constructedClassMemberList, constructedClassName } =
        UpdateClassMembersOfCustomClass(
          r.className,
          r.classMember,
          constructedClassMemberList
        ));

      if (constructedClassName != "") {
        if (
          DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined
        ) {
          DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ] = `{\r\n\t${constructedClassMemberList}\r\n}`;
          classGenerationInProgress.push(constructedClassName);
        } else {
          if (classGenerationInProgress.includes(constructedClassName)) {
            // In progress so lets
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `${DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ].replace("}", "")}\t${constructedClassMemberList}\r\n}`;
          } else {
            // Just starting to regen so lets clear first
            DictionaryOfFoundCSSFromAllFile[
              constructedClassName
            ] = `{\r\n\t${constructedClassMemberList}\r\n}`;

            classGenerationInProgress.push(constructedClassName);
          }
        }
      }
    });

    for (const key in DictionaryOfFoundCSSFromAllFile) {
      if (key !== "" && key != undefined) {
        DictionaryOfFoundCSSFromAllFile[
          key
        ] = `${DictionaryOfFoundCSSFromAllFile[key]}\r\n`;
      }
    }
  }

  // Return as string for unit tests
  for (const key in DictionaryOfFoundCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      let TempCustomClass = `.${key} ${DictionaryOfFoundCSSFromAllFile[key]}`;
      ExistingCSS += TempCustomClass.trim() + "\r\n";
    }
  }

  for (const key in DictionaryOfFoundMediaCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      let TempCustomClass = `${key}${DictionaryOfFoundMediaCSSFromAllFile[key].className}${DictionaryOfFoundMediaCSSFromAllFile[key].css}`;
      ExistingCSS += TempCustomClass.trim() + "\r\n";
    }
  }

  return `${ExistingCSS}`.trim();
}

function UpdateClassMembersOfCustomClass(
  classNameOnThisItem: string,
  classMemberInThisItem: string,
  InProgressClassMembersFoundSoFar: string
): ICustomClassBuilder {
  let constructedClass: ICustomClassBuilder = {
    constructedClassMemberList: "",
    constructedClassName: "",
  };

  if (classMemberInThisItem != "") {
    constructedClass.constructedClassMemberList = `${classMemberInThisItem}`;
    //constructedClass.constructedClassMemberList = `${InProgressClassMembersFoundSoFar}\r\n\t${classMemberInThisItem}`;
    constructedClass.constructedClassName = classNameOnThisItem.replace(
      "@",
      ""
    );
    return constructedClass;
  } else
    return {
      constructedClassMemberList: "",
      constructedClassName: "",
    };
}
