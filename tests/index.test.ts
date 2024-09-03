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
  ColorSizes,
  Sizes,
} from "../src/Snapping/Sizes";
import {
  MediaBreakPointsValue,
  MediaBreakPointsText,
} from "../src/Snapping/MediaBreakpoints";
import { IMimicConfig } from "../interfaces/IMimicConfig";

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
      DoWork("./tests/box-shadow/box-shadow.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.box-shadow\\:10px10px {\r\n\tbox-shadow: 10px 10px;\r\n}`);
  });

  test("Box Shadow 4 Values With Color", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-with-color.html",
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
        {},
        {}
      )
    ).toContain(
      `.box-shadow\\:${Sizes.sm}${Sizes.sm}c1a {\r\n\tbox-shadow: ${BoxShadowSizes.sm} ${BoxShadowSizes.sm} ${color_palette_1.c1a};\r\n}`
    );
  });

  test("Box Shadow Hover", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-hover.html",
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
        "./tests/box-shadow/box-shadow-media.html",
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
      DoWork("./tests/line-height/line-height.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.line-height\\:1 {\r\n\tline-height: 1;\r\n}`);
  });

  test("Line Height 2.2", () => {
    expect(
      DoWork("./tests/line-height/line-height.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.line-height\\:2.2 {\r\n\tline-height: 2.2;\r\n}`);
  });

  test("Line Height xl", () => {
    expect(
      DoWork("./tests/line-height/line-height.html", {}, {}, mimicConfigDEFAULT)
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
      DoWork("./tests/flex-basis/flex-basis.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.flex-basis\\:30\\% {\r\n\tflex-basis: 30%;\r\n}`);
  });

  test("Flex Basis - Large", () => {
    expect(
      DoWork(
        "./tests/flex-basis/flex-basis-media-large.html",
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
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toEqual("");
  });
});

describe("Justify Content", () => {
  test("Justify Content - no snapping", () => {
    expect(
      DoWork(
        "./tests/justify-content/justify_content.html",
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
      DoWork("./tests/font-weight/font_weight.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.font-weight\\:800 {\r\n\tfont-weight: 800;\r\n}`);
  });

  test("Font Weight - no snapping", () => {
    expect(
      DoWork("./tests/font-weight/font_weight.html", {}, {}, mimicConfigDEFAULT)
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
        {},
        {}
      )
    ).toContain(
      `.text-decoration-color\\:${ColorSizes.c1a} {\r\n\ttext-decoration-color: ${color_palette_1.c1a};\r\n}`
    );
  });
});

describe("Border Style", () => {
  test("Border Style", () => {
    expect(
      DoWork(
        "./tests/border-style/border_style.html",
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(`.border-style\\:solid {\r\n\tborder-style: solid;\r\n}`);
  });

  test("Border Style - Large", () => {
    expect(
      DoWork(
        "./tests/border-style/border_style_media_large.html",
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
        "./tests/border-style/border_style_media_small.html",
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
      DoWork("./tests/flex/display_flex.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.display\\:flex {\r\n\tdisplay: flex;\r\n}`);
  });

  test("display flex with Media Large", () => {
    expect(
      DoWork("./tests/flex/display_flex.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });

  test("display flex with Media Medium", () => {
    expect(
      DoWork("./tests/flex/display_flex.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.medium}px) {\r\n.${MediaBreakPointsText.medium}\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });

  test("flex gap", () => {
    expect(
      DoWork("./tests/flex/flex_gap.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.gap\\:md {\r\n\tgap: ${GapSizes.md};\r\n}`);
  });
});

/////////////////////////
describe("flex direction", () => {
  test("flex direction", () => {
    expect(
      DoWork("./tests/flex/flex_direction.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.flex-direction\\:row {\r\n\tflex-direction: row;\r\n}`);
  });

  test("flex direction with Media Small", () => {
    expect(
      DoWork(
        "./tests/flex/flex_direction_media_small.html",
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
      DoWork("./tests/padding/padding_10px.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.padding\\:10px {\r\n\tpadding: 10px;\r\n}`);
  });

  test("Padding 10px10px", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px10px.html",
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
      DoWork("./tests/padding/padding_xs.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.padding\\:xs {\r\n\tpadding: ${PaddingSizes.xs};\r\n}`);
  });
  test("Padding Snapping SM", () => {
    expect(
      DoWork("./tests/padding/padding_sm.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.padding\\:${Sizes.sm} {\r\n\tpadding: ${PaddingSizes.sm};\r\n}`
    );
  });
  test("Padding Snapping MD", () => {
    expect(
      DoWork("./tests/padding/padding_md.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.padding\\:md {\r\n\tpadding: ${PaddingSizes.md};\r\n}`);
  });
  test("Padding Snapping LG", () => {
    expect(
      DoWork("./tests/padding/padding_lg.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.padding\\:lg {\r\n\tpadding: ${PaddingSizes.lg};\r\n}`);
  });
  test("Padding Snapping XL", () => {
    expect(
      DoWork("./tests/padding/padding_xl.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.padding\\:${Sizes.xl} {\r\n\tpadding: ${PaddingSizes.xl};\r\n}`
    );
  });
  test("Padding Snapping 2XL", () => {
    expect(
      DoWork("./tests/padding/padding_2xl.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.padding\\:2xl {\r\n\tpadding: ${PaddingSizes.xl2};\r\n}`);
  });

  test("Padding Snapping 2 Value shorthand", () => {
    expect(
      DoWork(
        "./tests/padding/padding_2_value_shorthand.html",
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
      DoWork("./tests/color/color.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.color\\:c1a {\r\n\tcolor: ${color_palette_1.c1a};\r\n}`);
  });

  test("Color", () => {
    expect(
      DoWork("./tests/color/color.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.color\\:red {\r\n\tcolor: red;\r\n}`);
  });

  test("Color # code", () => {
    expect(
      DoWork("./tests/color/color.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.color\\:\\#124356 {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color # code Hover", () => {
    expect(
      DoWork("./tests/color/color.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.color\\:\\#124356\\:hover:hover {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color # code Focus", () => {
    expect(
      DoWork("./tests/color/color.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.color\\:\\#124356\\:focus:focus {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color Media Small", () => {
    expect(
      DoWork("./tests/color/color_media_small.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?color\\:red {\r\n\tcolor: red;\r\n\t}\r\n}`
    );
  });

  test("Color Hover", () => {
    expect(
      DoWork("./tests/color/color_hover.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.color\\:red\\:hover:hover {\r\n\tcolor: red;\r\n}`);
  });
});

/////////////////////////////////
describe("Background Color", () => {
  test("BackGround Color Snap C1a", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {},
        {},
        mimicConfigDEFAULT
      )
    ).toContain(
      `.background-color\\:c1a {\r\n\tbackground-color: ${color_palette_1.c1a};\r\n}`
    );
  });

  test("BackGround Color Snap C2a", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color_color_palette_c2a.html",
        {},
        {}
      )
    ).toContain(
      `.background-color\\:c2a {\r\n\tbackground-color: ${color_palette_2.c2a};\r\n}`
    );
  });

  test("BackGround Color", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
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
        "./tests/background-color/background_color.html",
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
      DoWork("./tests/focus/focus.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.background-color\\:red\\:focus:focus {\r\n\tbackground-color: red;\r\n}`
    );
  });
});

/////////////////////////////
describe("Border", () => {
  test("Border Width Snapping XS", () => {
    expect(
      DoWork("./tests/border-width/border_xs.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.border-width\\:xs {\r\n\tborder-width: ${BorderSizes.xs};\r\n}`
    );
  });
  test("Border Width Snapping SM", () => {
    expect(
      DoWork("./tests/border-width/border_sm.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.border-width\\:${Sizes.sm} {\r\n\tborder-width: ${BorderSizes.sm};\r\n}`
    );
  });
  test("Border Width Snapping MD", () => {
    expect(
      DoWork("./tests/border-width/border_md.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.border-width\\:md {\r\n\tborder-width: ${BorderSizes.md};\r\n}`
    );
  });
  test("Border Width Snapping LG", () => {
    expect(
      DoWork("./tests/border-width/border_lg.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.border-width\\:lg {\r\n\tborder-width: ${BorderSizes.lg};\r\n}`
    );
  });
  test("Border Width Snapping XL", () => {
    expect(
      DoWork("./tests/border-width/border_xl.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.border-width\\:${Sizes.xl} {\r\n\tborder-width: ${BorderSizes.xl};\r\n}`
    );
  });
  test("Border Width Snapping 2XL", () => {
    expect(
      DoWork("./tests/border-width/border_2xl.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.border-width\\:2xl {\r\n\tborder-width: ${BorderSizes.xl2};\r\n}`
    );
  });

  test("Border Width Focus", () => {
    expect(
      DoWork(
        "./tests/border-width/border_focus.html",
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
      DoWork("./tests/fontsize/fontsize_xs.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.font-size\\:${Sizes.xs} {\r\n\tfont-size: ${FontSizes.xs};\r\n}`
    );
  });

  test("FontSize Snapping SM", () => {
    expect(
      DoWork("./tests/fontsize/fontsize_sm.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.font-size\\:${Sizes.sm} {\r\n\tfont-size: ${FontSizes.sm};\r\n}`
    );
  });

  test("FontSize Snapping SM - Overridden SM->Tiny", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_sm_overridden_sm_to_tiny.html",
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
      DoWork("./tests/fontsize/fontsize_md.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.font-size\\:md {\r\n\tfont-size: ${FontSizes.md};\r\n}`);
  });
  test("Font Size Snapping LG", () => {
    expect(
      DoWork("./tests/fontsize/fontsize_lg.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.font-size\\:lg {\r\n\tfont-size: ${FontSizes.lg};\r\n}`);
  });
  test("Font Size Snapping XL", () => {
    expect(
      DoWork("./tests/fontsize/fontsize_xl.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `.font-size\\:${Sizes.xl} {\r\n\tfont-size: ${FontSizes.xl};\r\n}`
    );
  });
  test("Font Size Snapping 2XL", () => {
    expect(
      DoWork("./tests/fontsize/fontsize_2xl.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(`.font-size\\:2xl {\r\n\tfont-size: ${FontSizes.xl2};\r\n}`);
  });

  test("Font Size Media Medium", () => {
    expect(
      DoWork("./tests/fontsize/fontsize_media.html", {}, {}, mimicConfigDEFAULT)
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.medium}px) {\r\n.${MediaBreakPointsText.medium}\\?font-size\\:${Sizes.xl} {\r\n\tfont-size: ${FontSizes.xl};\r\n\t}\r\n}`
    );
  });
});
