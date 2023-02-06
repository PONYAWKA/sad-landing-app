import { ReactNode } from "react";

export interface IButton {
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit";
}
