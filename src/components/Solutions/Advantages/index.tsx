import { AdvantageElement } from "sad-components-lib";

import image from "@/assets/images/solutions/why-choose-us.png";

import { IAdvantages } from "./interfaces";
import { AdvantagesContainer, Body, Image, TextContent, Title } from "./styled";

export const Advantages = ({ title, items }: IAdvantages) => {
  return (
    <Body>
      <Image src={image} loading="lazy" />
      <TextContent>
        <Title>{title}</Title>
        <AdvantagesContainer>
          {items.map((e) => (
            <AdvantageElement {...e} key={e.heading} />
          ))}
        </AdvantagesContainer>
      </TextContent>
    </Body>
  );
};
