import { BreadCrumbs } from "sad-landing-lib";
import { CarouselTeam } from "sad-landing-lib";

import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { Advantages } from "@/components/Solutions/Advantages";
import { SolutionsList } from "@/components/Solutions/SolutionsList";
import { Testimonials } from "@/constants/Testimonials";
import { useDevice } from "@/hooks/useMobile";
import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import {
  Body,
  BreadCrumbContainer,
  Content,
  TestimonialsContainer,
} from "./styled";

export const Solutions = () => {
  const { value } = useTranslate();

  const { advantagesConfig, breadCrumb, pageHeaderConfig, solutionsItems } =
    options[value];

  const { isMobile } = useDevice();
  return (
    <Body>
      <BreadCrumbContainer>
        <BreadCrumbs {...breadCrumb} />
      </BreadCrumbContainer>
      <Content>
        <SecondPageHeader {...pageHeaderConfig} />
        <SolutionsList items={solutionsItems} />
      </Content>
      <Advantages {...advantagesConfig} />
      <TestimonialsContainer>
        <CarouselTeam
          {...Testimonials}
          itemsToShow={
            !isMobile
              ? Testimonials.itemsToShow
              : Testimonials.itemsToShowMobile
          }
        />
      </TestimonialsContainer>
      <Help />
    </Body>
  );
};
