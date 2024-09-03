export interface ICustomClassBuilder {
  constructedClassName: string;
  constructedClassMemberList: string;
}

export type IClassNameCssSourceAndFilename = {
  className: string;
  css: string;
  source: string;
  filename: string;
};

export interface IClass {
  className: string;
  css: string;
}

export type INonMediaClass = {
  css: string;
  filename: string;
};

export interface IMediaClassCSSOrderFilenameAndSource {
  mediaDescription: string;
  className: string;
  css: string;
  order: number;
  filename: string;
  source: string;
}

export interface IMimicFinalCSSOutput {
  str: string;
}
