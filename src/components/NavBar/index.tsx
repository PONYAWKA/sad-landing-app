import { useState } from "react";

import play from "@/assets/icons/play.png";
import logo from "@/assets/images/logo_blue.png";
import { Burger } from "@/sad-components-lib/components/Burger";
import { Button } from "@/sad-components-lib/components/Button";

import { LinkElement } from "../Links";
import {
  BurgerContainer,
  ButtonContainer,
  ButtonTitle,
  Container,
  Content,
  Image,
} from "./styled";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const BurgerClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <Content>
        <Image src={logo} />
        <LinkElement isOpen={isOpen} />
        <ButtonContainer>
          <Button>
            <Image src={play} />
            <ButtonTitle>Watch the demo</ButtonTitle>
          </Button>
        </ButtonContainer>
        <BurgerContainer>
          <Burger onClick={BurgerClickHandler} />
        </BurgerContainer>
      </Content>
    </Container>
  );
};
