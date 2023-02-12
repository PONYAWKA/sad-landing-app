import { useNavigate } from "react-router-dom";
import { Button } from "sad-components-lib";

import { Body, ButtonContent, Container, Text, Title } from "./styled";

export const Help = () => {
  const navigator = useNavigate();

  const handleClick = () => navigator("/Contacts");
  return (
    <Container>
      <Body className="element-animation">
        <Title>Do you need help?</Title>
        <Text>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </Text>
        <Button>
          <ButtonContent onClick={handleClick}>Contact Us</ButtonContent>
        </Button>
      </Body>
    </Container>
  );
};
