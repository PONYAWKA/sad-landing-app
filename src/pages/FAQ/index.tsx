import { v4 as uuidv4 } from "uuid";

import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";
import { FAQComponent } from "@/sad-components-lib/components/FAQComponent";

import { breadCrumb, FAQItems, pageHeaderConfig } from "./mock";
import {
  Body,
  CrumbContainer,
  FAQContent,
  SecondPageHeaderContainer,
} from "./styled";

export const FAQ = () => {
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
          <FAQComponent {...e} key={uuidv4()} />
        ))}
      </FAQContent>
      <Help />
    </Body>
  );
};
