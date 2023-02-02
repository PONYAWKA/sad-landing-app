import { ReactNode } from "react";

import { Body } from "./styled";
interface IButton {
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit";
}
export const Button = ({ disabled, children, onClick, type }: IButton) => {
  return (
    <Body disabled={disabled} onClick={onClick} type={type}>
      {children}
    </Body>
  );
};
