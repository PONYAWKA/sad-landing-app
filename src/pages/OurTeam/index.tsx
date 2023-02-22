import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { DarkHeader } from "@/components/DarkHeader";
import { ImageElement } from "@/components/OurTeam/ImageElement";
import { OurTeamHeaderMobile } from "@/components/OurTeam/OurTeamHeaderMobile";
import { profiles } from "@/constants/profiles";
import { useIsMobile } from "@/hooks/useMobile";
import { usePagination } from "@/hooks/usePagination";
import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import { Body, Content, ImageContainer } from "./styled";

export const OurTeamPage = () => {
  const [posts, setPosts] = useState(profiles);

  const { isMobile } = useIsMobile();

  const onPagination = () =>
    setPosts((prev) => {
      if (prev.length < 30) return [...prev, ...profiles];
      return prev;
    });
  const { value } = useTranslate();
  const { headerConfig, headerConfigMobile } = options[value];
  usePagination(onPagination);

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
