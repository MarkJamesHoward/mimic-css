import { PerformSnap } from "./performSnap";
import { MapMediaQuery } from "./processMediaQueries";
import { Escape } from "./EscapingClassNames";

let debug = false;

export function GenerateMimicClass(
  source: string,
  style: string,
  value1: string,
  value2: string,
  value3: string,
  value4: string,
  value1type: string,
  value2type: string,
  value3type: string,
  value4type: string,
  media: string,
  pseudo: string,
  color: string
) {
  let width = MapMediaQuery(media?.replace("?", ""));

  let snappedvalue1 = PerformSnap(style, value1);
  let snappedvalue2 = value2 == "" ? "" : PerformSnap(style, value2);
  let snappedvalue3 = value3 == "" ? "" : PerformSnap(style, value3);
  let snappedvalue4 = value4 == "" ? "" : PerformSnap(style, value4);

  value1type = value1type == "" || value1type == undefined ? "" : value1type;
  value2type = value2type == "" || value2type == undefined ? "" : value2type;
  value3type = value3type == "" || value3type == undefined ? "" : value3type;
  value4type = value4type == "" || value4type == undefined ? "" : value4type;

  value1 = value1 == "" || value1 == undefined ? "" : value1;
  value2 = value2 == "" || value2 == undefined ? "" : value2;
  value3 = value3 == "" || value3 == undefined ? "" : value3;
  value4 = value4 == "" || value4 == undefined ? "" : value4;

  snappedvalue2 =
    snappedvalue2 == "" || snappedvalue2 == undefined
      ? ""
      : " " + snappedvalue2;
  snappedvalue3 =
    snappedvalue3 == "" || snappedvalue3 == undefined
      ? ""
      : " " + snappedvalue3;
  snappedvalue4 =
    snappedvalue4 == "" || snappedvalue4 == undefined
      ? ""
      : " " + snappedvalue4;
  color = color == "" || color == undefined ? "" : " " + Escape(color);
  let mediaString = `@media (min-width: ${width}px) {\r\n.${media?.replace(
    "?",
    "\\?"
  )}`;

  return (
    `${
      debug
        ? `/* ${source}` +
          //`Media=${media ? media?.replace("?", "") : "none"}` +
          "*/\r\n\r\n"
        : `\r\n\r\n/*MIMIC-CSS*/\r\n`
    }` +
    `${media ? mediaString : ""}` +
    `${media ? "" : "."}${style}\\:${Escape(
      value1
    )}${Escape(value1type)}${value2?.trim()}${value2type}${value3?.trim()}${value3type}${value4?.trim()}${value4type}${color?.trim()}${
      pseudo ? `\\${pseudo}${pseudo}` : ""
    } {\r\n\t` +
    style +
    ": " +
    `${snappedvalue1}${value1type}${snappedvalue2}${value2type}${snappedvalue3}${value3type}${snappedvalue4}${value4type}${color};\r\n` +
    `${media ? "\t" : ""}}\r\n` +
    `${media ? "}\r\n\r\n" : ""}`
  );
}

export function GenerateMimicClass_CustomClass(
  source: string,
  style: string,
  value1: string,
  value2: string,
  value3: string,
  value4: string,
  value1type: string,
  value2type: string,
  value3type: string,
  value4type: string,
  media: string,
  pseudo: string,
  color: string,
): string {
  let width = MapMediaQuery(media?.replace("?", ""));

  let snappedvalue1 = PerformSnap(style, value1);
  let snappedvalue2 = value2 == "" ? "" : PerformSnap(style, value2);
  let snappedvalue3 = value3 == "" ? "" : PerformSnap(style, value3);
  let snappedvalue4 = value4 == "" ? "" : PerformSnap(style, value4);

  value1type = value1type == "" || value1type == undefined ? "" : value1type;
  value2type = value2type == "" || value2type == undefined ? "" : value2type;
  value3type = value3type == "" || value3type == undefined ? "" : value3type;
  value4type = value4type == "" || value4type == undefined ? "" : value4type;

  value1 = value1 == "" || value1 == undefined ? "" : value1;
  value2 = value2 == "" || value2 == undefined ? "" : value2;
  value3 = value3 == "" || value3 == undefined ? "" : value3;
  value4 = value4 == "" || value4 == undefined ? "" : value4;

  snappedvalue2 =
    snappedvalue2 == "" || snappedvalue2 == undefined
      ? ""
      : " " + snappedvalue2;
  snappedvalue3 =
    snappedvalue3 == "" || snappedvalue3 == undefined
      ? ""
      : " " + snappedvalue3;
  snappedvalue4 =
    snappedvalue4 == "" || snappedvalue4 == undefined
      ? ""
      : " " + snappedvalue4;
  color = color == "" || color == undefined ? "" : " " + Escape(color);
  

  return (
    `${style}: ${snappedvalue1}${value1type}${snappedvalue2}${value2type}${snappedvalue3}${value3type}${snappedvalue4}${value4type}${color};\r\n` 
  );
}

