import { StyledLick } from "@/sad-components-lib/components/Link";

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
      <Icon src={img} />
      <Title>{heading}</Title>
      <SubTitle>{description}</SubTitle>
      {!hide && <StyledLick to={`?service=${id}`}>Read More</StyledLick>}
    </Body>
  );
};
