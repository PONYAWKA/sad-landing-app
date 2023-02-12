import { useState } from "react";

import { SubEmail } from "@/api/mailAPI";
import logo from "@/assets/images/header/logo_white.png";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { Media } from "@/sad-components-lib/components/Media";
import { SendMail } from "@/sad-components-lib/components/SendMail";

import { IEvent } from "./interfaces";
import {
  Body,
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

  const Subscribe = () => {
    SubEmail(mail);
  };

  const onChangeHandler = (e: IEvent) => {
    setMail(e.target.value);
  };
  return (
    <Body>
      <Content>
        <SubscribeContainer>
          <TextBlock>
            <TitleText>Subscribe to our newsletter</TitleText>
            <SubTitleText>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </SubTitleText>
          </TextBlock>
          <MailContainer>
            <SendMail
              value={mail}
              onChange={onChangeHandler}
              onClick={Subscribe}
            />
          </MailContainer>
        </SubscribeContainer>
      </Content>
      <Line />
      <Content>
        <DescriptionContainer>
          <Description>
            <Image src={logo} loading="lazy" />
            <DescriptionText>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </DescriptionText>
            <MediaContainer>
              <Media />
            </MediaContainer>
          </Description>
          <FooterLinks />
          <EndPageMediaContainer>
            <Media>Follow Us</Media>
          </EndPageMediaContainer>
        </DescriptionContainer>
        <EndPageLine />
      </Content>
      <Content>
        <EndPageContainer>
          <EndPageTitle>Ensome© 2023 All Rights Reserved</EndPageTitle>
          <LinkContainer>
            <EndPageLink to="Privacy_policy">Privacy policy</EndPageLink>
            <EndPageLink to="Terms_of_us">Terms of us</EndPageLink>
          </LinkContainer>
        </EndPageContainer>
      </Content>
    </Body>
  );
};
