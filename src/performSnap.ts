import {
  Sizes,
  PaddingSizes,
  BorderSizes,
  MarginSizes,
  FontSizes,
  GenericSizes,
} from "./Sizes";

export function PerformSnap4(
  type: string,
  value1: string,
  value2: string,
  value3: string,
  value4: string
) {
  let result;

  switch (type) {
    case "padding":
    case "margin":
      switch (value1) {
        case Sizes.xs:
          result = PaddingSizes.xs;
          break;

        case Sizes.sm:
          result = PaddingSizes.sm;
          break;

        case Sizes.md:
          result = PaddingSizes.md;
          break;

        case Sizes.lg:
          result = PaddingSizes.lg;
          break;

        case Sizes.xl:
          result = PaddingSizes.xl;
          break;

        case Sizes.xl2:
          result = PaddingSizes.xl2;
          break;

        default:
          result = PaddingSizes.xs;
          break;
      }
      break;
  }

  return result;
}

export function PerformSnap(type: string, value: string) {
  let result = "";
  //  console.log(type)
  //  console.log(value)

  if (
    value.includes("px") ||
    value.includes("rem") ||
    value.includes("%") ||
    value.includes("ch")
  ) {
    return value;
  }

  switch (type) {
    case "padding-top":
    case "padding-left":
    case "padding-bottom":
    case "padding-right":
    case "padding":
      switch (value) {
        case Sizes.xs:
          result = PaddingSizes.xs;
          break;

        case Sizes.sm:
          result = PaddingSizes.sm;
          break;

        case Sizes.md:
          result = PaddingSizes.md;
          break;

        case Sizes.lg:
          result = PaddingSizes.lg;
          break;

        case Sizes.xl:
          result = PaddingSizes.xl;
          break;

        case Sizes.xl2:
          result = PaddingSizes.xl2;
          break;

        default:
          result = PaddingSizes.xs;
          break;
      }
      break;
    case "border-width":
      switch (value) {
        case Sizes.xs:
          result = BorderSizes.xs;
          break;

        case Sizes.sm:
          result = BorderSizes.sm;
          break;

        case Sizes.md:
          result = BorderSizes.md;
          break;

        case Sizes.lg:
          result = BorderSizes.lg;
          break;

        case Sizes.xl:
          result = BorderSizes.xl;
          break;

        case Sizes.xl2:
          result = BorderSizes.xl2;
          break;

        default:
          result = BorderSizes.xs;
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
          result = MarginSizes.xs;
          break;

        case Sizes.sm:
          result = MarginSizes.sm;
          break;

        case Sizes.md:
          result = MarginSizes.md;
          break;

        case Sizes.lg:
          result = MarginSizes.lg;
          break;

        case Sizes.xl:
          result = MarginSizes.xl;
          break;

        case Sizes.xl2:
          result = MarginSizes.xl2;
          break;

        default:
          result = MarginSizes.xs;
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
          result = FontSizes.xs;
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
