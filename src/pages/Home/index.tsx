import { CarouselBlog, CarouselTeam } from "sad-landing-lib";

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
import { useTranslate } from "@/hooks/useTranslate";

import { homeConfig } from "./mock";
import { Body, CarouselContainer, Image, PriceContainer } from "./styled";

export const Home = () => {
  const { isMobile } = useIsMobile();
  const { value } = useTranslate();
  const {
    BenefitConfig,
    ElementsToShow,
    newestConfig,
    powerConfig,
    priceCardsConfig,
    solutionsConfig,
    successConfig,
  } = homeConfig[value];

  return (
    <Body>
      <PowerSection {...powerConfig} />
      <Image loading="lazy" src={powerImage} alt="Loading..." title="power" />
      <NewestSection {...newestConfig} />
      <SolutionsSection {...solutionsConfig} />
      <Success {...successConfig} />
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
      <PriceContainer className="element-animation">
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
