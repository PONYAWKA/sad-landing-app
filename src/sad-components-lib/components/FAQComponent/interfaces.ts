import { Dispatch, SetStateAction } from "react";

export interface IFAQComponent {
  heading: string;
  description: string;
  setActive: Dispatch<SetStateAction<string>>;
  active: string;
}

export interface IStyled {
  isOpen: boolean;
}
