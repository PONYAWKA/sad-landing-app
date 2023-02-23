import { useState } from "react";
import { Media, SendMail } from "sad-landing-lib";

import { SubEmail } from "@/api/mailAPI";
import logo from "@/assets/images/header/logo_white.png";
import { FooterLinks } from "@/components/FooterComponents/FooterLinks";
import { validateEmail } from "@/components/forms/mailValidator";
import { useIsMobile } from "@/hooks/useMobile";
import { useTranslate } from "@/hooks/useTranslate";

import { IEvent } from "./interfaces";
import { options } from "./mock";
import {
  Body,
  ButtonContainer,
  Content,
  Description,
  DescriptionContainer,
  DescriptionText,
  EndPageContainer,
  EndPageLine,
  EndPageLink,
  EndPageMediaContainer,
  EndPageTitle,
  Image,
  LanguageButton,
  Line,
  LinkContainer,
  MailContainer,
  MediaContainer,
  SubscribeContainer,
  SubTitleText,
  TextBlock,
  TitleText,
} from "./styled";

export const Footer = () => {
  const [mail, setMail] = useState("");
  const [valid, setValid] = useState(false);
  const { isMobile } = useIsMobile();
  const { setLanguage } = useTranslate();
  const { value } = useTranslate();

  const { descriptionText, policy, subText, subTitle, terms, follow } =
    options[value];

  const handleRu = () => {
    if (setLanguage) setLanguage("ru");
  };
  const handleEn = () => {
    if (setLanguage) setLanguage("en");
  };

  const Subscribe = () => {
    setValid(validateEmail(mail));
    if (valid) SubEmail(mail);
  };

  const onChangeHandler = ({ target: { value } }: IEvent) => {
    setMail(value);
  };
  return (
    <Body>
      <Content>
        <SubscribeContainer>
          <TextBlock>
            <TitleText>{subTitle}</TitleText>
            <SubTitleText>{subText}</SubTitleText>
          </TextBlock>
          <MailContainer>
            <SendMail
              value={mail}
              onChange={onChangeHandler}
              onClick={Subscribe}
              error={valid}
              isMobile={isMobile}
            />
          </MailContainer>
        </SubscribeContainer>
      </Content>
      <Line />
      <Content>
        <DescriptionContainer>
          <Description>
            <Image src={logo} loading="lazy" alt="Loading..." title="logo" />
            <DescriptionText>{descriptionText}</DescriptionText>
            <MediaContainer>
              <Media />
            </MediaContainer>
          </Description>
          <FooterLinks />
          <EndPageMediaContainer>
            <Media>{follow}</Media>
          </EndPageMediaContainer>
        </DescriptionContainer>
        <EndPageLine />
      </Content>
      <Content>
        <EndPageContainer>
          <EndPageTitle>Ensome© 2023 All Rights Reserved</EndPageTitle>
          <ButtonContainer>
            <LanguageButton onClick={handleRu}>ru</LanguageButton>
            <LanguageButton onClick={handleEn}>en</LanguageButton>
          </ButtonContainer>
          <LinkContainer>
            <EndPageLink to="Privacy_policy">{policy}</EndPageLink>
            <EndPageLink to="Terms_of_us">{terms}</EndPageLink>
          </LinkContainer>
        </EndPageContainer>
      </Content>
    </Body>
  );
};
