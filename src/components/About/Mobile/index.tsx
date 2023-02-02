import { Benefits } from "@/components/Benefits";
import { Help } from "@/components/Help";
import { IconsMapper } from "@/components/IconMapper";
import { Success } from "@/components/Success";
import { Top } from "@/components/Top";
import { Icons } from "@/constants/icons";
import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";
import { CarouselTeam } from "@/sad-components-lib/components/CarouselTeam";

import {
  benefitConfig,
  breadCrumb,
  successConfig,
  Testimonials,
  topConfig,
} from "./mock";
import { Body, CrumbsContainer, SuccessContainer } from "./styled";

export const AboutMobile = () => {
  return (
    <Body>
      <CrumbsContainer>
        <BreadCrumbs {...breadCrumb} />
      </CrumbsContainer>
      <Top {...topConfig} />
      <SuccessContainer>
        <Success {...successConfig} />
      </SuccessContainer>
      <Benefits {...benefitConfig} />
      <CarouselTeam {...Testimonials} />
      <IconsMapper Icons={Icons} />
      <Help />
    </Body>
  );
};
