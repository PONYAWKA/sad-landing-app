import { Help } from "@/components/Help";
import { SecondPageHeader } from "@/components/SecondPageHeader";
import { Advantages } from "@/components/Solutions/Advantages";
import { SolutionsList } from "@/components/Solutions/SolutionsList";
import { Testimonials } from "@/constants/Testimonials";
import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";
import { CarouselTeam } from "@/sad-components-lib/components/CarouselTeam";

import { breadCrumb, pageHeaderConfig } from "./mock";
import { Body, Content, TestimonialsContainer } from "./styled";

export const Solutions = () => {
  return (
    <Body>
      <Content>
        <BreadCrumbs {...breadCrumb} />
        <SecondPageHeader {...pageHeaderConfig} />
        <SolutionsList />
      </Content>
      <Advantages />
      <TestimonialsContainer>
        <CarouselTeam {...Testimonials} />
      </TestimonialsContainer>
      <Help />
    </Body>
  );
};
