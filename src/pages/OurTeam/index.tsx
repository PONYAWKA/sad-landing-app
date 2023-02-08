import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { DarkHeader } from "@/components/OurTeam/DarkHeader";
import { ImageElement } from "@/components/OurTeam/ImageElement";
import { OurTeamHeaderMobile } from "@/components/OurTeam/OurTeamHeaderMobile";
import { profiles } from "@/constants/profiles";

import { headerConfig, headerConfigMobile, paginationMax } from "./mock";
import { Body, Content, ImageContainer } from "./styled";

export const OurTeamPage = () => {
  const [posts, setPosts] = useState(profiles);

  const theme = useContext(ThemeContext);
  const isMobile = window.screen.width < theme.endPoints.tablet;

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = () => {
    const {
      documentElement: { scrollHeight, scrollTop },
    } = document;
    if (scrollHeight - (scrollTop + window.innerHeight) < paginationMax) {
      setPosts((element) => [...element, ...profiles]);
    }
  };

  return (
    <Body>
      {isMobile ? (
        <OurTeamHeaderMobile {...headerConfigMobile} />
      ) : (
        <DarkHeader {...headerConfig} />
      )}
      <Content>
        <ImageContainer>
          {posts.map((e) => (
            <ImageElement {...e} key={uuidv4()} />
          ))}
        </ImageContainer>
      </Content>
    </Body>
  );
};
