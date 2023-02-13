import burger from "@/sad-components-lib/assets/images/burger.png";

import { IProps } from "./interfaces";
import { Body, Line } from "./styled";

export const Burger = ({ onClick }: IProps) => {
  return (
    <Body onClick={onClick}>
      <Line src={burger} alt="Loading..." title="burger" />
    </Body>
  );
};
