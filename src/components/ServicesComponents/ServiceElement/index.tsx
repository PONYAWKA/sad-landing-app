import { StyledLick } from "sad-landing-lib";

import { IProps } from "./interfaces";
import { Body, Icon, SubTitle, Title } from "./styled";

export const ServiceElement = ({
  description,
  heading,
  id,
  img,
  hide,
}: IProps) => {
  return (
    <Body>
      <Icon src={img} loading="lazy" />
      <Title>{heading}</Title>
      <SubTitle>{description}</SubTitle>
      {!hide && (
        <StyledLick to={`/solutionsInfo?service=${id}`}>Read More</StyledLick>
      )}
    </Body>
  );
};
