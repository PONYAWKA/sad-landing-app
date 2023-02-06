import { LeftSideArrow } from "../../assets/icons/LeftSideArrow";
import { ICategoriesElement } from "./interfaces";
import { Body, Text } from "./styled";

export const CategoriesElement = ({ name, onClick }: ICategoriesElement) => {
  return (
    <Body onClick={onClick}>
      <Text>{name}</Text>
      <LeftSideArrow />
    </Body>
  );
};
