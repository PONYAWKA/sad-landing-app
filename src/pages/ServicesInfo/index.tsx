import { DarkHeader } from "@/components/DarkHeader";
import { FormaComponent } from "@/components/FormaComponent";
import { CategoriesElement } from "@/sad-components-lib/components/CategoriesElement";
import { Search } from "@/sad-components-lib/components/Search";

import {
  challenge,
  customer,
  footerConfig,
  headerConfig,
  result,
  services,
  solution,
  technologies,
} from "./mock";
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
  return (
    <Body>
      <DarkHeader {...headerConfig} />
      <Content>
        <Sections>
          <ArticleContainer>
            <Title>{customer.title}</Title>
            <Text>{customer.text}</Text>
            <Image src={customer.image} />
          </ArticleContainer>
          <ArticleContainer>
            <Title>{challenge.title}</Title>
            <Text>{challenge.text}</Text>
          </ArticleContainer>
          <ArticleContainer>
            <Title>{solution.title}</Title>
            <ListContainer>
              <LittleImage src={solution.image} />
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
            <FormaComponent alternative />
          </Sections>
        </Content>
      </Contact>
    </Body>
  );
};
