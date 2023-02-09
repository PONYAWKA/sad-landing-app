import { DarkHeader } from "@/components/OurTeam/DarkHeader";
import { CategoriesElement } from "@/sad-components-lib/components/CategoriesElement";
import { Search } from "@/sad-components-lib/components/Search";

import {
  challenge,
  customer,
  headerConfig,
  result,
  services,
  solution,
  technologies,
} from "./mock";
import {
  ArticleContainer,
  Body,
  Content,
  Image,
  List,
  ListContainer,
  ListElement,
  LittleImage,
  RightSections,
  SearchContainer,
  Sections,
  ServicesContainer,
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
            {services.items.map((e) => (
              <CategoriesElement name={e} key={e} />
            ))}
          </ServicesContainer>
        </RightSections>
      </Content>
    </Body>
  );
};
