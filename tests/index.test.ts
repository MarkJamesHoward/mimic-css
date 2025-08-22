import { DoWork } from "../src/main";
import {
  BorderSizes,
  FontSizes,
  PaddingSizes,
  GapSizes,
  BorderRadius,
  FontWeights,
  LineHeight,
  color_palette_1,
  BoxShadowSizes,
  color_palette_2,
  color_palette_5,
  ColorSizes,
  Sizes,
} from "../src/Snapping/Sizes";
import {
  MediaBreakPointsValue,
  MediaBreakPointsText,
} from "../src/Snapping/MediaBreakpoints";
import { IMimicConfig } from "../interfaces/IMimicConfig";
import { DataType } from "../interfaces/Enums";

let mimicConfigDEFAULT = {
  extensions: [".html", ".js", ".astro", ".ts"],
  excludeFolders: ["node_modules"],
};

let mimicConfigFontsizeSMOverrideToTiny: IMimicConfig = {
  SnappingOverride: {
    sm: "tiny",
  },
};

let mimicConfigFontsizeXSOverrideToXSmall: IMimicConfig = {
  SnappingOverride: {
    xs: "xsmall",
  },
};

let mimicConfigSnappingSMOverrideToQuiteSmall: IMimicConfig = {
  SnappingOverride: {
    sm: "quite_small",
  },
};

let mimicConfigMediaBreakPointsTextOverride: IMimicConfig = {
  MediaBreakPointsTextOverride: {
    extrasmall: "xs",
    small: "quite_small",
  },
};

describe("Box Shadow", () => {
  test("Box Shadow Focus", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-focus.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.box-shadow\\:10px10px\\:focus:focus {\r\n\tbox-shadow: 10px 10px;\r\n}`
    );
  });

  test("Box Shadow Snapping", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-snapping.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.box-shadow\\:${Sizes.sm}${Sizes.sm} {\r\n\tbox-shadow: ${BoxShadowSizes.sm} ${BoxShadowSizes.sm};\r\n}`
    );
  });

  test("Box Shadow Custom Button", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-custombutton.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.btn {\r\n\tbox-shadow: ${BoxShadowSizes.sm} ${BoxShadowSizes.sm};\r\n}`
    );
  });

  test("Box Shadow", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.box-shadow\\:10px10px {\r\n\tbox-shadow: 10px 10px;\r\n}`);
  });

  test("Box Shadow 4 Values With Color", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-with-color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.box-shadow\\:10px10px20px30pxred {\r\n\tbox-shadow: 10px 10px 20px 30px red;\r\n}`
    );
  });

  test("Box Shadow 2 Values With Color", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-2-values-with-color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.box-shadow\\:10px10pxred {\r\n\tbox-shadow: 10px 10px red;\r\n}`
    );
  });

  test("Box Shadow 2 Values With Color Snap to SM", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-2-values-with-color-snap-sm.html",
        DataType.file,
        {},
        {}
      )
    ).toContain(
      `.box-shadow\\:${Sizes.sm}${Sizes.sm}red {\r\n\tbox-shadow: ${BoxShadowSizes.sm} ${BoxShadowSizes.sm} red;\r\n}`
    );
  });

  test("Box Shadow 2 Values With Color Snap to SM Snap to c1a", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-2-values-with-color-snap-sm-snap-c1a.html",
        DataType.file,
        {},
        {}
      )
    ).toContain(
      `.box-shadow\\:${Sizes.sm}${Sizes.sm}c1text1 {\r\n\tbox-shadow: ${BoxShadowSizes.sm} ${BoxShadowSizes.sm} ${color_palette_1.c1text1};\r\n}`
    );
  });

  test("Box Shadow Hover", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-hover.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.box-shadow\\:10px10px\\:hover:hover {\r\n\tbox-shadow: 10px 10px;\r\n}`
    );
  });

  test("Box Shadow Media Large", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.large}?box-shadow:10px10px">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?box-shadow\\:10px10px {\r\n\tbox-shadow: 10px 10px;\r\n\t}\r\n}`
    );
  });
});

describe("Line Height", () => {
  test("Line Height 1.0", () => {
    expect(
      DoWork(
        "./tests/line-height/line-height.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.line-height\\:1 {\r\n\tline-height: 1;\r\n}`);
  });

  test("Line Height 2.2", () => {
    expect(
      DoWork(
        "./tests/line-height/line-height.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.line-height\\:2.2 {\r\n\tline-height: 2.2;\r\n}`);
  });

  test("Line Height xl", () => {
    expect(
      DoWork(
        "./tests/line-height/line-height.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.line-height\\:${Sizes.xl} {\r\n\tline-height: ${LineHeight.xl};\r\n}`
    );
  });
});

describe("Custom Classes", () => {
  test("Mybutton - One", () => {
    expect(
      DoWork(
        "./tests/custom-classes/my-button-one.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.mybtn {\r\n\tfont-size: ${FontSizes.xl};\r\n}`);
  });

  test("Mybutton - Two", () => {
    expect(
      DoWork(
        "./tests/custom-classes/my-button-two.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.mybtn {\r\n\tfont-size: ${FontSizes.xl};\r\n\tdisplay: flex;\r\n}`
    );
  });

  test("Mybutton - Three", () => {
    expect(
      DoWork(
        "./tests/custom-classes/my-button-three.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.mybtn {\r\n\tfont-size: ${FontSizes.xl};\r\n\tdisplay: flex;\r\n\tborder-width: ${BorderSizes.md};\r\n}`
    );
  });
});

describe("Flex Basis", () => {
  test("Flex Basis", () => {
    expect(
      DoWork(
        "./tests/flex-basis/flex-basis.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.flex-basis\\:30\\% {\r\n\tflex-basis: 30%;\r\n}`);
  });

  test("Flex Basis - Large", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.large}?flex-basis:30%">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?flex-basis\\:30\\% {\r\n\tflex-basis: 30%;\r\n\t}\r\n}`
    );
  });
});

describe("Line Height", () => {
  test("Line Height - Snapping SM Tag Override to quite_small", () => {
    expect(
      DoWork(
        "./tests/overrides/line-height-snapping-sm-override.html",
        DataType.file,
        {},
        {},
        mimicConfigSnappingSMOverrideToQuiteSmall
      )
    ).toContain(
      `.line-height\\:${
        mimicConfigSnappingSMOverrideToQuiteSmall?.SnappingOverride?.sm ??
        Sizes.sm
      } {\r\n\tline-height: ${LineHeight.sm};\r\n}`
    );
  });

  test("Line Height - Snapping SM Tag Override to quite_small - Negative Test", () => {
    expect(
      DoWork(
        "./tests/overrides/line-height-snapping-sm-override.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toEqual("");
  });
});

describe("Justify Content", () => {
  test("Justify-Content - Media - Small", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.small}?justify-content:space-between">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?justify-content\\:space-between {\r\n\tjustify-content: space-between;\r\n\t}\r\n}`
    );
  });

  test("Justify-Content - Media - Large", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.large}?justify-content:space-between">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?justify-content\\:space-between {\r\n\tjustify-content: space-between;\r\n\t}\r\n}`
    );
  });

  test("Justify Content - no snapping", () => {
    expect(
      DoWork(
        "./tests/justify-content/justify_content.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.justify-content\\:space-between {\r\n\tjustify-content: space-between;\r\n}`
    );
  });
});

describe("Font Weight", () => {
  test("Font Weight - no snapping", () => {
    expect(
      DoWork(
        "./tests/font-weight/font_weight.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.font-weight\\:800 {\r\n\tfont-weight: 800;\r\n}`);
  });

  test("Font Weight - no snapping", () => {
    expect(
      DoWork(
        "./tests/font-weight/font_weight.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.font-weight\\:md {\r\n\tfont-weight: ${FontWeights.md};\r\n}`
    );
  });
});

describe("Text Decoration", () => {
  test("Text Decoration", () => {
    expect(
      DoWork(
        "./tests/text-decoration/text-decoration.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.text-decoration\\:none {\r\n\ttext-decoration: none;\r\n}`);
  });

  test("Text Decoration Color", () => {
    expect(
      DoWork(
        "./tests/text-decoration/text-decoration-color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.text-decoration-color\\:\\#444444 {\r\n\ttext-decoration-color: #444444;\r\n}`
    );
  });

  test("Text Decoration Color - Snap c1a", () => {
    expect(
      DoWork(
        "./tests/text-decoration/text-decoration-color-snap-c1a.html",
        DataType.file,
        {},
        {}
      )
    ).toContain(
      `.text-decoration-color\\:${ColorSizes.c1a} {\r\n\ttext-decoration-color: ${color_palette_1.c1text1};\r\n}`
    );
  });
});

describe("Border Shorthand", () => {
  test("Border Shorthand No Snapping", () => {
    expect(
      DoWork(
        `<div class="border:16pxsolidred">`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.border\\:16pxsolidred {\r\n\tborder: 16px solid red;\r\n}`);
  });

  test("Border Shorthand Media Query", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.medium}?border:xlsolidred">`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.medium}px) {\r\n.${MediaBreakPointsText.medium}\\?border\\:xlsolidred {\r\n\tborder: ${BorderSizes.xl} solid red;\r\n\t}\r\n}`
    );
  });

  test("Border Shorthand With Snapping on Color", () => {
    expect(
      DoWork(
        `<div class="border:xlsolidc1text1">`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border\\:xlsolidc1text1 {\r\n\tborder: ${BorderSizes.xl} solid ${color_palette_1.c1text1};\r\n}`
    );
  });

  test("Border Shorthand snapping", () => {
    expect(
      DoWork(
        `<div class="border:xlsolidc1text2">`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border\\:xlsolidc1text2 {\r\n\tborder: ${BorderSizes.xl} solid ${color_palette_1.c1text2};\r\n}`
    );
  });
});

describe("Border Style", () => {
  test("Border Style", () => {
    expect(
      DoWork(
        "./tests/border-style/border_style.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.border-style\\:solid {\r\n\tborder-style: solid;\r\n}`);
  });

  test("Border Style - Large", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.large}?border-style:solid">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?border-style\\:solid {\r\n\tborder-style: solid;\r\n\t}\r\n}`
    );
  });

  test("Border Style - ExtraSmall - Overidden in config to - xs", () => {
    expect(
      DoWork(
        "./tests/border-style/border_style_media_extrasmall_config_override_to_xs.html",
        DataType.file,
        {},
        {},
        mimicConfigMediaBreakPointsTextOverride
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.extrasmall}px) {\r\n.${
        mimicConfigMediaBreakPointsTextOverride?.MediaBreakPointsTextOverride
          ?.extrasmall ?? MediaBreakPointsText.extrasmall
      }\\?border-style\\:solid {\r\n\tborder-style: solid;\r\n\t}\r\n}`
    );
  });

  test("Border Style - Small", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.small}?border-style:solid">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?border-style\\:solid {\r\n\tborder-style: solid;\r\n\t}\r\n}`
    );
  });
});

describe("Border Radius", () => {
  test("Border Radius Snapping - XS", () => {
    expect(
      DoWork(
        "./tests/border-radius/border_radius_xs.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-radius\\:xs {\r\n\tborder-radius: ${BorderRadius.xs};\r\n}`
    );
  });

  test("Border Radius Snapping - SM", () => {
    expect(
      DoWork(
        "./tests/border-radius/border_radius_sm.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-radius\\:${Sizes.sm} {\r\n\tborder-radius: ${BorderRadius.sm};\r\n}`
    );
  });

  test("Border Radius Snapping - XL", () => {
    expect(
      DoWork(
        "./tests/border-radius/border_radius_xl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-radius\\:${Sizes.xl} {\r\n\tborder-radius: ${BorderRadius.xl};\r\n}`
    );
  });
});

describe("display flex", () => {
  test("display flex", () => {
    expect(
      DoWork(
        "./tests/flex/display_flex.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.display\\:flex {\r\n\tdisplay: flex;\r\n}`);
  });

  test("display flex with Media Large", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.large}?display:flex">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });

  test("display flex with Media Medium", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.medium}?display:flex">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.medium}px) {\r\n.${MediaBreakPointsText.medium}\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });

  test("flex gap", () => {
    expect(
      DoWork(
        "./tests/flex/flex_gap.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.gap\\:md {\r\n\tgap: ${GapSizes.md};\r\n}`);
  });
});

/////////////////////////
describe("flex direction", () => {
  test("flex direction", () => {
    expect(
      DoWork(
        "./tests/flex/flex_direction.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.flex-direction\\:row {\r\n\tflex-direction: row;\r\n}`);
  });

  test("flex direction with Media Small", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.small}?flex-direction:row">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?flex-direction\\:row {\r\n\tflex-direction: row;\r\n\t}\r\n}`
    );
  });
});

/////////////////////////////
describe("Padding", () => {
  test("Padding 10px", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.padding\\:10px {\r\n\tpadding: 10px;\r\n}`);
  });

  test("Padding 10px10px", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px10px.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.padding\\:10px10px {\r\n\tpadding: 10px 10px;\r\n}`);
  });

  test("Padding 10px10px10px10px", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px10px10px10px.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.padding\\:10px10px10px10px {\r\n\tpadding: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Padding 10px10px10px10px hover", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px10px10px10px_hover.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.padding\\:10px10px10px10px\\:hover:hover {\r\n\tpadding: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Padding Snapping XS", () => {
    expect(
      DoWork(
        "./tests/padding/padding_xs.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.padding\\:xs {\r\n\tpadding: ${PaddingSizes.xs};\r\n}`);
  });
  test("Padding Snapping SM", () => {
    expect(
      DoWork(
        "./tests/padding/padding_sm.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.padding\\:${Sizes.sm} {\r\n\tpadding: ${PaddingSizes.sm};\r\n}`
    );
  });
  test("Padding Snapping MD", () => {
    expect(
      DoWork(
        "./tests/padding/padding_md.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.padding\\:md {\r\n\tpadding: ${PaddingSizes.md};\r\n}`);
  });
  test("Padding Snapping LG", () => {
    expect(
      DoWork(
        "./tests/padding/padding_lg.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.padding\\:lg {\r\n\tpadding: ${PaddingSizes.lg};\r\n}`);
  });
  test("Padding Snapping XL", () => {
    expect(
      DoWork(
        "./tests/padding/padding_xl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.padding\\:${Sizes.xl} {\r\n\tpadding: ${PaddingSizes.xl};\r\n}`
    );
  });
  test("Padding Snapping 2XL", () => {
    expect(
      DoWork(
        "./tests/padding/padding_2xl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.padding\\:2xl {\r\n\tpadding: ${PaddingSizes.xl2};\r\n}`);
  });

  test("Padding Snapping 2 Value shorthand", () => {
    expect(
      DoWork(
        "./tests/padding/padding_2_value_shorthand.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.padding\\:xsxl {\r\n\tpadding: ${PaddingSizes.xs} ${PaddingSizes.xl};\r\n}`
    );
  });

  test("Padding Snapping 1 Value shorthand", () => {
    expect(
      DoWork(
        "./tests/padding/padding_1_value_shorthand.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.padding\\:2xl {\r\n\tpadding: ${PaddingSizes.xl2};\r\n}`);
  });

  test("Padding Snapping 4 Value shorthand", () => {
    expect(
      DoWork(
        "./tests/padding/padding_4_value_shorthand.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.padding\\:xssmmdlg {\r\n\tpadding: ${PaddingSizes.xs} ${PaddingSizes.sm} ${PaddingSizes.md} ${PaddingSizes.lg};\r\n}`
    );
  });
});

/////////////////////////////////
describe("Color", () => {
  test("Color Snap C1", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.color\\:c1text1 {\r\n\tcolor: ${color_palette_1.c1text1};\r\n}`
    );
  });

  test("Color", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.color\\:red {\r\n\tcolor: red;\r\n}`);
  });

  test("Color # code", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.color\\:\\#124356 {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color # code Hover", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.color\\:\\#124356\\:hover:hover {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color # code Focus", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.color\\:\\#124356\\:focus:focus {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color Media Small", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.small}?color:red">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?color\\:red {\r\n\tcolor: red;\r\n\t}\r\n}`
    );
  });

  test("Color Hover", () => {
    expect(
      DoWork(
        "./tests/color/color_hover.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.color\\:red\\:hover:hover {\r\n\tcolor: red;\r\n}`);
  });
});

/////////////////////////////////

describe("Background Color", () => {

   test("Background c5background1", () => {
    expect(
      DoWork(
        "./tests/background-color/background.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background\\:c5background1 {\r\n\tbackground: ${color_palette_5.c5background1};\r\n}`
    );
  });

   test("Background c1background1", () => {
    expect(
      DoWork(
        "./tests/background-color/background.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background\\:c1background1 {\r\n\tbackground: ${color_palette_1.c1background1};\r\n}`
    );
  });

    test("BackGround Color Snap c5background1", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color_palette_5.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:c5background1 {\r\n\tbackground-color: ${color_palette_5.c5background1};\r\n}`
    );
  });
  
  test("BackGround Color Snap c1text1", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:c1text1 {\r\n\tbackground-color: ${color_palette_1.c1text1};\r\n}`
    );
  });

  test("BackGround Color Snap C2a", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color_color_palette_c2a.html",
        DataType.file,
        {},
        {}
      )
    ).toContain(
      `.background-color\\:c2text1 {\r\n\tbackground-color: ${color_palette_2.c2text1};\r\n}`
    );
  });

  test("BackGround Color", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.background-color\\:red {\r\n\tbackground-color: red;\r\n}`);
  });

  test("BackGround Color # code", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:\\#124356 {\r\n\tbackground-color: #124356;\r\n}`
    );
  });

  test("BackGround Color # code Hover", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:\\#124356\\:hover:hover {\r\n\tbackground-color: #124356;\r\n}`
    );
  });

  test("BackGround Color # code Focus", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:\\#124356\\:focus:focus {\r\n\tbackground-color: #124356;\r\n}`
    );
  });

  test("BackGround Color Media Small", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.small}?background-color:red">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?background-color\\:red {\r\n\tbackground-color: red;\r\n\t}\r\n}`
    );
  });

  test("BackGround Color Hover", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:red\\:hover:hover {\r\n\tbackground-color: red;\r\n}`
    );
  });

  test("BackGround Color Focus", () => {
    expect(
      DoWork(
        "./tests/focus/focus.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:red\\:focus:focus {\r\n\tbackground-color: red;\r\n}`
    );
  });
});

/////////////////////////////
describe("Border", () => {
  test("Border Width Snapping XS", () => {
    expect(
      DoWork(
        "./tests/border-width/border_xs.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:xs {\r\n\tborder-width: ${BorderSizes.xs};\r\n}`
    );
  });
  test("Border Width Snapping SM", () => {
    expect(
      DoWork(
        "./tests/border-width/border_sm.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:${Sizes.sm} {\r\n\tborder-width: ${BorderSizes.sm};\r\n}`
    );
  });
  test("Border Width Snapping MD", () => {
    expect(
      DoWork(
        "./tests/border-width/border_md.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:md {\r\n\tborder-width: ${BorderSizes.md};\r\n}`
    );
  });
  test("Border Width Snapping LG", () => {
    expect(
      DoWork(
        "./tests/border-width/border_lg.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:lg {\r\n\tborder-width: ${BorderSizes.lg};\r\n}`
    );
  });
  test("Border Width Snapping XL", () => {
    expect(
      DoWork(
        "./tests/border-width/border_xl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:${Sizes.xl} {\r\n\tborder-width: ${BorderSizes.xl};\r\n}`
    );
  });
  test("Border Width Snapping 2XL", () => {
    expect(
      DoWork(
        "./tests/border-width/border_2xl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:2xl {\r\n\tborder-width: ${BorderSizes.xl2};\r\n}`
    );
  });

  test("Border Width Focus", () => {
    expect(
      DoWork(
        "./tests/border-width/border_focus.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:lg\\:focus:focus {\r\n\tborder-width: ${BorderSizes.lg};\r\n}`
    );
  });

  test("Border Width 10px", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.border-width\\:10px {\r\n\tborder-width: 10px;\r\n}`);
  });

  test("Border Width 10px 10px", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px10px.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:10px10px {\r\n\tborder-width: 10px 10px;\r\n}`
    );
  });

  test("Border Width 10px 10px 10px 10px", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px10px10px10px.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:10px10px10px10px {\r\n\tborder-width: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Border Width 10px 10px 10px 10px Hover", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px10px10px10px_hover.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:10px10px10px10px\\:hover:hover {\r\n\tborder-width: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Border Width lg xl", () => {
    expect(
      DoWork(
        "./tests/border-width/border_lgxl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:lgxl {\r\n\tborder-width: ${BorderSizes.lg} ${BorderSizes.xl};\r\n}`
    );
  });

  test("Border Width lg xl xs xs", () => {
    expect(
      DoWork(
        "./tests/border-width/border_lgxlxsxs.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.border-width\\:lgxlxsxs {\r\n\tborder-width: ${BorderSizes.lg} ${BorderSizes.xl} ${BorderSizes.xs} ${BorderSizes.xs};\r\n}`
    );
  });
});

/////////////////////////////
describe("FontSize", () => {
  test("FontSize XS -> XS overridden in config to 'xsmall'", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_xs_config_override_xsmall.html",
        DataType.file,
        {},
        {},
        mimicConfigFontsizeXSOverrideToXSmall
      )
    ).toContain(
      `.font-size\\:${
        mimicConfigFontsizeXSOverrideToXSmall?.SnappingOverride?.xs ?? Sizes.xs
      } {\r\n\tfont-size: ${FontSizes.xs};\r\n}`
    );
  });

  test("FontSize XS", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_xs.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.font-size\\:${Sizes.xs} {\r\n\tfont-size: ${FontSizes.xs};\r\n}`
    );
  });

  test("FontSize Snapping SM", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_sm.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.font-size\\:${Sizes.sm} {\r\n\tfont-size: ${FontSizes.sm};\r\n}`
    );
  });

  test("FontSize Snapping SM - Overridden SM->Tiny", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_sm_overridden_sm_to_tiny.html",
        DataType.file,
        {},
        {},
        mimicConfigFontsizeSMOverrideToTiny
      )
    ).toContain(
      `.font-size\\:${
        mimicConfigFontsizeSMOverrideToTiny?.SnappingOverride?.sm ?? Sizes.sm
      } {\r\n\tfont-size: ${FontSizes.sm};\r\n}`
    );
  });

  test("Font Size Snapping MD", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_md.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.font-size\\:md {\r\n\tfont-size: ${FontSizes.md};\r\n}`);
  });
  test("Font Size Snapping LG", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_lg.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.font-size\\:lg {\r\n\tfont-size: ${FontSizes.lg};\r\n}`);
  });
  test("Font Size Snapping XL", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_xl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.font-size\\:${Sizes.xl} {\r\n\tfont-size: ${FontSizes.xl};\r\n}`
    );
  });
  test("Font Size Snapping 2XL", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_2xl.html",
        DataType.file,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.font-size\\:2xl {\r\n\tfont-size: ${FontSizes.xl2};\r\n}`);
  });

  test("Font Size Media Medium", () => {
    expect(
      DoWork(
        `<div class="${MediaBreakPointsText.medium}?font-size:xl">Two</div>`,
        DataType.string,
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.medium}px) {\r\n.${MediaBreakPointsText.medium}\\?font-size\\:${Sizes.xl} {\r\n\tfont-size: ${FontSizes.xl};\r\n\t}\r\n}`
    );
  });
});
