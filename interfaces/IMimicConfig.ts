export interface IMimicConfig {
  extensions?: Array<string>;
  excludeFolders?: Array<string>;
  excludeFiles?: Array<string>;

  SnappingOverride?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xl2?: string;
  };

  mediaBreakPointsValueOverride?: {
    extrasmall: "1000";
    small: "1010";
    medium: "1020";
    large: "1030";
    extralarge: "1040";
  };

  ColorPalette1TextOverride?: {
    colora: string;
    colorb: string;
    colorc: string;
    colord: string;
  };

  ColorPalette2TextOverride?: {
    colora: string;
    colorb: string;
    colorc: string;
    colord: string;
  };

  ColorPalette3TextOverride?: {
    colora: string;
    colorb: string;
    colorc: string;
    colord: string;
  };

  ColorPalette4TextOverride?: {
    colora: string;
    colorb: string;
    colorc: string;
    colord: string;
  };

  MediaBreakPointsTextOverride?: {
    extrasmall: string;
    small: string;
    medium: string;
    large: string;
    extralarge: string;
  };

  lineHeightSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  };
  BorderWidthSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  };
  GapSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  };
  PaddingSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  };
  BoxShadowSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  };
  MarginSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  };

  ColorPalette1Snapping?: {
    c1a: string;
    c1b: string;
    c1c: string;
    c1d: string;
  };

  ColorPalette2Snapping?: {
    c2a: string;
    c2b: string;
    c2c: string;
    c2d: string;
  };

  ColorPalette3Snapping?: {
    c3a: string;
    c3b: string;
    c3c: string;
    c3d: string;
  };

  ColorPalette4Snapping?: {
    c4a: string;
    c4b: string;
    c4c: string;
    c4d: string;
  };
}
