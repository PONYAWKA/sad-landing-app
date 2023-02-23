import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "sad-landing-lib";

import { INewestSection } from "./interfaces";
import {
  ButtonText,
  Newest,
  NewestContent,
  NewestText,
  NewestTextContainer,
  Title,
} from "./styled";

export const NewestSection = memo(
  ({ title, text, buttonText, titleArticle, titleOutline }: INewestSection) => {
    const navigator = useNavigate();

    const HandleClick = () => {
      navigator("solutions");
    };

    return (
      <NewestContent>
        <Newest className="element-animation">
          <Title>
            {titleArticle}
            <span>{titleOutline}</span>
            {title}
          </Title>
          <NewestTextContainer>
            <NewestText>{text}</NewestText>
            <Button onClick={HandleClick}>
              <ButtonText>{buttonText}</ButtonText>
            </Button>
          </NewestTextContainer>
        </Newest>
      </NewestContent>
    );
  }
);
