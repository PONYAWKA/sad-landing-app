import { useScrollProgress } from "@/utils/useScrollProgress";

import { titles } from "./mock";
import { Body, Container, Element } from "./styled";

export const SolutionsInfoNav = () => {
  useScrollProgress();
  return (
    <Body>
      {titles.map(({ text, href }) => (
        <Container key={text} href={href}>
          <Element>{text}</Element>
        </Container>
      ))}
    </Body>
  );
};
