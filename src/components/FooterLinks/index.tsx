import { CONTACT_INFO, FOOTER_ROUTES, SERVICE_ROUTS } from "@/constants/routs";

import { FooterLinkElement } from "../FooterLinksElement";
import { Body } from "./styled";

export const FooterLinks = () => {
  return (
    <Body>
      <FooterLinkElement title={"Quick link"} elements={FOOTER_ROUTES} />
      <FooterLinkElement title={"Service"} elements={SERVICE_ROUTS} />
      <FooterLinkElement title={"Contact info"} elements={CONTACT_INFO} />
    </Body>
  );
};
