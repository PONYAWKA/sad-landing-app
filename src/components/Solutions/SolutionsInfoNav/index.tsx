import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import { Body, Container, Element } from "./styled";

export const SolutionsInfoNav = () => {
  const { value } = useTranslate();
  const { titles } = options[value];
  const { progress, setProgress } = useScrollProgress("data-content", "div");
  const handleClick = (e: number) => () => {
    setProgress(e + 1);
  };

  return (
    <Body>
      {titles.map(({ text, href }, index) => (
        <Container key={text} href={href}>
          <Element isActive={index === progress} onClick={handleClick(index)}>
            {text}
          </Element>
        </Container>
      ))}
    </Body>
  );
};
