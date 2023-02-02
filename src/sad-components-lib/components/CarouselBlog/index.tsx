import { useState } from "react";

import cLeft from "../../assets/cLeft.png";
import cRight from "../../assets/cRight.png";
import { IProps } from "./interfaces";
import {
  Body,
  Element,
  ElementContainer,
  ElementIcon,
  ElementText,
  ElementTitle,
  StyledLink,
  Title,
  TitleButton,
  TitleButtonContainer,
  TitleContainer,
} from "./styled";
export const CarouselBlog = ({ title, itemsToShow = 1, items }: IProps) => {
  const [itemsLits, setItemsList] = useState(0);

  const nextHandler = () => {
    setItemsList((prev) => {
      if (prev + 1 <= items?.length - itemsToShow) return prev + 1;
      return prev;
    });
  };
  const prevHandler = () => {
    setItemsList((prev) => {
      if (prev - 1 >= 0) return prev - 1;
      return prev;
    });
  };

  const isLeftActive = itemsLits - 1 >= 0;
  const isRightActive = itemsLits + 1 <= items?.length - itemsToShow;
  return (
    <Body>
      <TitleContainer>
        <Title>{title}</Title>
        <TitleButtonContainer>
          <TitleButton
            src={cLeft}
            onClick={prevHandler}
            disabled={!isLeftActive}
          />
          <TitleButton
            src={cRight}
            onClick={nextHandler}
            disabled={!isRightActive}
          />
        </TitleButtonContainer>
      </TitleContainer>
      <ElementContainer>
        {items
          ?.slice(itemsLits, itemsLits + itemsToShow)
          .map(({ icon, info, heading, text, id }) => (
            <Element key={id}>
              <ElementIcon src={icon} />
              <ElementText>{info}</ElementText>
              <ElementTitle>{heading}</ElementTitle>
              <ElementText>{text}</ElementText>
              <StyledLink to={`Blog/${id}`}>Read more</StyledLink>
            </Element>
          ))}
      </ElementContainer>
    </Body>
  );
};
