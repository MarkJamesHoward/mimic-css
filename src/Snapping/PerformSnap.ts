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

import { mimicConfig } from "../ConfigurationLoader";

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
    case "text-decoration-color":
    case "color":
      switch (value) {
        case mimicConfig?.ColorPalette1TextOverride?.colora ?? ColorSizes.c1a:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1a ?? color_palette_1.c1a;
          break;

        case mimicConfig?.ColorPalette1TextOverride?.colorb ?? ColorSizes.c1b:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1b ?? color_palette_1.c1b;
          break;

        case mimicConfig?.ColorPalette1TextOverride?.colorc ?? ColorSizes.c1c:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1c ?? color_palette_1.c1c;
          break;

        case mimicConfig?.ColorPalette1TextOverride?.colord ?? ColorSizes.c1d:
          result =
            mimicConfig?.ColorPalette1Snapping?.c1d ?? color_palette_1.c1d;
          break;

        case mimicConfig?.ColorPalette2TextOverride?.colora ?? ColorSizes.c2a:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2a ?? color_palette_2.c2a;
          break;

        case mimicConfig?.ColorPalette2TextOverride?.colorb ?? ColorSizes.c2b:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2b ?? color_palette_2.c2b;
          break;

        case mimicConfig?.ColorPalette2TextOverride?.colorc ?? ColorSizes.c2c:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2c ?? color_palette_2.c2c;
          break;

        case mimicConfig?.ColorPalette2TextOverride?.colord ?? ColorSizes.c2d:
          result =
            mimicConfig?.ColorPalette2Snapping?.c2d ?? color_palette_2.c2d;
          break;

        case mimicConfig?.ColorPalette3TextOverride?.colora ?? ColorSizes.c3a:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3a ?? color_palette_3.c3a;
          break;

        case mimicConfig?.ColorPalette3TextOverride?.colorb ?? ColorSizes.c3b:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3b ?? color_palette_3.c3b;
          break;

        case mimicConfig?.ColorPalette3TextOverride?.colorc ?? ColorSizes.c3c:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3c ?? color_palette_3.c3c;
          break;

        case mimicConfig?.ColorPalette3TextOverride?.colord ?? ColorSizes.c3d:
          result =
            mimicConfig?.ColorPalette3Snapping?.c3d ?? color_palette_3.c3d;
          break;

        case mimicConfig?.ColorPalette4TextOverride?.colora ?? ColorSizes.c4a:
          result =
            mimicConfig?.ColorPalette4Snapping?.c4a ?? color_palette_4.c4a;
          break;

        case mimicConfig?.ColorPalette4TextOverride?.colorb ?? ColorSizes.c4b:
          result =
            mimicConfig?.ColorPalette4Snapping?.c4b ?? color_palette_4.c4b;
          break;

        case mimicConfig?.ColorPalette4TextOverride?.colorc ?? ColorSizes.c4c:
          result =
            mimicConfig?.ColorPalette4Snapping?.c4c ?? color_palette_4.c4c;
          break;

        case mimicConfig?.ColorPalette4TextOverride?.colord ?? ColorSizes.c4d:
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
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = mimicConfig?.BoxShadowSnapping?.xs ?? BoxShadowSizes.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = mimicConfig?.BoxShadowSnapping?.sm ?? BoxShadowSizes.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = mimicConfig?.BoxShadowSnapping?.md ?? BoxShadowSizes.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = mimicConfig?.BoxShadowSnapping?.lg ?? BoxShadowSizes.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = mimicConfig?.BoxShadowSnapping?.xl ?? BoxShadowSizes.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
          result = mimicConfig?.BoxShadowSnapping?.xl2 ?? BoxShadowSizes.xl2;
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
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = mimicConfig?.PaddingSnapping?.xs ?? PaddingSizes.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = mimicConfig?.PaddingSnapping?.sm ?? PaddingSizes.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = mimicConfig?.PaddingSnapping?.md ?? PaddingSizes.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = mimicConfig?.PaddingSnapping?.lg ?? PaddingSizes.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = mimicConfig?.PaddingSnapping?.xl ?? PaddingSizes.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
          result = mimicConfig?.PaddingSnapping?.xl2 ?? PaddingSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "gap":
      switch (value) {
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = mimicConfig?.GapSnapping?.xs ?? GapSizes.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = mimicConfig?.GapSnapping?.sm ?? GapSizes.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = mimicConfig?.GapSnapping?.md ?? GapSizes.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = mimicConfig?.GapSnapping?.lg ?? GapSizes.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = mimicConfig?.GapSnapping?.xl ?? GapSizes.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
          result = mimicConfig?.GapSnapping?.xl2 ?? GapSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "line-height":
      switch (value) {
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = mimicConfig?.lineHeightSnapping?.xs ?? LineHeight.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = mimicConfig?.lineHeightSnapping?.sm ?? LineHeight.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = mimicConfig?.lineHeightSnapping?.md ?? LineHeight.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = mimicConfig?.lineHeightSnapping?.lg ?? LineHeight.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = mimicConfig?.lineHeightSnapping?.xl ?? LineHeight.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
          result = mimicConfig?.lineHeightSnapping?.xl2 ?? LineHeight.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;
    case "border-width":
      switch (value) {
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = mimicConfig?.BorderWidthSnapping?.xs ?? BorderSizes.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = mimicConfig?.BorderWidthSnapping?.sm ?? BorderSizes.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = mimicConfig?.BorderWidthSnapping?.md ?? BorderSizes.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = mimicConfig?.BorderWidthSnapping?.lg ?? BorderSizes.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = mimicConfig?.BorderWidthSnapping?.xl ?? BorderSizes.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
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
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
          result = mimicConfig?.MarginSnapping?.xl2 ?? MarginSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;

    case "font-size":
      switch (value) {
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = FontSizes.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = FontSizes.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = FontSizes.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = FontSizes.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = FontSizes.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
          result = FontSizes.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;

    case "font-weight":
      switch (value) {
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = FontWeights.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = FontWeights.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = FontWeights.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = FontWeights.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = FontWeights.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
          result = FontWeights.xl2;
          break;

        default:
          result = value;
          break;
      }
      break;

    case "border-radius":
      switch (value) {
        case mimicConfig?.SnappingOverride?.xs ?? Sizes.xs:
          result = BorderRadius.xs;
          break;

        case mimicConfig?.SnappingOverride?.sm ?? Sizes.sm:
          result = BorderRadius.sm;
          break;

        case mimicConfig?.SnappingOverride?.md ?? Sizes.md:
          result = BorderRadius.md;
          break;

        case mimicConfig?.SnappingOverride?.lg ?? Sizes.lg:
          result = BorderRadius.lg;
          break;

        case mimicConfig?.SnappingOverride?.xl ?? Sizes.xl:
          result = BorderRadius.xl;
          break;

        case mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2:
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
