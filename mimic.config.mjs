let config;

export default config = {
  extensions: [".html"],
  excludeFolders: ["tests", "node_modules"],
  excludeFiles: ["toplevelpage1.html"],

  // mediaBreakPointsValueOverride: {
  //   extrasmall: "1000",
  //   small: "1010",
  //   medium: "1020",
  //   large: "1030",
  //   extralarge: "1040",
  // },

  ColorPalette1TextOverride: {
    colora: "col1",
    colorb: "col2",
    colorc: "col3",
    colord: "col4",
  },

  SnappingOverride: {
    xs: "xs",
    sm: "sml",
    md: "md",
    lg: "lg",
    xl: "xl",
    xl2: "2xl",
  },

  MediaBreakPointsTextOverride: {
    extrasmall: "xs",
    small: "sm",
    medium: "md",
    large: "lg",
    extralarge: "xl",
  },

  ColorPalette1Snapping: {
    c1a: "#FF0000",
    c1b: "#00FF00",
    c1c: "#0000FF",
    c1d: "#000000",
  },

  lineHeightSnapping: {
    xs: "60%",
    sm: "120%",
    md: "140%",
    lg: "160%",
    xl: "200%",
    xl2: "240%",
  },
};
