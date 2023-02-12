import { Dispatch, SetStateAction } from "react";

export interface IDropDownNav {
  name: string;
  routs: { name: string; to: string }[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IStyledProps {
  visible: boolean;
}
