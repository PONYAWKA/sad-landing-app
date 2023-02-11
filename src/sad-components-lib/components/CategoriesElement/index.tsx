import { useNavigate } from "react-router-dom";

import { LeftSideArrow } from "../../assets/icons/LeftSideArrow";
import { ICategoriesElement } from "./interfaces";
import { Body, Text } from "./styled";

export const CategoriesElement = ({ name, id }: ICategoriesElement) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`?service=${id}`);
  };
  return (
    <Body onClick={handleClick}>
      <Text>{name}</Text>
      <LeftSideArrow />
    </Body>
  );
};
