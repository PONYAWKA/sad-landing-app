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
        <Title data-content="1">{WhatIs.title}</Title>
        <Text>{WhatIs.text}</Text>
        <LinkMarker id="typeOf" />
      </ContentContainer>
      <ContentContainer>
        <Title data-content="2">{TypesOf.title}</Title>
        <Image
          src={TypesOf.img}
          loading="lazy"
          alt="Loading..."
          title="typeOf"
        />
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
        <Title data-content="3">{practiceConfig.title}</Title>
        <Image
          src={practiceConfig.img}
          loading="lazy"
          alt="Loading..."
          title="best practice"
        />
        <Text>{practiceConfig.text}</Text>
        <ContentContainer id="inEnsome" />
      </ContentContainer>
      <ContentContainer>
        <Title data-content="4">{inEnsome.title}</Title>
        <Text>{inEnsome.text}</Text>
      </ContentContainer>
    </Body>
  );
};
