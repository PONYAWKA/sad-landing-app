import { ReactNode } from "react";

import { Body } from "./styled";
interface IButton {
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}
export const Button = ({ disabled, children, onClick }: IButton) => {
  return (
    <Body disabled={disabled} onClick={onClick}>
      {children}
    </Body>
  );
};
