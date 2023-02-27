import { memo } from "react";
import { StyledLick } from "sad-landing-lib";

import { IProps } from "./interfaces";
import { Body, Content, Icon, SubTitle, Title } from "./styled";

export const SolutionsElement = memo(
  ({ description, heading, img, hide }: IProps) => {
    return (
      <>
        {description && (
          <Body>
            <Content>
              <Icon src={img} loading="lazy" />
              <Title>{heading}</Title>
              <SubTitle>{description}</SubTitle>
              {!hide && <StyledLick to="/solutions-info">Read More</StyledLick>}
            </Content>
          </Body>
        )}
      </>
    );
  }
);
