import { ContactForm } from "../ContactForm";
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
  return (
    <Body>
      <Content className="element-animation">
        <Container>
          <Title>
            Left questions? Contacts us now for a free consultation and free
            trial!
          </Title>
          <SubTitle>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </SubTitle>
          <InfoText>Email address</InfoText>
          <Info>ensome@info.co.us</Info>
          <InfoText>Phone number</InfoText>
          <Info>+1601-201-5580</Info>
          <InfoText>Address</InfoText>
          <Info>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</Info>
        </Container>
        <Container>
          <ContactForm />
        </Container>
      </Content>
    </Body>
  );
};
