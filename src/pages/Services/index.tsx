import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { ServiceList } from "@/components/ServicesComponents/ServiceList";
import { Success } from "@/components/Success";
import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";

import { crumbs, topConfig } from "./mock";
import { Body, CrumbContainer } from "./styled";

export const Services = () => {
  return (
    <Body>
      <CrumbContainer>
        <BreadCrumbs {...crumbs} />
      </CrumbContainer>
      <SecondPageHeader {...topConfig} />
      <ServiceList />
      <Success center />
      <Help />
    </Body>
  );
};
