import {
  IClass,
  IClassNameCssSourceAndFilename,
  ICustomClassBuilder,
  IMediaClass,
  INonMediaClass,
} from "../interfaces/ICustomClassBuilder";
import { CSSAlreadyExists, DeDuplication } from "../src/DeDuplication";
import {
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
  RegenerateRegExExpressions,
} from "./RegExDefinitions";

import fs from "fs";

export function FindCurrentMaxMediaOrder(
  DictionaryOfFoundMediaCSSFromAllFile: Record<string, IMediaClass>
): number {
  let max = 0;

  for (const key in DictionaryOfFoundMediaCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      if (DictionaryOfFoundMediaCSSFromAllFile[key].order > max) {
        max = DictionaryOfFoundMediaCSSFromAllFile[key].order;
      }
    }
  }
  return max;
}

function StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
  distinctClassAndCss: IClassNameCssSourceAndFilename,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >
) {
  DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] = {
    className: distinctClassAndCss.className,
    css: distinctClassAndCss.css,
    filename: distinctClassAndCss.filename,
    source: distinctClassAndCss.source,
  };
}

function FindCustomClasses(
  classGenerationInProgress: Array<string>,
  classCompleteMatch: IterableIterator<RegExpExecArray>,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  filename: string
) {
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
      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
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

      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
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
      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
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
      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
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
      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
        return;
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

      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
        return;
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

      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
        return;
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

      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
        return;
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

      if (
        AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
          constructedClassName,
          constructedClassMemberList,
          classGenerationInProgress,
          DictionaryOfFoundCSSFromAllFile,
          filename,
          "Test"
        )
      ) {
        return;
      }
    });

    for (const key in DictionaryOfFoundCSSFromAllFile) {
      if (key !== "" && key != undefined) {
        DictionaryOfFoundCSSFromAllFile[
          key
        ].css = `${DictionaryOfFoundCSSFromAllFile[key].css}\r\n`;
      }
    }
  }
}

function FindNonMedia(
  classCompleteMatch: IterableIterator<RegExpExecArray>,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >
) {
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      if (item === "") return;

      let distinctClassAndCss: IClassNameCssSourceAndFilename;

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon"
      );

      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] = {
        className: distinctClassAndCss.className,
        css: distinctClassAndCss.css,
        filename: distinctClassAndCss.filename,
        source: distinctClassAndCss.source,
      };

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenColonThenAnotherHyphen"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenTheColon"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadow"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_then_colon_snappable,
        "SingleHyphenSnapable"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        no_hyphen,
        "NoHypen"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        no_hyphen_snappable,
        "NoHyphenSnapable"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );

      distinctClassAndCss = GenericRegexNonMedia_ReturnDistinctClassAndCSS(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValue"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile
      );
    });
  }
}

export function DoWork(
  filename: string,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  DictionaryOfFoundMediaCSSFromAllFile: Record<string, IMediaClass>
): string {
  let ExistingCSS = "";
  let next_media_order_position = 0;

  // Clear existing Media items for this file
  for (const key in DictionaryOfFoundMediaCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      if (DictionaryOfFoundMediaCSSFromAllFile[key].filename === filename) {
        delete DictionaryOfFoundMediaCSSFromAllFile[key];
      }
    }
  }

  // Clear existing Non-Media items for this file
  for (const key in DictionaryOfFoundCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      if (DictionaryOfFoundCSSFromAllFile[key].filename === filename) {
        delete DictionaryOfFoundCSSFromAllFile[key];
      }
    }
  }

  next_media_order_position = FindCurrentMaxMediaOrder(
    DictionaryOfFoundMediaCSSFromAllFile
  );

  const data = fs.readFileSync(filename, "utf8");

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  RegenerateRegExExpressions();

  // Find Non Media Queries
  FindNonMedia(classCompleteMatch, DictionaryOfFoundCSSFromAllFile);

  classComplete = /class=\"(?<classComplete>.+)\"/gi;
  classCompleteMatch = data.matchAll(classComplete);

  // Now look for Media queries
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      if (item === "") return;
      next_media_order_position += 1;

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
        order: next_media_order_position,
        filename: filename,
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
        order: next_media_order_position,
        filename: filename,
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
        order: next_media_order_position,
        filename: filename,
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
        order: next_media_order_position,
        filename: filename,
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
        order: next_media_order_position,
        filename: filename,
      };

      // result = GenericRegexMedia(item, single_colon, "single_colon");

      // DictionaryOfFoundMediaCSSFromAllFile[
      //   result.mediaDescription + result.mediaClass.className
      // ] = {
      //   className: "",
      //   css: result.mediaClass.css,
      //   order: next_media_order_position,
      //   filename: filename,
      // };

      result = GenericRegexMedia(item, no_hyphen, "NoHypen");

      DictionaryOfFoundMediaCSSFromAllFile[
        result.mediaDescription + result.mediaClass.className
      ] = {
        className: "",
        css: result.mediaClass.css,
        order: next_media_order_position,
        filename: filename,
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
        order: next_media_order_position,
        filename: filename,
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
        order: next_media_order_position,
        filename: filename,
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
        order: next_media_order_position,
        filename: filename,
      };
    });
  }

  classComplete = /class=\"(?<classComplete>.+)\"/gi;
  classCompleteMatch = data.matchAll(classComplete);

  let classGenerationInProgress: Array<string> = [];

  FindCustomClasses(
    classGenerationInProgress,
    classCompleteMatch,
    DictionaryOfFoundCSSFromAllFile,
    filename
  );

  // Return as string for unit tests
  for (const key in DictionaryOfFoundCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      let TempCustomClass = `.${key} ${DictionaryOfFoundCSSFromAllFile[key].css}`;
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

function AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
  constructedClassName: string,
  constructedClassMemberList: string,
  classGenerationInProgress: Array<string>,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  filename: string,
  source: string
): boolean {
  if (constructedClassName != "") {
    if (DictionaryOfFoundCSSFromAllFile[constructedClassName] === undefined) {
      DictionaryOfFoundCSSFromAllFile[constructedClassName] = {
        css: `{\r\n\t${constructedClassMemberList}\r\n}`,
        filename,
        className: constructedClassName,
        source: source,
      };
      classGenerationInProgress.push(constructedClassName);
    } else {
      if (classGenerationInProgress.includes(constructedClassName)) {
        // In progress so lets
        DictionaryOfFoundCSSFromAllFile[constructedClassName] = {
          css: `${DictionaryOfFoundCSSFromAllFile[
            constructedClassName
          ].css.replace("}", "")}\t${constructedClassMemberList}\r\n}`,
          filename,
          className: constructedClassName,
          source: source,
        };
      } else {
        // Just starting to regen so lets clear first
        DictionaryOfFoundCSSFromAllFile[constructedClassName] = {
          css: `{\r\n\t${constructedClassMemberList}\r\n}`,
          filename,
          className: constructedClassName,
          source: source,
        };

        classGenerationInProgress.push(constructedClassName);
      }
    }
    return true;
  } else {
    return false;
  }
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
