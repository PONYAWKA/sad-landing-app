import { useNavigate } from "react-router-dom";
import { CircleButton } from "sad-landing-lib";

import {
  CircleButtonContainer,
  Content,
  PowerContent,
  PowerText,
  PowerTitle,
} from "./styled";

export const PowerSection = () => {
  const navigator = useNavigate();

  const HandleClick = () => {
    navigator("Services");
  };
  return (
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
        <CircleButton onClick={HandleClick}>Learn more</CircleButton>
      </CircleButtonContainer>
    </Content>
  );
};
