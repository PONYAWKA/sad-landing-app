import { useNavigate } from "react-router-dom";
import { Button } from "sad-landing-lib";

import solutionsImage from "@/assets/images/home/home-image-1.png";
import newestImage from "@/assets/images/home/home-image-2.png";

import { ISolutionsSection } from "./interfaces";
import {
  ButtonContainer,
  ButtonText,
  Container,
  SolutionsContent,
  SolutionsImage,
  SolutionsImageMobile,
  SolutionsText,
  SolutionsTextContainer,
  SolutionsTextText,
  SolutionsTextTitle,
} from "./styled";

export const SolutionsSection = ({
  text,
  title,
  buttonText,
}: ISolutionsSection) => {
  const navigator = useNavigate();

  const HandleClick = () => {
    navigator("Solutions");
  };

  return (
    <SolutionsContent>
      <Container>
        <SolutionsImage loading="lazy" src={newestImage} />
        <SolutionsTextContainer>
          <SolutionsText className="element-animation">
            <SolutionsTextTitle>{title}</SolutionsTextTitle>
            <SolutionsImageMobile loading="lazy" src={solutionsImage} />
            <SolutionsTextText>{text}</SolutionsTextText>
            <ButtonContainer>
              <Button onClick={HandleClick}>
                <ButtonText>{buttonText}</ButtonText>
              </Button>
            </ButtonContainer>
          </SolutionsText>
        </SolutionsTextContainer>
      </Container>
    </SolutionsContent>
  );
};
