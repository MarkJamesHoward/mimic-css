import {
  IClassNameCssSourceAndFilename,
  ICustomClassBuilder,
  IMediaClassCSSOrderFilenameAndSource,
} from "../interfaces/ICustomClassBuilder";
import {
  GenericRegexMedia,
  GenericRegexNonMedia,
  GenericRegexNonMediaCustomClass,
} from "./RegExPerform";

import {
  double_hyphen_then_colon,
  single_hyphen_then_colon,
  single_hyphen_then_colon_snappable,
  single_hyphen_then_colon_then_another_hyphen,
  single_hyphen_then_colon_box_shadow,
  no_hyphen_pixel_values,
  // no_hyphen_snappable,
  no_hyphen,
  single_hyphen_hash_value,
  RegenerateRegExExpressions,
  double_hyphen_then_colon_snappable,
  single_hyphen_then_colon_box_shadow_snappable,
} from "./RegExp/RegExDefinitions";

import fs from "fs";

export function DoWork(
  filename: string,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >,
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >
): string {
  ClearExistingCSS(
    DictionaryOfFoundCSSFromAllFile,
    DictionaryOfFoundMediaCSSFromAllFile,
    filename
  );

  const data = fs.readFileSync(filename, "utf8");

  RegenerateRegExExpressions();

  FindNonMedia(data, DictionaryOfFoundCSSFromAllFile, filename);

  FindMediaQueryClasses(data, DictionaryOfFoundMediaCSSFromAllFile, filename);

  FindCustomClasses(data, DictionaryOfFoundCSSFromAllFile, filename);

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

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon,
        "SingleHypenMedia"
      );
      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenAnotherHyphenMedia"
      );

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      result = GenericRegexMedia(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenMedia"
      );

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadowMedia"
      );

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_box_shadow_snappable,
        "single_hyphen_then_colon_box_shadow_snappable"
      );

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      result = GenericRegexMedia(
        item,
        single_hyphen_then_colon_snappable,
        "single_hyphen_then_colon_snappable"
      );

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      result = GenericRegexMedia(item, no_hyphen, "NoHypen");

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      // result = GenericRegexMedia(
      //   item,
      //   no_hyphen_snappable,
      //   "NoHyphenSnapableMedia"
      // );

      // AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
      //   result,
      //   next_media_order_position,
      //   filename,
      //   DictionaryOfFoundMediaCSSFromAllFile
      // );

      result = GenericRegexMedia(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues"
      );

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );

      result = GenericRegexMedia(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValueMedia"
      );

      AddIndividualMdiaClassToDictionaryOfFoundMediaCSSFromAllFile(
        result,
        next_media_order_position,
        filename,
        DictionaryOfFoundMediaCSSFromAllFile
      );
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
        double_hyphen_then_colon_snappable,
        "DoubleHyphenTheColonSnappable_CustomClass"
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
        single_hyphen_then_colon_box_shadow_snappable,
        "single_hyphen_then_colon_box_shadow_snappable"
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

      // r = GenericRegexNonMediaCustomClass(
      //   item,
      //   no_hyphen_snappable,
      //   "NoHyphenSnapable_CustomClass"
      // );

      // ({ constructedClassMemberList, constructedClassName } =
      //   UpdateClassMembersOfCustomClass(
      //     r.className,
      //     r.classMember,
      //     constructedClassMemberList
      //   ));

      // if (
      //   AddCustomClassTo_DictionaryOfFoundCSSFromAllFile(
      //     constructedClassName,
      //     constructedClassMemberList,
      //     classGenerationInProgress,
      //     DictionaryOfFoundCSSFromAllFile,
      //     filename,
      //     "Test"
      //   )
      // ) {
      //   return;
      // }

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

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon"
      );

      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon,
        "SingleHypenThenColon"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon_then_another_hyphen,
        "SingleHypenThenColonThenAnotherHyphen"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        double_hyphen_then_colon,
        "DoubleHyphenTheColon"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        double_hyphen_then_colon_snappable,
        "DoubleHyphenTheColonSnappable"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon_box_shadow,
        "SingleHyphenBoxShadow"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon_snappable,
        "single_hyphen_then_colon_snappable"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        single_hyphen_then_colon_box_shadow_snappable,
        "single_hyphen_then_colon_box_shadow_snappable"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(item, no_hyphen, "NoHypen");
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      // distinctClassAndCss = GenericRegexNonMedia(
      //   item,
      //   no_hyphen_snappable,
      //   "NoHyphenSnapable"
      // );
      // StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
      //   distinctClassAndCss,
      //   DictionaryOfFoundCSSFromAllFile,
      //   filename
      // );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        no_hyphen_pixel_values,
        "NoHyphenPixeValues"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );

      distinctClassAndCss = GenericRegexNonMedia(
        item,
        single_hyphen_hash_value,
        "SingleHyphenHashValue"
      );
      StoreNonMediaClassIn_DictionaryOfFoundCSSFromAllFile(
        distinctClassAndCss,
        DictionaryOfFoundCSSFromAllFile,
        filename
      );
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
