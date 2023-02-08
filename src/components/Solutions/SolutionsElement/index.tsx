import { StyledLick } from "@/sad-components-lib/components/Link";

import { IProps } from "./interfaces";
import { Body, Content, Icon, SubTitle, Title } from "./styled";

export const SolutionsElement = ({
  description,
  heading,
  id,
  img,
  hide,
}: IProps) => {
  return (
    <>
      {description && (
        <Body>
          <Content>
            <Icon src={img} />
            <Title>{heading}</Title>
            <SubTitle>{description}</SubTitle>
            {!hide && <StyledLick to={"Info"}>Read More</StyledLick>}
          </Content>
        </Body>
      )}
    </>
  );
};
