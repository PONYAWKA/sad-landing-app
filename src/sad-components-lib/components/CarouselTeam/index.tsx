import { useState } from "react";
import { useNavigate } from "react-router-dom";

import cLeft from "@/sad-components-lib/assets/images/cLeft.png";
import cRight from "@/sad-components-lib/assets/images/cRight.png";

import { IProps } from "./interfaces";
import {
  Body,
  Element,
  ElementContainer,
  ElementHeader,
  ElementHeaderContainer,
  ElementIcon,
  ElementPosition,
  ElementText,
  ElementTitle,
  Title,
  TitleButton,
  TitleButtonContainer,
  TitleContainer,
} from "./styled";

export const CarouselTeam = ({ title, itemsToShow = 1, items, to }: IProps) => {
  const [itemsLits, setItemsList] = useState(0);

  const navigate = useNavigate();
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

  const onClickHandler = () => {
    if (to) navigate(to);
  };

  const isLeftActive = itemsLits - 1 >= 0;
  const isRightActive = itemsLits + 1 <= items?.length - itemsToShow;
  return (
    <Body className="element-animation">
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
      <ElementContainer key={String(itemsLits)}>
        {items
          ?.slice(itemsLits, itemsLits + itemsToShow)
          .map(({ text, pos, title, icon }) => (
            <Element key={title} onClick={onClickHandler}>
              <ElementHeader>
                <ElementIcon src={icon} />
                <ElementHeaderContainer>
                  <ElementTitle>{title}</ElementTitle>
                  <ElementPosition>{pos}</ElementPosition>
                </ElementHeaderContainer>
              </ElementHeader>
              <ElementText>{text}</ElementText>
            </Element>
          ))}
      </ElementContainer>
    </Body>
  );
};
