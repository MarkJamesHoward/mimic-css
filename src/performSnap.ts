import {
  Sizes,
  PaddingSizes,
  BorderSizes,
  MarginSizes,
  FontSizes,
  BoxShadowSizes,
  BorderRadius,
  GapSizes,
  FontWeights,
  LineHeight,
  ColorSizes,
  color_palette_1,
  color_palette_2,
  color_palette_3,
  color_palette_4,
} from "./Sizes";

import { mimicConfig } from "./configurationLoader";

// export function PerformSnap4(
//   type: string,
//   value1: string,
//   value2: string,
//   value3: string,
//   value4: string
// ) {
//   let result;

//   switch (type) {
//     case "padding":
//     case "margin":
//       switch (value1) {
//         case Sizes.xs:
//           result = PaddingSizes.xs;
//           break;

//         case Sizes.sm:
//           result = PaddingSizes.sm;
//           break;

//         case Sizes.md:
//           result = PaddingSizes.md;
//           break;

//         case Sizes.lg:
//           result = PaddingSizes.lg;
//           break;

//         case Sizes.xl:
//           result = PaddingSizes.xl;
//           break;

//         case Sizes.xl2:
//           result = PaddingSizes.xl2;
//           break;

//         default:
//           result = PaddingSizes.xs;
//           break;
//       }
//       break;
//   }

//   return result;
// }

export function PerformSnap(type: string, value: string) {
  let result = "";
  //  console.log(type)
  //  console.log(value)

  if (
    value?.includes("px") ||
    value?.includes("rem") ||
    value?.includes("%") ||
    value?.includes("ch")
  ) {
    return value;
  }

  switch (type) {
    case "background-color":
    case "color":
      switch (value) {
        case ColorSizes.c1a:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1a ?? color_palette_1.c1a;
          break;

        case ColorSizes.c1b:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1b ?? color_palette_1.c1b;
          break;

        case ColorSizes.c1c:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1c ?? color_palette_1.c1c;
          break;

        case ColorSizes.c1d:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1d ?? color_palette_1.c1d;
          break;

        case ColorSizes.c2a:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2a ?? color_palette_2.c2a;
          break;

        case ColorSizes.c2b:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2b ?? color_palette_2.c2b;
          break;

        case ColorSizes.c2c:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2c ?? color_palette_2.c2c;
          break;

        case ColorSizes.c2d:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2d ?? color_palette_2.c2d;
          break;

        case ColorSizes.c3a:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3a ?? color_palette_3.c3a;
          break;

        case ColorSizes.c3b:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3b ?? color_palette_3.c3b;
          break;

        case ColorSizes.c3c:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3c ?? color_palette_3.c3c;
          break;

        case ColorSizes.c3d:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3d ?? color_palette_3.c3d;
          break;

        case ColorSizes.c4a:
          result =
            mimicConfig?.ColorPalette4Snapping?.c4a ?? color_palette_4.c4a;
          break;

        case ColorSizes.c4b:
          result =
            mimicConfig?.ColorPalette4Snapping?.c4b ?? color_palette_4.c4b;
          break;

        case ColorSizes.c4c:
          result =
            mimicConfig?.ColorPalette4Snapping?.c4c ?? color_palette_4.c4c;
          break;

        case ColorSizes.c4d:
          result =
            mimicConfig?.ColorPalette4Snapping?.c4d ?? color_palette_4.c4d;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "box-shadow":
      switch (value) {
        case Sizes.xs:
          result = mimicConfig?.BoxShadowSnapping?.xs ?? BoxShadowSizes.xs;
          break;

        case Sizes.sm:
          result = mimicConfig?.BoxShadowSnapping?.xs ?? BoxShadowSizes.sm;
          break;

        case Sizes.md:
          result = mimicConfig?.BoxShadowSnapping?.xs ?? BoxShadowSizes.md;
          break;

        case Sizes.lg:
          result = mimicConfig?.BoxShadowSnapping?.xs ?? BoxShadowSizes.lg;
          break;

        case Sizes.xl:
          result = mimicConfig?.BoxShadowSnapping?.xs ?? BoxShadowSizes.xl;
          break;

        case Sizes.xl2:
          result = mimicConfig?.BoxShadowSnapping?.xs ?? BoxShadowSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "padding-top":
    case "padding-left":
    case "padding-bottom":
    case "padding-right":
    case "padding":
      switch (value) {
        case Sizes.xs:
          result = mimicConfig?.PaddingSnapping?.xs ?? PaddingSizes.xs;
          break;

        case Sizes.sm:
          result = mimicConfig?.PaddingSnapping?.sm ?? PaddingSizes.sm;
          break;

        case Sizes.md:
          result = mimicConfig?.PaddingSnapping?.md ?? PaddingSizes.md;
          break;

        case Sizes.lg:
          result = mimicConfig?.PaddingSnapping?.lg ?? PaddingSizes.lg;
          break;

        case Sizes.xl:
          result = mimicConfig?.PaddingSnapping?.xl ?? PaddingSizes.xl;
          break;

        case Sizes.xl2:
          result = mimicConfig?.PaddingSnapping?.xl2 ?? PaddingSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "gap":
      switch (value) {
        case Sizes.xs:
          result = mimicConfig?.GapSnapping?.xs ?? GapSizes.xs;
          break;

        case Sizes.sm:
          result = mimicConfig?.GapSnapping?.sm ?? GapSizes.sm;
          break;

        case Sizes.md:
          result = mimicConfig?.GapSnapping?.md ?? GapSizes.md;
          break;

        case Sizes.lg:
          result = mimicConfig?.GapSnapping?.lg ?? GapSizes.lg;
          break;

        case Sizes.xl:
          result = mimicConfig?.GapSnapping?.xl ?? GapSizes.xl;
          break;

        case Sizes.xl2:
          result = mimicConfig?.GapSnapping?.xl2 ?? GapSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "line-height":
      switch (value) {
        case Sizes.xs:
          result = mimicConfig?.lineHeightSnapping?.xs ?? LineHeight.xs;
          break;

        case Sizes.sm:
          result = mimicConfig?.lineHeightSnapping?.sm ?? LineHeight.sm;
          break;

        case Sizes.md:
          result = mimicConfig?.lineHeightSnapping?.md ?? LineHeight.md;
          break;

        case Sizes.lg:
          result = mimicConfig?.lineHeightSnapping?.lg ?? LineHeight.lg;
          break;

        case Sizes.xl:
          result = mimicConfig?.lineHeightSnapping?.xl ?? LineHeight.xl;
          break;

        case Sizes.xl2:
          result = mimicConfig?.lineHeightSnapping?.xl2 ?? LineHeight.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "border-width":
      switch (value) {
        case Sizes.xs:
          result = mimicConfig?.BorderWidthSnapping?.xs ?? BorderSizes.xs;
          break;

        case Sizes.sm:
          result = mimicConfig?.BorderWidthSnapping?.sm ?? BorderSizes.sm;
          break;

        case Sizes.md:
          result = mimicConfig?.BorderWidthSnapping?.md ?? BorderSizes.md;
          break;

        case Sizes.lg:
          result = mimicConfig?.BorderWidthSnapping?.lg ?? BorderSizes.lg;
          break;

        case Sizes.xl:
          result = mimicConfig?.BorderWidthSnapping?.xl ?? BorderSizes.xl;
          break;

        case Sizes.xl2:
          result = mimicConfig?.BorderWidthSnapping?.xl2 ?? BorderSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "margin-top":
    case "margin-left":
    case "margin-bottom":
    case "margin-right":
    case "margin":
      switch (value) {
        case Sizes.xs:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.xs;
          break;

        case Sizes.sm:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.sm;
          break;

        case Sizes.md:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.md;
          break;

        case Sizes.lg:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.lg;
          break;

        case Sizes.xl:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.xl;
          break;

        case Sizes.xl2:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;

    case "font-size":
      switch (value) {
        case Sizes.xs:
          result = FontSizes.xs;
          break;

        case Sizes.sm:
          result = FontSizes.sm;
          break;

        case Sizes.md:
          result = FontSizes.md;
          break;

        case Sizes.lg:
          result = FontSizes.lg;
          break;

        case Sizes.xl:
          result = FontSizes.xl;
          break;

        case Sizes.xl2:
          result = FontSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;

    case "font-weight":
      switch (value) {
        case Sizes.xs:
          result = FontWeights.xs;
          break;

        case Sizes.sm:
          result = FontWeights.sm;
          break;

        case Sizes.md:
          result = FontWeights.md;
          break;

        case Sizes.lg:
          result = FontWeights.lg;
          break;

        case Sizes.xl:
          result = FontWeights.xl;
          break;

        case Sizes.xl2:
          result = FontWeights.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;

    case "border-radius":
      switch (value) {
        case Sizes.xs:
          result = BorderRadius.xs;
          break;

        case Sizes.sm:
          result = BorderRadius.sm;
          break;

        case Sizes.md:
          result = BorderRadius.md;
          break;

        case Sizes.lg:
          result = BorderRadius.lg;
          break;

        case Sizes.xl:
          result = BorderRadius.xl;
          break;

        case Sizes.xl2:
          result = BorderRadius.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    default:
      result = value;
      break;
  }
  //console.log("snapping return " + result);
  return result;
}
