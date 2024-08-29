export interface ICustomClassBuilder {
  constructedClassName: string;
  constructedClassMemberList: string;
}

export interface IClass {
  className: string;
  css: string;
}

export type INonMediaClass = {
  css: string;
  filename: string;
};

export interface IMediaClass {
  className: string;
  css: string;
  order: number;
  filename: string;
}
