import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";

import { IOurTeamHeader } from "./interfaces";
import { breadCrumb } from "./mock";
import {
  Body,
  BreadCrumbContainer,
  Content,
  Text,
  TextContainer,
  Title,
} from "./styled";

export const OurTeamHeaderDesktop = ({ title, text }: IOurTeamHeader) => {
  return (
    <Body>
      <Content>
        <BreadCrumbContainer>
          <BreadCrumbs {...breadCrumb} />
        </BreadCrumbContainer>
      </Content>
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
    </Body>
  );
};
