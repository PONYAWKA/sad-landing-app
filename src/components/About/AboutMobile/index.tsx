import { BreadCrumbs } from "sad-landing-lib";
import { CarouselTeam } from "sad-landing-lib";

import { Benefits } from "@/components/Benefits";
import { Help } from "@/components/Help";
import { IconsMapper } from "@/components/IconMapper";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { Success } from "@/components/Success";
import { Icons } from "@/constants/icons";
import { useTranslate } from "@/hooks/useTranslate";

import { config } from "./mock";
import { Body, CrumbsContainer, SuccessContainer } from "./styled";

export const AboutMobile = () => {
  const { value } = useTranslate();

  const { benefitConfig, breadCrumb, successConfig, Testimonials, topConfig } =
    config[value];
  return (
    <Body>
      <CrumbsContainer>
        <BreadCrumbs {...breadCrumb} />
      </CrumbsContainer>
      <SecondPageHeader {...topConfig} />
      <SuccessContainer className="element-animation">
        <Success {...successConfig} />
      </SuccessContainer>
      <Benefits {...benefitConfig} />
      <CarouselTeam {...Testimonials} />
      <IconsMapper Icons={Icons} />
      <Help />
    </Body>
  );
};
