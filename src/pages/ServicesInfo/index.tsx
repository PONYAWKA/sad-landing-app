import { CategoriesElement } from "sad-landing-lib";
import { Search } from "sad-landing-lib";

import { DarkDescription } from "@/components/DarkDescription";
import { SecondFormaComponent } from "@/components/forms/SecondForm";
import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import {
  ArticleContainer,
  Body,
  Contact,
  ContactContainer,
  ContactItem,
  Content,
  FootContainer,
  Image,
  ImageContainer,
  Line,
  List,
  ListContainer,
  ListElement,
  LittleImage,
  RightSections,
  SearchContainer,
  Sections,
  ServicesContainer,
  SubTitle,
  Text,
  Title,
} from "./styled";

export const ServicesInfo = () => {
  const { value } = useTranslate();

  const {
    challenge,
    customer,
    footerConfig,
    headerConfig,
    result,
    services,
    solution,
    technologies,
  } = options[value];
  return (
    <Body>
      <DarkDescription {...headerConfig} />
      <Content>
        <Sections>
          <ArticleContainer>
            <Title>{customer.title}</Title>
            <Text>{customer.text}</Text>
            <Image src={customer.image} loading="lazy" />
          </ArticleContainer>
          <ArticleContainer>
            <Title>{challenge.title}</Title>
            <Text>{challenge.text}</Text>
          </ArticleContainer>
          <ArticleContainer>
            <Title>{solution.title}</Title>
            <ListContainer>
              <LittleImage src={solution.image} loading="lazy" />
              <List>
                {solution.items.map((e) => (
                  <ListElement key={e}>{e}</ListElement>
                ))}
              </List>
            </ListContainer>
          </ArticleContainer>
          <ArticleContainer>
            <Title>{result.title}</Title>
            <Text>{result.text}</Text>
          </ArticleContainer>
          <ArticleContainer>
            <Title>{technologies.title}</Title>
            <Text>{technologies.text}</Text>
          </ArticleContainer>
        </Sections>
        <RightSections>
          <ServicesContainer>
            <SearchContainer>
              <Search buttonText="Search" />
            </SearchContainer>
            <Title>{services.text}</Title>
            {services.items.map(({ text, id }) => (
              <CategoriesElement name={text} key={text} id={id} />
            ))}
          </ServicesContainer>
        </RightSections>
      </Content>
      <Contact>
        <Content>
          <Sections>
            <FootContainer>
              <Title>{footerConfig.title}</Title>
              <Line />
              <Text>{footerConfig.text}</Text>
              <ContactContainer>
                {footerConfig.items.map(({ Img, text }) => (
                  <ContactItem key={text}>
                    <ImageContainer>{Img}</ImageContainer>
                    <SubTitle>{text}</SubTitle>
                  </ContactItem>
                ))}
              </ContactContainer>
            </FootContainer>
          </Sections>
          <Sections>
            <SecondFormaComponent />
          </Sections>
        </Content>
      </Contact>
    </Body>
  );
};
