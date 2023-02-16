import { BreadCrumbs } from "sad-landing-lib";

import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { ServiceList } from "@/components/ServicesComponents/ServiceList";
import { Success } from "@/components/Success";
import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import { Body, CrumbContainer } from "./styled";

export const Services = () => {
  const { value } = useTranslate();
  const { crumbs, serviceConfig, successItems, topConfig } = options[value];
  return (
    <Body>
      <CrumbContainer>
        <BreadCrumbs {...crumbs} />
      </CrumbContainer>
      <SecondPageHeader {...topConfig} />
      <ServiceList {...serviceConfig} />
      <Success center items={successItems} />
      <Help />
    </Body>
  );
};
