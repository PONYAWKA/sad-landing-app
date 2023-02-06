import burger from "../../assets/images/burger.png";
import { IProps } from "./interfaces";
import { Body, Line } from "./styled";
export const Burger = ({ onClick }: IProps) => {
  return (
    <Body onClick={onClick}>
      <Line src={burger} />
    </Body>
  );
};
