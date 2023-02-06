import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ITagButton {
  text: string;
  setSelected?: Dispatch<SetStateAction<string>>;
  selected?: string;
  [index: string]: unknown;
}
