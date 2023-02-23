import { memo } from "react";
import { BreadCrumbs } from "sad-landing-lib";

import { IOurTeamHeader } from "./interfaces";
import {
  Body,
  BreadCrumbContainer,
  Content,
  Text,
  TextContainer,
  Title,
} from "./styled";

export const DarkDescription = memo(
  ({ title, text, crumb }: IOurTeamHeader) => {
    return (
      <Body>
        <Content>
          <BreadCrumbContainer>
            <BreadCrumbs {...crumb} />
          </BreadCrumbContainer>
        </Content>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
      </Body>
    );
  }
);
