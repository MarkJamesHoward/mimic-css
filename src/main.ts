import { DataType } from "../interfaces/Enums";
import {
  IClassNameCssSourceAndFilename,
  ICustomClassBuilder,
  IMediaClassCSSOrderFilenameAndSource,
} from "../interfaces/ICustomClassBuilder";
import { IMimicConfig } from "../interfaces/IMimicConfig";
import { SetConfigForJestTesting } from "./ConfigurationLoader";
import {
  GenericRegexMedia,
  GenericRegexNonMedia,
  GenericRegexNonMediaCustomClass,
} from "./RegExPerform";

import {
  double_hyphen_then_colon,
  single_hyphen_then_colon,
  single_hyphen_then_colon_then_another_hyphen,
  single_hyphen_then_colon_box_shadow,
  no_hyphen_pixel_values,
  no_hyphen,
  RegenerateRegExExpressions,
  double_hyphen_then_colon_snappable,
  single_hyphen_then_colon_box_shadow_snappable,
  border_shorthand,
} from "./RegExp/RegExDefinitions";

import fs from "fs";

export function DoWork(
  file_or_string_data: string,
  type: DataType,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >,
  config?: IMimicConfig
): string {
  if (config !== undefined) {
    SetConfigForJestTesting(config);
  }

  ClearExistingCSS(
    DictionaryOfFoundCSSFromAllFile,
    DictionaryOfFoundMediaCSSFromAllFile,
    file_or_string_data
  );

  let data;

  if (type === DataType.file) {
    data = fs.readFileSync(file_or_string_data, "utf8");
  } else if (type === DataType.string) {
    data = file_or_string_data;
  } else {
    throw new Error(
      "Unknown type of data supplied - should be either a string for file"
    );
  }

  RegenerateRegExExpressions();

  // Find Non Media
  let RegExToTryList = [
    single_hyphen_then_colon,
    single_hyphen_then_colon_then_another_hyphen,
    double_hyphen_then_colon,
    double_hyphen_then_colon_snappable,
    single_hyphen_then_colon_box_shadow,
    single_hyphen_then_colon_box_shadow_snappable,
    no_hyphen,
    no_hyphen_pixel_values,
    border_shorthand,
  ];

  FindNonMedia(
    RegExToTryList,
    data,
    DictionaryOfFoundCSSFromAllFile,
    file_or_string_data
  );

  FindMediaQueryClasses(
    RegExToTryList,
    data,
    DictionaryOfFoundMediaCSSFromAllFile,
    file_or_string_data
  );

  FindCustomClasses(
    RegExToTryList,
    data,
    DictionaryOfFoundCSSFromAllFile,
    file_or_string_data
  );

  let ExistingCSS = GenerateCSSStringForUnitTests(
    DictionaryOfFoundCSSFromAllFile,
    DictionaryOfFoundMediaCSSFromAllFile
  );

  return `${ExistingCSS}`.trim();
}

export function FindCurrentMaxMediaOrder(
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >
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

function FindMediaQueryClasses(
  RegExToTryList: Array<RegExp>,
  data: string,
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >,
  filename: string
) {
  let next_media_order_position = 0;

  next_media_order_position = FindCurrentMaxMediaOrder(
    DictionaryOfFoundMediaCSSFromAllFile
  );

  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  // Now look for Media queries
  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      if (item === "") return;
      next_media_order_position += 1;

      let result: IMediaClassCSSOrderFilenameAndSource;

      // let RegExToTryList = [
      //   single_hyphen_then_colon,
      //   single_hyphen_then_colon_then_another_hyphen,
      //   double_hyphen_then_colon_snappable,
      //   double_hyphen_then_colon,
      //   single_hyphen_then_colon_box_shadow,
      //   single_hyphen_then_colon_box_shadow_snappable,
      //   no_hyphen,
      //   no_hyphen_pixel_values,
      //   border_shorthand,
      // ];

      let ProcessingComplete: boolean = false;

      RegExToTryList.forEach((RegExToTry) => {
        result = GenericRegexMedia(item, RegExToTry, RegExToTry.source);
        AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
          result,
          next_media_order_position,
          filename,
          DictionaryOfFoundMediaCSSFromAllFile
        );
      });
    });
  }
}

function AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
  result: IMediaClassCSSOrderFilenameAndSource,
  next_media_order_position: number,
  filename: string,
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >
) {
  DictionaryOfFoundMediaCSSFromAllFile[
    result.mediaDescription + result.className
  ] = {
    className: "",
    css: result.css,
    order: next_media_order_position,
    filename: filename,
    source: result.source,
    mediaDescription: result.mediaDescription,
  };
}

function StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
  distinctClassAndCss: IClassNameCssSourceAndFilename,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  filename: string
) {
  DictionaryOfFoundCSSFromAllFile[distinctClassAndCss.className] = {
    className: distinctClassAndCss.className,
    css: distinctClassAndCss.css,
    filename: filename,
    source: distinctClassAndCss.source,
  };
}

function FindCustomClasses(
  RegExToTryList: Array<RegExp>,
  data: string,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  filename: string
) {
  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

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

      // let RegExToTryList = [
      //   no_hyphen,
      //   single_hyphen_then_colon,
      //   single_hyphen_then_colon_then_another_hyphen,
      //   double_hyphen_then_colon_snappable,
      //   double_hyphen_then_colon,
      //   single_hyphen_then_colon_box_shadow_snappable,
      //   single_hyphen_then_colon_box_shadow,
      //   no_hyphen_pixel_values,
      //   border_shorthand,
      // ];

      let ProcessingComplete: boolean = false;

      RegExToTryList.forEach((RegExToTry) => {
        if (ProcessingComplete) return;

        let r = GenericRegexNonMediaCustomClass(
          item,
          RegExToTry,
          RegExToTry.source
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
          ProcessingComplete = true;
        }
      });
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
  RegExToTryList: Array<RegExp>,
  data: string,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  filename: string
) {
  let classComplete = /class=\"(?<classComplete>.+)\"/gi;
  let classCompleteMatch = data.matchAll(classComplete);

  for (const classIndividual of classCompleteMatch) {
    let classIndividualString = ` ${classIndividual.groups?.["classComplete"]} `;
    let splitIndividualClassItems = classIndividualString.split(" ");

    splitIndividualClassItems.forEach((item) => {
      if (item === "") return;

      let distinctClassAndCss: IClassNameCssSourceAndFilename;

      // let RegExToTryList = [
      //   single_hyphen_then_colon,
      //   single_hyphen_then_colon_then_another_hyphen,
      //   double_hyphen_then_colon,
      //   double_hyphen_then_colon_snappable,
      //   single_hyphen_then_colon_box_shadow,
      //   single_hyphen_then_colon_box_shadow_snappable,
      //   no_hyphen,
      //   no_hyphen_pixel_values,
      //   border_shorthand,
      // ];

      RegExToTryList.forEach((RegExToTry) => {
        distinctClassAndCss = GenericRegexNonMedia(
          item,
          RegExToTry,
          RegExToTry.source
        );

        StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
          distinctClassAndCss,
          DictionaryOfFoundCSSFromAllFile,
          filename
        );
      });
    });
  }
}

function ClearExistingCSS(
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >,
  filename: string
) {
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
}

function GenerateCSSStringForUnitTests(
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >
): string {
  let css = "";

  // Return as string for unit tests
  for (const key in DictionaryOfFoundCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      let TempCustomClass = `.${key} ${DictionaryOfFoundCSSFromAllFile[key].css}`;
      css += TempCustomClass.trim() + "\r\n";
    }
  }

  for (const key in DictionaryOfFoundMediaCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      let TempCustomClass = `${key}${DictionaryOfFoundMediaCSSFromAllFile[key].className}${DictionaryOfFoundMediaCSSFromAllFile[key].css}`;
      css += TempCustomClass.trim() + "\r\n";
    }
  }

  return css;
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
