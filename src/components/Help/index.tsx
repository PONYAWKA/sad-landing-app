import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "sad-landing-lib";

import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import { Body, ButtonContent, Container, Text, Title } from "./styled";

export const Help = memo(() => {
  const navigator = useNavigate();

  const handleClick = () => navigator("/Contacts");
  const { value } = useTranslate();

  const { buttonText, text, title } = options[value];
  return (
    <Container>
      <Body className="element-animation">
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Button>
          <ButtonContent onClick={handleClick}>{buttonText}</ButtonContent>
        </Button>
      </Body>
    </Container>
  );
});
