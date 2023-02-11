import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";

import { IOurTeamHeader } from "./interfaces";
import {
  Body,
  BreadCrumbContainer,
  Content,
  Text,
  TextContainer,
  Title,
} from "./styled";

export const DarkHeader = ({ title, text, crumb }: IOurTeamHeader) => {
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
};
