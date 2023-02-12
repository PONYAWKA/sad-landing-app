import { BreadCrumbs } from "sad-landing-lib";

import { MapComponent } from "@/components/ContactPage/MapComponent";
import { FormaComponent } from "@/components/FormaComponent";

import { breadCrumb, contacts, mapConfig } from "./mock";
import {
  Body,
  ContactsCard,
  ContactsContainer,
  Container,
  Content,
  Description,
  FormaContainer,
  Icon,
  ImageTitle,
  Title,
} from "./styled";

export const Contacts = () => {
  return (
    <Body>
      <Content>
        <BreadCrumbs {...breadCrumb} />
        <FormaContainer>
          <Title>
            How can we <span>help you?</span>
          </Title>
          <FormaComponent />
        </FormaContainer>
        <ContactsContainer>
          {contacts.map(({ icon, title, description }) => (
            <ContactsCard key={title}>
              <Container>
                <Icon src={icon} loading="lazy" />
                <ImageTitle>{title}</ImageTitle>
              </Container>
              <Description>{description}</Description>
            </ContactsCard>
          ))}
        </ContactsContainer>
      </Content>
      <MapComponent {...mapConfig} />
    </Body>
  );
};
