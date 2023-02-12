import { useNavigate } from "react-router-dom";
import { Button } from "sad-components-lib";

import {
  ButtonText,
  Newest,
  NewestContent,
  NewestText,
  NewestTextContainer,
  Title,
} from "./styled";

export const NewestSection = () => {
  const navigator = useNavigate();

  const HandleClick = () => {
    navigator("Solutions");
  };

  return (
    <NewestContent>
      <Newest className="element-animation">
        <Title>
          The<span> newest </span>
          business analytics platform
        </Title>
        <NewestTextContainer>
          <NewestText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </NewestText>
          <Button onClick={HandleClick}>
            <ButtonText>Discover more</ButtonText>
          </Button>
        </NewestTextContainer>
      </Newest>
    </NewestContent>
  );
};
