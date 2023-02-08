import { useContext } from "react";
import { ThemeContext } from "styled-components";

import solutionsImage from "@/assets/images/img_9.png";
import newestImage from "@/assets/images/img_10.png";
import powerImage from "@/assets/images/img_11.png";
import { Benefits } from "@/components/Benefits";
import { Help } from "@/components/Help";
import { Price } from "@/components/HomeComponents/Price";
import { Success } from "@/components/Success";
import { blogArticles } from "@/constants/blogs";
import { Testimonials } from "@/constants/Testimonials";
import { Button } from "@/sad-components-lib/components/Button";
import { CarouselBlog } from "@/sad-components-lib/components/CarouselBlog";
import { CarouselTeam } from "@/sad-components-lib/components/CarouselTeam";
import { CircleButton } from "@/sad-components-lib/components/CircleButton";

import { BenefitConfig, ElementsToShow, SuccessConfig } from "./mock";
import {
  Body,
  ButtonText,
  CarouselContainer,
  CircleButtonContainer,
  Content,
  Image,
  Newest,
  NewestContent,
  NewestText,
  NewestTextContainer,
  PowerContent,
  PowerText,
  PowerTitle,
  PriceContainer,
  SolutionsContent,
  SolutionsImage,
  SolutionsImageMobile,
  SolutionsText,
  SolutionsTextContainer,
  SolutionsTextText,
  SolutionsTextTitle,
} from "./styled";

export const Home = () => {
  const theme = useContext(ThemeContext);
  const isMobile = window.screen.width < theme.endPoints.tablet;

  return (
    <Body>
      <Content>
        <PowerContent>
          <PowerTitle>
            Find true power in your data with <span>Ensome</span>
          </PowerTitle>
          <PowerText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi.
          </PowerText>
        </PowerContent>
        <CircleButtonContainer>
          <CircleButton>Learn more</CircleButton>
        </CircleButtonContainer>
      </Content>
      <Image loading="lazy" src={powerImage} />

      <NewestContent>
        <Newest>
          <PowerTitle>
            The<span> newest </span>
            business analytics platform
          </PowerTitle>
          <NewestTextContainer>
            <NewestText>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </NewestText>
            <Button>
              <ButtonText>Discover more</ButtonText>
            </Button>
          </NewestTextContainer>
        </Newest>
      </NewestContent>
      <CircleButtonContainer>
        <CircleButton>Learn more</CircleButton>
      </CircleButtonContainer>

      <SolutionsContent>
        <SolutionsImage loading="lazy" src={newestImage} />
        <SolutionsTextContainer>
          <SolutionsText>
            <SolutionsTextTitle>
              Radically new solutions for data
            </SolutionsTextTitle>
            <SolutionsImageMobile loading="lazy" src={solutionsImage} />
            <SolutionsTextText>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </SolutionsTextText>
            <Button>
              <ButtonText>Learn more</ButtonText>
            </Button>
          </SolutionsText>
        </SolutionsTextContainer>
      </SolutionsContent>
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
        <Price />
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
