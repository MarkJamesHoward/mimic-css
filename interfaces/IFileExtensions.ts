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
  }
}
