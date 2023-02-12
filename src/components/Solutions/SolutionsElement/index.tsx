import { StyledLick } from "sad-landing-lib";

import { IProps } from "./interfaces";
import { Body, Content, Icon, SubTitle, Title } from "./styled";

export const SolutionsElement = ({
  description,
  heading,
  img,
  hide,
}: IProps) => {
  return (
    <>
      {description && (
        <Body>
          <Content>
            <Icon src={img} loading="lazy" />
            <Title>{heading}</Title>
            <SubTitle>{description}</SubTitle>
            {!hide && <StyledLick to={"Info"}>Read More</StyledLick>}
          </Content>
        </Body>
      )}
    </>
  );
};
