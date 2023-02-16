import { FormaComponent } from "@/components/FormaComponent";
import { IconsMapper } from "@/components/IconMapper";
import { PageHeader } from "@/components/PageHeader";
import { profiles } from "@/constants/profiles";
import { useQuery } from "@/hooks/useQuery";
import { useTranslate } from "@/hooks/useTranslate";

import { Icons, options } from "./mock";
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
  const { value } = useTranslate();
  const {
    description,
    pageHeadConfig,
    ShareTitle,
    nameTitle,
    professionTitle,
    descriptionTitle,
    socialNetworks,
  } = options[value];
  if (id) {
    const { photo, name, profession, social, sex } = profiles[parseInt(id)];
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
              <Image
                src={photo}
                loading="lazy"
                alt="Loading..."
                title="photo"
              />
            </ImageContainer>
          </Section>
          <Section>
            <TextContainer>
              <Title>{nameTitle}</Title>
              <Info>{name}</Info>
            </TextContainer>
            <TextContainer>
              <Title>{professionTitle}</Title>
              <Info>{profession}</Info>
            </TextContainer>
            <TextContainer>
              <Title>{descriptionTitle}</Title>
              <Info>{description}</Info>
            </TextContainer>
            <TextContainer>
              <Title>{socialNetworks}</Title>
              <IconContainer>
                <IconsMapper urls={social} Icons={Icons} />
              </IconContainer>
            </TextContainer>
          </Section>
        </Container>
        <Container>
          <Section>
            <FormaTitleContainer>
              <FormaTitle>{ShareTitle(name, sex)}</FormaTitle>
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
