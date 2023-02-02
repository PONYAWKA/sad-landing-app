import { IconsMapper } from "@/components/IconMapper";
import { Icons } from "@/constants/icons";
import { CarouselTeam } from "@/sad-components-lib/components/CarouselTeam";

import { Testimonials } from "./mock";
import { Body, IconsContainer, Text, TextContainer, Title } from "./styled";

export const Customers = () => {
  return (
    <Body>
      <TextContainer>
        <Title>Our customers</Title>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudan, totam rem aperiam.
        </Text>
      </TextContainer>
      <IconsContainer>
        <IconsMapper Icons={Icons} />
      </IconsContainer>
      <CarouselTeam {...Testimonials} />
    </Body>
  );
};
