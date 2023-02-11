import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { Advantages } from "@/components/Solutions/Advantages";
import { SolutionsList } from "@/components/Solutions/SolutionsList";
import { Testimonials } from "@/constants/Testimonials";
import { useIsMobile } from "@/hooks/useMobile";
import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";
import { CarouselTeam } from "@/sad-components-lib/components/CarouselTeam";

import {
  advantagesConfig,
  breadCrumb,
  pageHeaderConfig,
  solutionsItems,
} from "./mock";
import { Body, Content, TestimonialsContainer } from "./styled";

export const Solutions = () => {
  const { isMobile } = useIsMobile();
  return (
    <Body>
      <Content>
        <BreadCrumbs {...breadCrumb} />
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
