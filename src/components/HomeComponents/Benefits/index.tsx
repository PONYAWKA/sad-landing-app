import { Card } from "@/sad-components-lib/components/Card";

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

export const Benefits = () => (
  <Container>
    <Content>
      <TextContainer>
        <Text>
          <Title>The benefits of Ensome </Title>
          <SubTitle>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </SubTitle>
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
