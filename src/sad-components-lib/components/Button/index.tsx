import { IButton } from "./interfaces";
import { Body } from "./styled";

export const Button = ({ disabled, children, onClick, type }: IButton) => {
  return (
    <Body disabled={disabled} onClick={onClick} type={type}>
      {children}
    </Body>
  );
};
