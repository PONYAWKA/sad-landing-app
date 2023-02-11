import { Dispatch, SetStateAction } from "react";

export interface IProps {
  name: string;
  routs: { name: string; to: string }[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
