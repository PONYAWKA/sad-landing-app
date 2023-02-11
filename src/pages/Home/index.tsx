import powerImage from "@/assets/images/home/home-image-3.png";
import { Benefits } from "@/components/Benefits";
import { Help } from "@/components/Help";
import { NewestSection } from "@/components/HomeComponents/NewestSection";
import { PowerSection } from "@/components/HomeComponents/PowerSection";
import { PriceCards } from "@/components/HomeComponents/PriceCards";
import { SolutionsSection } from "@/components/HomeComponents/SolutionsSection";
import { Success } from "@/components/Success";
import { blogArticles } from "@/constants/blogs";
import { Testimonials } from "@/constants/Testimonials";
import { useIsMobile } from "@/hooks/useMobile";
import { CarouselBlog } from "@/sad-components-lib/components/CarouselBlog";
import { CarouselTeam } from "@/sad-components-lib/components/CarouselTeam";

import {
  BenefitConfig,
  ElementsToShow,
  priceCardsConfig,
  SuccessConfig,
} from "./mock";
import { Body, CarouselContainer, Image, PriceContainer } from "./styled";

export const Home = () => {
  const { isMobile } = useIsMobile();
  return (
    <Body>
      <PowerSection />
      <Image loading="lazy" src={powerImage} />
      <NewestSection />
      <SolutionsSection />
      <Success {...SuccessConfig} />
      <Benefits {...BenefitConfig} />
      <CarouselContainer>
        <CarouselTeam
          items={Testimonials.items}
          title={Testimonials.title}
          itemsToShow={
            isMobile ? ElementsToShow.mobile : ElementsToShow.desktop
          }
        />
      </CarouselContainer>
      <PriceContainer>
        <PriceCards {...priceCardsConfig} />
      </PriceContainer>
      <CarouselContainer>
        <CarouselBlog
          items={blogArticles}
          title={"Our blog"}
          itemsToShow={
            isMobile ? ElementsToShow.mobile : ElementsToShow.desktop
          }
        />
      </CarouselContainer>
      <Help />
    </Body>
  );
};
