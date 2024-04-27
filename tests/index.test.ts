import { DoWork } from "../src/main";
import { BorderSizes, FontSizes, PaddingSizes } from "../src/Sizes";
import {
  MediaBreakPointsValue,
  MediaBreakPointsText,
} from "../src/mediaBreakpoints";

describe("display flex", () => {
  test("display flex", () => {
    expect(DoWork("./tests/flex/display_flex.html", "")).toContain(
      `.display\\:flex {\r\n\tdisplay: flex;\r\n}`
    );
  });

  test("display flex with Media Large", () => {
    expect(DoWork("./tests/flex/display_flex.html", "")).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });
});

/////////////////////////
describe("flex direction", () => {
  test("flex direction", () => {
    expect(DoWork("./tests/flex/flex_direction.html", "")).toContain(
      `.flex-direction\\:row {\r\n\tflex-direction: row;\r\n}`
    );
  });

  test("flex direction with Media", () => {
    expect(DoWork("./tests/flex/flex_direction.html", "")).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?flex-direction\\:row {\r\n\tflex-direction: row;\r\n\t}\r\n}`
    );
  });

  test("flex gap", () => {
    expect(DoWork("./tests/flex/flex_gap.html", "")).toContain(
      `.flex-direction\\:row {\r\n\tflex-direction: row;\r\n}`
    );
  });
});

/////////////////////////////
describe("Padding Snap", () => {
  test("Padding Snapping XS", () => {
    expect(DoWork("./tests/padding/padding_xs.html", "")).toContain(
      `.padding\\:xs {\r\n\tpadding: ${PaddingSizes.xs};\r\n}`
    );
  });
  test("Padding Snapping SM", () => {
    expect(DoWork("./tests/padding/padding_sm.html", "")).toContain(
      `.padding\\:sm {\r\n\tpadding: ${PaddingSizes.sm};\r\n}`
    );
  });
  test("Padding Snapping MD", () => {
    expect(DoWork("./tests/padding/padding_md.html", "")).toContain(
      `.padding\\:md {\r\n\tpadding: ${PaddingSizes.md};\r\n}`
    );
  });
  test("Padding Snapping LG", () => {
    expect(DoWork("./tests/padding/padding_lg.html", "")).toContain(
      `.padding\\:lg {\r\n\tpadding: ${PaddingSizes.lg};\r\n}`
    );
  });
  test("Padding Snapping XL", () => {
    expect(DoWork("./tests/padding/padding_xl.html", "")).toContain(
      `.padding\\:xl {\r\n\tpadding: ${PaddingSizes.xl};\r\n}`
    );
  });
  test("Padding Snapping 2XL", () => {
    expect(DoWork("./tests/padding/padding_2xl.html", "")).toContain(
      `.padding\\:2xl {\r\n\tpadding: ${PaddingSizes.xl2};\r\n}`
    );
  });
});

/////////////////////////////////
describe("Background Color", () => {
  test("BackGround Color", () => {
    expect(
      DoWork("./tests/background-color/background_color.html", "")
    ).toContain(`.background-color\\:red {\r\n\tbackground-color: red;\r\n}`);
  });

  test("BackGround Color Media Small", () => {
    expect(
      DoWork("./tests/background-color/background_color.html", "")
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?background-color\\:red {\r\n\tbackground-color: red;\r\n\t}\r\n}`
    );
  });

  test("BackGround Color Hover", () => {
    expect(
      DoWork("./tests/background-color/background_color.html", "")
    ).toContain(
      `.background-color\\:red\\:hover:hover {\r\n\tbackground-color: red;\r\n}`
    );
  });
});

/////////////////////////////
describe("Border", () => {
  test("Border Width Snapping XS", () => {
    expect(DoWork("./tests/border-width/border_xs.html", "")).toContain(
      `.border-width\\:xs {\r\n\tborder-width: ${BorderSizes.xs};\r\n}`
    );
  });
  test("Border Width Snapping SM", () => {
    expect(DoWork("./tests/border-width/border_sm.html", "")).toContain(
      `.border-width\\:sm {\r\n\tborder-width: ${BorderSizes.sm};\r\n}`
    );
  });
  test("Border Width Snapping MD", () => {
    expect(DoWork("./tests/border-width/border_md.html", "")).toContain(
      `.border-width\\:md {\r\n\tborder-width: ${BorderSizes.md};\r\n}`
    );
  });
  test("Border Width Snapping LG", () => {
    expect(DoWork("./tests/border-width/border_lg.html", "")).toContain(
      `.border-width\\:lg {\r\n\tborder-width: ${BorderSizes.lg};\r\n}`
    );
  });
  test("Border Width Snapping XL", () => {
    expect(DoWork("./tests/border-width/border_xl.html", "")).toContain(
      `.border-width\\:xl {\r\n\tborder-width: ${BorderSizes.xl};\r\n}`
    );
  });
  test("Border Width Snapping 2XL", () => {
    expect(DoWork("./tests/border-width/border_2xl.html", "")).toContain(
      `.border-width\\:2xl {\r\n\tborder-width: ${BorderSizes.xl2};\r\n}`
    );
  });
});

/////////////////////////////
describe("FontSize", () => {
  test("FontSize XS", () => {
    expect(DoWork("./tests/fontsize/fontsize_xs.html", "")).toContain(
      `.font-size\\:xs {\r\n\tfont-size: ${FontSizes.xs};\r\n}`
    );
  });
  test("FontSize Snapping SM", () => {
    expect(DoWork("./tests/fontsize/fontsize_sm.html", "")).toContain(
      `.font-size\\:sm {\r\n\tfont-size: ${FontSizes.sm};\r\n}`
    );
  });
  test("Font Size Snapping MD", () => {
    expect(DoWork("./tests/fontsize/fontsize_md.html", "")).toContain(
      `.font-size\\:md {\r\n\tfont-size: ${FontSizes.md};\r\n}`
    );
  });
  test("Font Size Snapping LG", () => {
    expect(DoWork("./tests/fontsize/fontsize_lg.html", "")).toContain(
      `.font-size\\:lg {\r\n\tfont-size: ${FontSizes.lg};\r\n}`
    );
  });
  test("Font Size Snapping XL", () => {
    expect(DoWork("./tests/fontsize/fontsize_xl.html", "")).toContain(
      `.font-size\\:xl {\r\n\tfont-size: ${FontSizes.xl};\r\n}`
    );
  });
  test("Font Size Snapping 2XL", () => {
    expect(DoWork("./tests/fontsize/fontsize_2xl.html", "")).toContain(
      `.font-size\\:2xl {\r\n\tfont-size: ${FontSizes.xl2};\r\n}`
    );
  });
  test("Font Size Media Medium", () => {
    expect(DoWork("./tests/fontsize/fontsize_media.html", "")).toContain(
      `@media (min-width: ${MediaBreakPointsValue.medium}px) {\r\n.${MediaBreakPointsText.medium}\\?font-size\\:xl {\r\n\tfont-size: ${FontSizes.xl};\r\n\t}\r\n}`
    );
  });
});
