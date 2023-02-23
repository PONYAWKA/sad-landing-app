import { useState } from "react";
import { BreadCrumbs, FAQComponent } from "sad-landing-lib";
import { v4 as uuidv4 } from "uuid";

import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { useTranslate } from "@/hooks/useTranslate";

import { breadCrumb, options } from "./mock";
import {
  Body,
  CrumbContainer,
  FAQContent,
  SecondPageHeaderContainer,
} from "./styled";

export const FAQ = () => {
  const { value } = useTranslate();
  const { FAQItems, pageHeaderConfig } = options[value];

  const [active, setActive] = useState("");

  return (
    <Body>
      <CrumbContainer>
        <BreadCrumbs {...breadCrumb} />
      </CrumbContainer>
      <SecondPageHeaderContainer>
        <SecondPageHeader {...pageHeaderConfig} />
      </SecondPageHeaderContainer>
      <FAQContent>
        {FAQItems.map((e) => (
          <FAQComponent
            {...e}
            key={uuidv4()}
            setActive={setActive}
            active={active}
          />
        ))}
      </FAQContent>
      <Help />
    </Body>
  );
};
