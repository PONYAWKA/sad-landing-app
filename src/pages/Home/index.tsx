import firstImage from "@/assets/images/img_11.jpg";
import { CircleButton } from "@/sad-components-lib/components/CircleButton";

import {
  Body,
  CircleButtonContainer,
  Content,
  Image,
  PowerContent,
  PowerText,
  PowerTitle,
} from "./styled";

export const Home = () => {
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
        <Image src={} />
      </Content>
    </Body>
  );
};
