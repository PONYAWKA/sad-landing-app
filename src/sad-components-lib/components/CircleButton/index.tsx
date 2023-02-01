import { IProps } from "./interfaces";
import { Body, Content } from "./styled";

export const CircleButton = ({ onClick, children: children }: IProps) => {
  return (
    <Body onClick={onClick}>
      <Content>{children}</Content>
    </Body>
  );
};
