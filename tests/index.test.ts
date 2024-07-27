import { DoWork } from "../src/main";
import {
  BorderSizes,
  FontSizes,
  PaddingSizes,
  GapSizes,
  BorderRadius,
  FontWeights,
} from "../src/Sizes";
import {
  MediaBreakPointsValue,
  MediaBreakPointsText,
} from "../src/mediaBreakpoints";
describe("FontSize", () => {
  test("FontSize XS", () => {
    expect(DoWork("./tests/fontsize/fontsize_xs.html", "")).toContain(
      `.font-size\\:xs {\r\n\tfont-size: ${FontSizes.xs};\r\n}`
    );
  });
});
