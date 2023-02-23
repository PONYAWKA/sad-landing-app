import { memo } from "react";
import { CarouselTeam } from "sad-landing-lib";

import { IconsMapper } from "@/components/IconMapper";
import { icons } from "@/constants/icons";

import { ICustomers } from "./interfaces";
import { Body, IconsContainer, Text, TextContainer, Title } from "./styled";

export const Customers = memo(({ text, title, testimonials }: ICustomers) => {
  return (
    <Body>
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
      <IconsContainer>
        <IconsMapper icons={icons} />
      </IconsContainer>
      <CarouselTeam {...testimonials} />
    </Body>
  );
});
