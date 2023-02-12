import { Dispatch, SetStateAction } from "react";

export interface ITagButton {
  text: string;
  setSelected?: Dispatch<SetStateAction<string>>;
  selected?: string;
  [index: string]: unknown;
}
