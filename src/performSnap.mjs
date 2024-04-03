import { Sizes, PaddingSizes, FontSizes, GenericSizes } from "./Sizes.mjs";

export function PerformSnap(type, value) {
  let result = 0;
  //  console.log(type)
  //  console.log(value)

  switch (type) {
    case "padding-top":
    case "padding-left":
    case "padding-bottom":
    case "padding-right":
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
      switch (value) {
        case Sizes.xs:
          result = GenericSizes.xs;
          break;

        case Sizes.sm:
          result = GenericSizes.sm;
          break;

        case Sizes.md:
          result = GenericSizes.md;
          break;

        case Sizes.lg:
          result = GenericSizes.lg;
          break;

        case Sizes.xl:
          result = GenericSizes.xl;
          break;

        case Sizes.xl2:
          result = GenericSizes.xl2;
          break;

        default:
          result = GenericSizes.xs;
          break;
      }
      break;
  }
  console.log("snapping return " + result);
  return result;
}