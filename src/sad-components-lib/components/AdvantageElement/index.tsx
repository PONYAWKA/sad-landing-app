import Ok from "@/sad-components-lib/assets/images/bOk.svg";

import { iAdvantageElement } from "./interfaces";
import { Body, Image, Text, Title, TitleContainer } from "./styled";

export const AdvantageElement = ({
  description,
  heading,
}: iAdvantageElement) => {
  return (
    <Body>
      <TitleContainer>
        <Image src={Ok} loading="lazy" alt="Loading..." />
        <Title>{heading}</Title>
      </TitleContainer>
      <Text>{description}</Text>
    </Body>
  );
};
