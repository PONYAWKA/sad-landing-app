import { ReactNode } from "react";

export interface IText {
  line?: boolean;
}

export interface IServiceInfo {
  headerConfig: IServiceInfoItem;
  footerConfig: IServiceInfoItem;
  services: IServiceInfoItem;
  technologies: IServiceInfoItem;
  result: IServiceInfoItem;
  solution: IServiceInfoItem;
  challenge: IServiceInfoItem;
  customer: IServiceInfoItem;
}

interface IServiceInfoItem {
  title?: string;
  text?: string;
  image?: string;
  items?:
    | {
        img: ReactNode;
        text: string;
      }[]
    | string[];
}
