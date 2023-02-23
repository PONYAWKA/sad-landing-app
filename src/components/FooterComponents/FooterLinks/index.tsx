import { memo } from "react";

import { CONTACT_INFO, options } from "@/constants/routs";
import { useTranslate } from "@/hooks/useTranslate";

import { FooterLinkElement } from "../FooterLinksElement";
import { option } from "./mock";
import { Body } from "./styled";

export const FooterLinks = memo(() => {
  const { value } = useTranslate();
  const { FOOTER_ROUTES, SERVICE_ROUTS } = options[value];
  const { contactInfo, quickLink, service } = option[value];
  return (
    <Body>
      <FooterLinkElement title={quickLink} elements={FOOTER_ROUTES} />
      <FooterLinkElement title={service} elements={SERVICE_ROUTS} />
      <FooterLinkElement title={contactInfo} elements={CONTACT_INFO} alt />
    </Body>
  );
});
