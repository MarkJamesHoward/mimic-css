import {
  IClassNameCssSourceAndFilename,
  IMediaClassCSSOrderFilenameAndSource,
  IMimicFinalCSSOutput,
} from "../interfaces/ICustomClassBuilder";

export function ConstructGeneratedCSS(
  ExistingCSS: IMimicFinalCSSOutput,
  DictionaryOfFoundMediaCSSFromAllFile: Record<
    string,
    IMediaClassCSSOrderFilenameAndSource
  >,
  DictionaryOfFoundCSSFromAllFile: Record<
    string,
    IClassNameCssSourceAndFilename
  >
) {
  ExistingCSS.str = "";

  for (const key in DictionaryOfFoundCSSFromAllFile) {
    if (key !== undefined && key !== "") {
      let TempCustomClass = `/*${DictionaryOfFoundCSSFromAllFile[key].filename}*/\r\n/*${DictionaryOfFoundCSSFromAllFile[key].source}*/\r\n.${key} ${DictionaryOfFoundCSSFromAllFile[key].css}`;
      ExistingCSS.str += TempCustomClass.trim() + "\r\n";
    }
  }

  ExistingCSS.str +=
    ConstructOrderedMediaClasses_EnsuringMostRecentAreAtTheBottom(
      DictionaryOfFoundMediaCSSFromAllFile
    );
}

function ConstructOrderedMediaClasses_EnsuringMostRecentAreAtTheBottom(
  dict: Record<string, IMediaClassCSSOrderFilenameAndSource>
): string {
  let css = "";

  let sortedMediaItems = [];

  sortedMediaItems = Object.keys(dict).map((key: string) => {
    return [key, dict[key].order];
  });

  // Sort the array based on the second element
  // @ts-ignore
  sortedMediaItems.sort(function (first: Array<number>, second: Array<number>) {
    return first[1] - second[1];
  });

  sortedMediaItems.forEach((item) => {
    if (item[0] !== undefined && item[0] !== "") {
      let TempCustomClass = `/*${dict[item[0]].filename}/*\r\n/*${
        dict[item[0]].source
      }*/\r\n${item[0]}${dict[item[0]].className}${dict[item[0]].css}`;
      css += TempCustomClass.trim() + "\r\n";
    }
  });
  return css;
}
