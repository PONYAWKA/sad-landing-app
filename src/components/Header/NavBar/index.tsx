import { useState } from "react";
import YouTube from "react-youtube";

import play from "@/assets/icons/header/play.png";
import logo from "@/assets/images/header/logo_blue.png";
import { LinkElement } from "@/components/Header/Links";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Burger } from "@/sad-components-lib/components/Burger";
import { Button } from "@/sad-components-lib/components/Button";

import { videoId, youtubeOptions } from "./mock";
import {
  BurgerContainer,
  ButtonContainer,
  ButtonTitle,
  Container,
  Content,
  Image,
  YouTubeContainer,
} from "./styled";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isYouOpen, setIsYouOpen] = useState(false);

  const youTubeHandler = () => setIsYouOpen((prev) => !prev);

  const BurgerClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useScrollToTop();

  return (
    <Container>
      <Content>
        <Image loading="lazy" src={logo} />
        <LinkElement isOpen={isOpen} setIsOpen={setIsOpen} />
        <ButtonContainer>
          <Button onClick={youTubeHandler}>
            <Image loading="lazy" src={play} />
            <ButtonTitle>Watch the demo</ButtonTitle>
          </Button>
        </ButtonContainer>
        <BurgerContainer>
          <Burger onClick={BurgerClickHandler} />
        </BurgerContainer>
      </Content>
      {isYouOpen && (
        <YouTubeContainer onClick={youTubeHandler}>
          <YouTube videoId={videoId} opts={youtubeOptions} />
        </YouTubeContainer>
      )}
    </Container>
  );
};
