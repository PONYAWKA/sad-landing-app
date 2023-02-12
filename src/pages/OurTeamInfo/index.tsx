import { FormaComponent } from "@/components/FormaComponent";
import { IconsMapper } from "@/components/IconMapper";
import { PageHeader } from "@/components/PageHeader";
import { profiles } from "@/constants/profiles";
import { useQuery } from "@/hooks/useQuery";

import { description, Icons, pageHeadConfig, ShareTitle } from "./mock";
import {
  Body,
  Container,
  FormaTitle,
  FormaTitleContainer,
  IconContainer,
  Image,
  ImageContainer,
  Info,
  PageHeaderContainer,
  Section,
  TextContainer,
  Title,
} from "./styled";

export const OurTeamInfo = () => {
  const query = useQuery();
  const id = query.get("id");
  if (id) {
    const { photo, name, profession, social } = profiles[parseInt(id)];
    return (
      <Body>
        <PageHeaderContainer>
          <PageHeader
            {...pageHeadConfig}
            title={name}
            crumb={{ curPage: name }}
          />
        </PageHeaderContainer>
        <Container>
          <Section>
            <ImageContainer>
              <Image src={photo} loading="lazy" />
            </ImageContainer>
          </Section>
          <Section>
            <TextContainer>
              <Title>Name</Title>
              <Info>{name}</Info>
            </TextContainer>
            <TextContainer>
              <Title>Position</Title>
              <Info>{profession}</Info>
            </TextContainer>
            <TextContainer>
              <Title>Description</Title>
              <Info>{description}</Info>
            </TextContainer>
            <TextContainer>
              <Title>Social networks</Title>
              <IconContainer>
                <IconsMapper urls={social} Icons={Icons} />
              </IconContainer>
            </TextContainer>
          </Section>
        </Container>
        <Container>
          <Section>
            <FormaTitleContainer>
              <FormaTitle>{ShareTitle(name)}</FormaTitle>
            </FormaTitleContainer>
          </Section>
          <Section>
            <FormaComponent alternative />
          </Section>
        </Container>
      </Body>
    );
  }

  return null;
};
