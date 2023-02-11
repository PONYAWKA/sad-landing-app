import { Dispatch, SetStateAction } from "react";

export interface ILinks {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface styledProps {
  isOpen?: boolean;
}
