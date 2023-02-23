import { CarouselBlog, CarouselTeam } from "sad-components-lib";

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
import {
  Body,
  CarouselContainer,
  Image,
  ImageContainer,
  PriceContainer,
} from "./styled";

export const Home = () => {
  const { isMobile, isFold } = useIsMobile();
  const { value } = useTranslate();
  const {
    BenefitConfig,
    newestConfig,
    powerConfig,
    priceCardsConfig,
    solutionsConfig,
    successConfig,
  } = homeConfig[value];

  const itemsToShow = () =>
    isFold
      ? ElementsToShow.phone
      : isMobile
      ? ElementsToShow.mobile
      : ElementsToShow.desktop;

  const { ElementsToShow } = homeConfig;
  return (
    <Body>
      <PowerSection {...powerConfig} />
      <ImageContainer>
        <Image loading="lazy" src={powerImage} alt="Loading..." title="power" />
      </ImageContainer>
      <NewestSection {...newestConfig} />
      <SolutionsSection {...solutionsConfig} />
      <Success {...successConfig} />
      <Benefits {...BenefitConfig} />
      <CarouselContainer>
        <CarouselTeam
          items={Testimonials.items}
          title={Testimonials.title}
          itemsToShow={itemsToShow()}
        />
      </CarouselContainer>
      <PriceContainer className="element-animation">
        <PriceCards {...priceCardsConfig} />
      </PriceContainer>
      <CarouselContainer>
        <CarouselBlog
          items={blogArticles}
          title={"Our blog"}
          itemsToShow={itemsToShow()}
        />
      </CarouselContainer>
      <Help />
    </Body>
  );
};
