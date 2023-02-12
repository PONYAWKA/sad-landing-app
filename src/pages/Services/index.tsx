import { BreadCrumbs } from "sad-components-lib";

import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { ServiceList } from "@/components/ServicesComponents/ServiceList";
import { Success } from "@/components/Success";

import { crumbs, serviceConfig, successItems, topConfig } from "./mock";
import { Body, CrumbContainer } from "./styled";

export const Services = () => {
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
