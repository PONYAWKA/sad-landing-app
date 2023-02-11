/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from "react";

import cLeft from "../../assets/images/cLeft.png";
import cRight from "../../assets/images/cRight.png";
import { BlogItem } from "../BlogItem";
import { IProps } from "./interfaces";
import { initialPos, itemsSize } from "./mock";
import {
  Body,
  ElementContainer,
  Title,
  TitleButton,
  TitleButtonContainer,
  TitleContainer,
  Window,
} from "./styled";
export const CarouselBlog = ({ title, itemsToShow = 1, items }: IProps) => {
  const [offSet, setOffSet] = useState(5);
  const [width, setWidth] = useState();
  const handleLeftArrowClick = () => {
    setOffSet((currentOffset) => {
      const newOffset = currentOffset + itemsSize[1];

      return Math.min(newOffset, 5);
    });
  };
  const handleRightArrowClick = () => {
    setOffSet((currentOffset) => {
      const newOffset = currentOffset - itemsSize[1];

      const maxOffset = -(
        itemsSize[1] * (items.length - itemsToShow) -
        initialPos
      );

      return Math.max(newOffset, maxOffset);
    });
  };
  console.log(offSet);
  const isLeftActive = offSet < 0;
  const isRightActive = offSet > -(itemsSize[1] * (items.length - itemsToShow));
  return (
    <Body>
      <Window style={{ maxWidth: itemsSize[itemsToShow] }}>
        <TitleContainer>
          <Title>{title}</Title>
          <TitleButtonContainer>
            <TitleButton
              src={cLeft}
              onClick={handleLeftArrowClick}
              disabled={!isLeftActive}
            />
            <TitleButton
              src={cRight}
              onClick={handleRightArrowClick}
              disabled={!isRightActive}
            />
          </TitleButtonContainer>
        </TitleContainer>
        <ElementContainer style={{ transform: `translateX(${offSet}px)` }}>
          {items?.map((e) => (
            <BlogItem key={e.id} {...e} />
          ))}
        </ElementContainer>
      </Window>
    </Body>
  );
};
