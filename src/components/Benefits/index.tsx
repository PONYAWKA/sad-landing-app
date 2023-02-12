import { Card } from "sad-components-lib";

import { BenefitsInterface } from "./interfaces";
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

export const Benefits = ({ title, text, cards }: BenefitsInterface) => (
  <Container className="element-animation">
    <Content>
      <TextContainer>
        <Text>
          <Title>{title}</Title>
          <SubTitle>{text}</SubTitle>
        </Text>
      </TextContainer>
      <CardContainer>
        {cards.map(({ title, text, icon }) => (
          <CardElement key={title}>
            <Card title={title} subTitle={text} icon={icon} />
          </CardElement>
        ))}
      </CardContainer>
    </Content>
  </Container>
);
