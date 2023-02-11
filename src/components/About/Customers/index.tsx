import { IconsMapper } from "@/components/IconMapper";
import { Icons } from "@/constants/icons";
import { CarouselTeam } from "@/sad-components-lib/components/CarouselTeam";

import { ICustomers } from "./interfaces";
import { Body, IconsContainer, Text, TextContainer, Title } from "./styled";

export const Customers = ({ text, title, testimonials }: ICustomers) => {
  return (
    <Body>
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
      <IconsContainer>
        <IconsMapper Icons={Icons} />
      </IconsContainer>
      <CarouselTeam {...testimonials} />
    </Body>
  );
};
