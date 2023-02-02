import { Card } from "@/sad-components-lib/components/Card";

import { BenefitsInterface } from "./interfaces";
import { CARDS } from "./mock";
import {
  CardContainer,
  CardElement,
  Container,
  Content,
  SubTitle,
  Text,
  TextContainer,
  Title,
} from "./styled";

export const Benefits = ({ title, text }: BenefitsInterface) => (
  <Container>
    <Content>
      <TextContainer>
        <Text>
          <Title>{title}</Title>
          <SubTitle>{text}</SubTitle>
        </Text>
      </TextContainer>
      <CardContainer>
        {CARDS.map(({ title, text, icon }) => (
          <CardElement key={title}>
            <Card title={title} subTitle={text} icon={icon} />
          </CardElement>
        ))}
      </CardContainer>
    </Content>
  </Container>
);
