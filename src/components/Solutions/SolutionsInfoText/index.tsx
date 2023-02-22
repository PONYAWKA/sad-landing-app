import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import {
  Body,
  Container,
  ContentContainer,
  Element,
  Image,
  LinkMarker,
  Text,
  Title,
} from "./styled";

export const SolutionsInfoText = () => {
  const { value } = useTranslate();
  const { inEnsome, practiceConfig, typesOf, WhatIs } = options[value];
  return (
    <Body>
      <ContentContainer data-content="1">
        <Title>{WhatIs.title}</Title>
        <Text>{WhatIs.text}</Text>
        <LinkMarker id="typeOf" />
      </ContentContainer>
      <ContentContainer data-content="2">
        <Title>{typesOf.title}</Title>
        <Image
          src={typesOf.img}
          loading="lazy"
          alt="Loading..."
          title="typeOf"
        />
        <Text>{typesOf.text}</Text>
        <Container>
          {typesOf.elements.map(({ title, text }) => (
            <Element key={title}>
              <span>{title}</span>
              {text}
            </Element>
          ))}
        </Container>
        <ContentContainer id="practice" />
      </ContentContainer>
      <ContentContainer data-content="3">
        <Title>{practiceConfig.title}</Title>
        <Image
          src={practiceConfig.img}
          loading="lazy"
          alt="Loading..."
          title="best practice"
        />
        <Text>{practiceConfig.text}</Text>
        <ContentContainer id="inEnsome" />
      </ContentContainer>
      <ContentContainer data-content="4">
        <Title>{inEnsome.title}</Title>
        <Text>{inEnsome.text}</Text>
      </ContentContainer>
    </Body>
  );
};
