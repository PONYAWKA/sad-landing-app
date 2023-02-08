import image from "@/assets/images/solutions/img_1.png";
import { AdvantageElement } from "@/sad-components-lib/components/AdvantageElement";

import { solutionsAdvantages } from "./mock";
import { AdvantagesContainer, Body, Image, TextContent, Title } from "./styled";

export const Advantages = () => {
  return (
    <Body>
      <Image src={image} />
      <TextContent>
        <Title>Why choose us?</Title>
        <AdvantagesContainer>
          {solutionsAdvantages.map((e) => (
            <AdvantageElement {...e} key={e.heading} />
          ))}
        </AdvantagesContainer>
      </TextContent>
    </Body>
  );
};
