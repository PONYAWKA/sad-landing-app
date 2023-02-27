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
import { useDevice } from "@/hooks/useMobile";
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
  const { isMobile, isFold } = useDevice();
  const { value } = useTranslate();
  const {
    benefitConfig,
    newestConfig,
    powerConfig,
    priceCardsConfig,
    solutionsConfig,
    successConfig,
  } = homeConfig[value];

  const itemsToShow = (endpoint: number = elementsToShow.mobile) =>
    isFold
      ? elementsToShow.phone
      : isMobile
      ? endpoint
      : elementsToShow.desktop;

  const { elementsToShow } = homeConfig;
  return (
    <Body>
      <PowerSection {...powerConfig} />
      <ImageContainer>
        <Image loading="lazy" src={powerImage} alt="Loading..." title="power" />
      </ImageContainer>
      <NewestSection {...newestConfig} />
      <SolutionsSection {...solutionsConfig} />
      <Success {...successConfig} />
      <Benefits {...benefitConfig} />
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
