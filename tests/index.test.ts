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
} from "../src/Sizes";
import {
  MediaBreakPointsValue,
  MediaBreakPointsText,
} from "../src/mediaBreakpoints";

describe("Box Shadow", () => {
  test("Box Shadow Focus", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-focus.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.box-shadow\\:10px10px\\:focus:focus {\r\n\tbox-shadow: 10px 10px;\r\n}`
    );
  });

  test("Box Shadow", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.box-shadow\\:10px10px {\r\n\tbox-shadow: 10px 10px;\r\n}`);
  });

  test("Box Shadow 4 Values With Color", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-with-color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.box-shadow\\:10px10px20px30pxred {\r\n\tbox-shadow: 10px 10px 20px 30px red;\r\n}`
    );
  });

  test("Box Shadow Hover", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-hover.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.box-shadow\\:10px10px\\:hover:hover {\r\n\tbox-shadow: 10px 10px;\r\n}`
    );
  });

  test("Box Shadow Media Large", () => {
    expect(
      DoWork(
        "./tests/box-shadow/box-shadow-media.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
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
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.line-height\\:1 {\r\n\tline-height: 1;\r\n}`);
  });

  test("Line Height 2.2", () => {
    expect(
      DoWork(
        "./tests/line-height/line-height.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.line-height\\:2.2 {\r\n\tline-height: 2.2;\r\n}`);
  });

  test("Line Height xl", () => {
    expect(
      DoWork(
        "./tests/line-height/line-height.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.line-height\\:xl {\r\n\tline-height: ${LineHeight.xl};\r\n}`);
  });
});

describe("Custom Classes", () => {
  test("Mybutton - One", () => {
    expect(
      DoWork(
        "./tests/custom-classes/my-button-one.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.mybtn {\r\n\tfont-size: ${FontSizes.xl};\r\n}`);
  });

  test("Mybutton - Two", () => {
    expect(
      DoWork(
        "./tests/custom-classes/my-button-two.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.mybtn {\r\n\tfont-size: ${FontSizes.xl};\r\n\tdisplay: flex;\r\n}`
    );
  });

  test("Mybutton - Three", () => {
    expect(
      DoWork(
        "./tests/custom-classes/my-button-three.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
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
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.flex-basis\\:30\\% {\r\n\tflex-basis: 30%;\r\n}`);
  });

  test("Flex Basis - Large", () => {
    expect(
      DoWork(
        "./tests/flex-basis/flex-basis-media-large.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?flex-basis\\:30\\% {\r\n\tflex-basis: 30%;\r\n\t}\r\n}`
    );
  });
});

describe("Justify Content", () => {
  test("Justify Content - no snapping", () => {
    expect(
      DoWork(
        "./tests/justify-content/justify_content.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
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
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.font-weight\\:800 {\r\n\tfont-weight: 800;\r\n}`);
  });

  test("Font Weight - no snapping", () => {
    expect(
      DoWork(
        "./tests/font-weight/font_weight.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
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
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.text-decoration\\:none {\r\n\ttext-decoration: none;\r\n}`);
  });

  test("Text Decoration Color", () => {
    expect(
      DoWork(
        "./tests/text-decoration/text-decoration-color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.text-decoration-color\\:\\#444444 {\r\n\ttext-decoration-color: #444444;\r\n}`
    );
  });
});

describe("Border Style", () => {
  test("Border Style", () => {
    expect(
      DoWork(
        "./tests/border-style/border_style.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.border-style\\:solid {\r\n\tborder-style: solid;\r\n}`);
  });

  test("Border Style - Large", () => {
    expect(
      DoWork(
        "./tests/border-style/border_style.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?border-style\\:solid {\r\n\tborder-style: solid;\r\n\t}\r\n}`
    );
  });

  test("Border Style - Small", () => {
    expect(
      DoWork(
        "./tests/border-style/border_style.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
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
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-radius\\:xs {\r\n\tborder-radius: ${BorderRadius.xs};\r\n}`
    );
  });

  test("Border Radius Snapping - SM", () => {
    expect(
      DoWork(
        "./tests/border-radius/border_radius_sm.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-radius\\:sm {\r\n\tborder-radius: ${BorderRadius.sm};\r\n}`
    );
  });

  test("Border Radius Snapping - XL", () => {
    expect(
      DoWork(
        "./tests/border-radius/border_radius_xl.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-radius\\:xl {\r\n\tborder-radius: ${BorderRadius.xl};\r\n}`
    );
  });
});

describe("display flex", () => {
  test("display flex", () => {
    expect(
      DoWork(
        "./tests/flex/display_flex.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.display\\:flex {\r\n\tdisplay: flex;\r\n}`);
  });

  test("display flex with Media Large", () => {
    expect(
      DoWork(
        "./tests/flex/display_flex.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.large}px) {\r\n.${MediaBreakPointsText.large}\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });

  test("flex gap", () => {
    expect(
      DoWork(
        "./tests/flex/flex_gap.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
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
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.flex-direction\\:row {\r\n\tflex-direction: row;\r\n}`);
  });

  test("flex direction with Media", () => {
    expect(
      DoWork(
        "./tests/flex/flex_direction.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
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
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:10px {\r\n\tpadding: 10px;\r\n}`);
  });

  test("Padding 10px10px", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px10px.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:10px10px {\r\n\tpadding: 10px 10px;\r\n}`);
  });

  test("Padding 10px10px10px10px", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px10px10px10px.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.padding\\:10px10px10px10px {\r\n\tpadding: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Padding 10px10px10px10px hover", () => {
    expect(
      DoWork(
        "./tests/padding/padding_10px10px10px10px_hover.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.padding\\:10px10px10px10px\\:hover:hover {\r\n\tpadding: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Padding Snapping XS", () => {
    expect(
      DoWork(
        "./tests/padding/padding_xs.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:xs {\r\n\tpadding: ${PaddingSizes.xs};\r\n}`);
  });
  test("Padding Snapping SM", () => {
    expect(
      DoWork(
        "./tests/padding/padding_sm.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:sm {\r\n\tpadding: ${PaddingSizes.sm};\r\n}`);
  });
  test("Padding Snapping MD", () => {
    expect(
      DoWork(
        "./tests/padding/padding_md.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:md {\r\n\tpadding: ${PaddingSizes.md};\r\n}`);
  });
  test("Padding Snapping LG", () => {
    expect(
      DoWork(
        "./tests/padding/padding_lg.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:lg {\r\n\tpadding: ${PaddingSizes.lg};\r\n}`);
  });
  test("Padding Snapping XL", () => {
    expect(
      DoWork(
        "./tests/padding/padding_xl.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:xl {\r\n\tpadding: ${PaddingSizes.xl};\r\n}`);
  });
  test("Padding Snapping 2XL", () => {
    expect(
      DoWork(
        "./tests/padding/padding_2xl.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:2xl {\r\n\tpadding: ${PaddingSizes.xl2};\r\n}`);
  });

  test("Padding Snapping 2 Value shorthand", () => {
    expect(
      DoWork(
        "./tests/padding/padding_2_value_shorthand.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.padding\\:xsxl {\r\n\tpadding: ${PaddingSizes.xs} ${PaddingSizes.xl};\r\n}`
    );
  });

  test("Padding Snapping 1 Value shorthand", () => {
    expect(
      DoWork(
        "./tests/padding/padding_1_value_shorthand.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.padding\\:2xl {\r\n\tpadding: ${PaddingSizes.xl2};\r\n}`);
  });

  test("Padding Snapping 4 Value shorthand", () => {
    expect(
      DoWork(
        "./tests/padding/padding_4_value_shorthand.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
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
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.color\\:c1 {\r\n\tcolor: ${color_palette_1.c1};\r\n}`);
  });

  test("Color", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.color\\:red {\r\n\tcolor: red;\r\n}`);
  });

  test("Color # code", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.color\\:\\#124356 {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color # code Hover", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.color\\:\\#124356\\:hover:hover {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color # code Focus", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.color\\:\\#124356\\:focus:focus {\r\n\tcolor: #124356;\r\n}`);
  });

  test("Color Media Small", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?color\\:red {\r\n\tcolor: red;\r\n\t}\r\n}`
    );
  });

  test("Color Hover", () => {
    expect(
      DoWork(
        "./tests/color/color.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.color\\:red\\:hover:hover {\r\n\tcolor: red;\r\n}`);
  });
});

/////////////////////////////////
describe("Background Color", () => {
  test("BackGround Color Snap C1", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.background-color\\:c1 {\r\n\tbackground-color: ${color_palette_1.c1};\r\n}`
    );
  });

  test("BackGround Color", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.background-color\\:red {\r\n\tbackground-color: red;\r\n}`);
  });

  test("BackGround Color # code", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.background-color\\:\\#124356 {\r\n\tbackground-color: #124356;\r\n}`
    );
  });

  test("BackGround Color # code Hover", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.background-color\\:\\#124356\\:hover:hover {\r\n\tbackground-color: #124356;\r\n}`
    );
  });

  test("BackGround Color # code Focus", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.background-color\\:\\#124356\\:focus:focus {\r\n\tbackground-color: #124356;\r\n}`
    );
  });

  test("BackGround Color Media Small", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.small}px) {\r\n.${MediaBreakPointsText.small}\\?background-color\\:red {\r\n\tbackground-color: red;\r\n\t}\r\n}`
    );
  });

  test("BackGround Color Hover", () => {
    expect(
      DoWork(
        "./tests/background-color/background_color.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.background-color\\:red\\:hover:hover {\r\n\tbackground-color: red;\r\n}`
    );
  });

  test("BackGround Color Focus", () => {
    expect(
      DoWork(
        "./tests/focus/focus.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
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
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:xs {\r\n\tborder-width: ${BorderSizes.xs};\r\n}`
    );
  });
  test("Border Width Snapping SM", () => {
    expect(
      DoWork(
        "./tests/border-width/border_sm.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:sm {\r\n\tborder-width: ${BorderSizes.sm};\r\n}`
    );
  });
  test("Border Width Snapping MD", () => {
    expect(
      DoWork(
        "./tests/border-width/border_md.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:md {\r\n\tborder-width: ${BorderSizes.md};\r\n}`
    );
  });
  test("Border Width Snapping LG", () => {
    expect(
      DoWork(
        "./tests/border-width/border_lg.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:lg {\r\n\tborder-width: ${BorderSizes.lg};\r\n}`
    );
  });
  test("Border Width Snapping XL", () => {
    expect(
      DoWork(
        "./tests/border-width/border_xl.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:xl {\r\n\tborder-width: ${BorderSizes.xl};\r\n}`
    );
  });
  test("Border Width Snapping 2XL", () => {
    expect(
      DoWork(
        "./tests/border-width/border_2xl.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:2xl {\r\n\tborder-width: ${BorderSizes.xl2};\r\n}`
    );
  });

  test("Border Width Focus", () => {
    expect(
      DoWork(
        "./tests/border-width/border_focus.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:lg\\:focus:focus {\r\n\tborder-width: ${BorderSizes.lg};\r\n}`
    );
  });

  test("Border Width 10px", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.border-width\\:10px {\r\n\tborder-width: 10px;\r\n}`);
  });

  test("Border Width 10px 10px", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px10px.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:10px10px {\r\n\tborder-width: 10px 10px;\r\n}`
    );
  });

  test("Border Width 10px 10px 10px 10px", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px10px10px10px.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:10px10px10px10px {\r\n\tborder-width: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Border Width 10px 10px 10px 10px Hover", () => {
    expect(
      DoWork(
        "./tests/border-width/border_10px10px10px10px_hover.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:10px10px10px10px\\:hover:hover {\r\n\tborder-width: 10px 10px 10px 10px;\r\n}`
    );
  });

  test("Border Width lg xl", () => {
    expect(
      DoWork(
        "./tests/border-width/border_lgxl.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:lgxl {\r\n\tborder-width: ${BorderSizes.lg} ${BorderSizes.xl};\r\n}`
    );
  });

  test("Border Width lg xl xs xs", () => {
    expect(
      DoWork(
        "./tests/border-width/border_lgxlxsxs.html",
        {
          className: "",
          css: "",
        },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `.border-width\\:lgxlxsxs {\r\n\tborder-width: ${BorderSizes.lg} ${BorderSizes.xl} ${BorderSizes.xs} ${BorderSizes.xs};\r\n}`
    );
  });
});

/////////////////////////////
describe("FontSize", () => {
  test("FontSize XS", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_xs.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.font-size\\:xs {\r\n\tfont-size: ${FontSizes.xs};\r\n}`);
  });
  test("FontSize Snapping SM", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_sm.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.font-size\\:sm {\r\n\tfont-size: ${FontSizes.sm};\r\n}`);
  });
  test("Font Size Snapping MD", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_md.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.font-size\\:md {\r\n\tfont-size: ${FontSizes.md};\r\n}`);
  });
  test("Font Size Snapping LG", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_lg.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.font-size\\:lg {\r\n\tfont-size: ${FontSizes.lg};\r\n}`);
  });
  test("Font Size Snapping XL", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_xl.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.font-size\\:xl {\r\n\tfont-size: ${FontSizes.xl};\r\n}`);
  });
  test("Font Size Snapping 2XL", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_2xl.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(`.font-size\\:2xl {\r\n\tfont-size: ${FontSizes.xl2};\r\n}`);
  });
  test("Font Size Media Medium", () => {
    expect(
      DoWork(
        "./tests/fontsize/fontsize_media.html",
        { className: "", css: "" },
        { mediaClass: { className: "", css: "" } }
      )
    ).toContain(
      `@media (min-width: ${MediaBreakPointsValue.medium}px) {\r\n.${MediaBreakPointsText.medium}\\?font-size\\:xl {\r\n\tfont-size: ${FontSizes.xl};\r\n\t}\r\n}`
    );
  });
});
