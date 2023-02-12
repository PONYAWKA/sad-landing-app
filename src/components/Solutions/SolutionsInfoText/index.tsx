import { inEnsome, practiceConfig, TypesOf, WhatIs } from "./mock";
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
  return (
    <Body>
      <ContentContainer>
        <Title>{WhatIs.title}</Title>
        <Text>{WhatIs.text}</Text>
        <LinkMarker id="typeOf" />
      </ContentContainer>
      <ContentContainer id="typeOf">
        <Title>{TypesOf.title}</Title>
        <Image src={TypesOf.img} loading="lazy" />
        <Text>{TypesOf.text}</Text>
        <Container>
          {TypesOf.elements.map(({ title, text }) => (
            <Element key={title}>
              <span>{title}</span>
              {text}
            </Element>
          ))}
        </Container>
        <ContentContainer id="practice" />
      </ContentContainer>
      <ContentContainer>
        <Title>{practiceConfig.title}</Title>
        <Image src={practiceConfig.img} loading="lazy" />
        <Text>{practiceConfig.text}</Text>
        <ContentContainer id="inEnsome" />
      </ContentContainer>
      <ContentContainer>
        <Title>{inEnsome.title}</Title>
        <Text>{inEnsome.text}</Text>
      </ContentContainer>
    </Body>
  );
};
