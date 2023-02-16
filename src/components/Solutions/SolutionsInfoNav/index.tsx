import { useTranslate } from "@/hooks/useTranslate";
import { useScrollProgress } from "@/utils/useScrollProgress";

import { options } from "./mock";
import { Body, Container, Element } from "./styled";

export const SolutionsInfoNav = () => {
  const { value } = useTranslate();
  const { titles } = options[value];
  const { progress, setProgress } = useScrollProgress("data-content", "h1");
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
