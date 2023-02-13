import { useNavigate } from "react-router-dom";
import { Button } from "sad-landing-lib";

import solutionsImage from "@/assets/images/home/home-image-1.png";
import newestImage from "@/assets/images/home/home-image-2.png";

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

export const SolutionsSection = () => {
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
            <ButtonContainer>
              <Button onClick={HandleClick}>
                <ButtonText>Learn more</ButtonText>
              </Button>
            </ButtonContainer>
          </SolutionsText>
        </SolutionsTextContainer>
      </Container>
    </SolutionsContent>
  );
};
