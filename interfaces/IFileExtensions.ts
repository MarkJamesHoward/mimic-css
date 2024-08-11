export interface IMimicConfig {
  extensions?: Array<string>;
  excludeFolders?: Array<string>;
  excludeFiles?: Array<string>;
  mediaBreakPointsValueOverride?: {
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
  },
  BorderWidthSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  },
  GapSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  },
  PaddingSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  },
  BoxShadowSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  },
  MarginSnapping?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
  }


  
}
