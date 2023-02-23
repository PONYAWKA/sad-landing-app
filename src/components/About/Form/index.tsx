import { useTranslate } from "@/hooks/useTranslate";

import { ContactForm } from "../ContactForm";
import { options } from "./mock";
import {
  Body,
  Container,
  Content,
  Info,
  InfoText,
  SubTitle,
  Title,
} from "./styled";

export const Forma = () => {
  const { value } = useTranslate();
  const { title, elements } = options[value];
  return (
    <Body>
      <Content className="element-animation">
        <Container>
          <Title>{title}</Title>
          <SubTitle>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </SubTitle>
          {elements.map(({ text, title }) => (
            <>
              <InfoText>{title}</InfoText>
              <Info>{text}</Info>
            </>
          ))}
        </Container>
        <Container>
          <ContactForm />
        </Container>
      </Content>
    </Body>
  );
};
