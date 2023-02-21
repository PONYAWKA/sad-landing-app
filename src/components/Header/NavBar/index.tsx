import { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { Burger } from "sad-landing-lib";
import { Button } from "sad-landing-lib";

import play from "@/assets/icons/header/play.png";
import logo from "@/assets/images/header/logo_blue.png";
import { LinkElement } from "@/components/Header/Links";
import { useIsMobile } from "@/hooks/useMobile";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useTranslate } from "@/hooks/useTranslate";
import { useShowBlocks } from "@/utils/showBlocks";

import { options, youtubeOptions } from "./mock";
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
  const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);

  const navigation = useNavigate();
  const { isMobile } = useIsMobile();

  const handleYouTube = () => setIsYoutubeOpen((prev) => !prev);

  const handleLogoClick = () => navigation("/");

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  useScrollToTop();
  useShowBlocks();

  const { value } = useTranslate();

  const { demo } = options[value];

  return (
    <Container>
      <Content>
        <Image loading="lazy" src={logo} onClick={handleLogoClick} />
        <LinkElement isOpen={isOpen} setIsOpen={setIsOpen} />
        <ButtonContainer>
          <Button onClick={handleYouTube}>
            <Image loading="lazy" src={play} alt="Loading..." title="play" />
            <ButtonTitle>{demo}</ButtonTitle>
          </Button>
        </ButtonContainer>
        <BurgerContainer id="burger">
          <Burger onClick={handleBurgerClick} />
        </BurgerContainer>
      </Content>
      {isYoutubeOpen && !isMobile && (
        <YouTubeContainer onClick={handleYouTube}>
          <YouTube
            videoId={process.env.REACT_APP_YOUTUBE}
            opts={youtubeOptions}
          />
        </YouTubeContainer>
      )}
    </Container>
  );
};
