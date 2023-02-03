import { ReactNode, SyntheticEvent } from "react";

export interface ITagButton {
  children?: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  [index: string]: unknown;
}
