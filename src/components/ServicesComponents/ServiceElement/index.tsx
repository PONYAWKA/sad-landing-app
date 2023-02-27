import { memo } from "react";
import { StyledLick } from "sad-landing-lib";

import { IProps } from "./interfaces";
import { Body, Icon, SubTitle, Title } from "./styled";

export const ServiceElement = memo(
  ({ description, heading, id, img, hide }: IProps) => {
    return (
      <Body>
        <Icon src={img} loading="lazy" />
        <Title>{heading}</Title>
        <SubTitle>{description}</SubTitle>
        {!hide && (
          <StyledLick to={`/services-info?service=${id}`}>Read More</StyledLick>
        )}
      </Body>
    );
  }
);
