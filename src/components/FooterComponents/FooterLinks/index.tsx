import { v4 } from "uuid";

import { useTranslate } from "@/hooks/useTranslate";

import { FooterLinkElement } from "../FooterLinksElement";
import { option } from "./mock";
import { Body } from "./styled";

export const FooterLinks = () => {
  const { value } = useTranslate();
  const { links } = option[value];
  return (
    <Body>
      {links.map((e) => (
        <FooterLinkElement {...e} key={v4()} />
      ))}
    </Body>
  );
};
