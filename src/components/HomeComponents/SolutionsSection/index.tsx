import { useNavigate } from "react-router-dom";

import solutionsImage from "@/assets/images/home/home-image-1.png";
import newestImage from "@/assets/images/home/home-image-2.png";
import { Button } from "@/sad-components-lib/components/Button";

import {
  ButtonText,
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
          <Button onClick={HandleClick}>
            <ButtonText>Learn more</ButtonText>
          </Button>
        </SolutionsText>
      </SolutionsTextContainer>
    </SolutionsContent>
  );
};
