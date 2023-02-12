import { useScrollToTop } from "@/hooks/useScrollToTop";

import { INotFound } from "./interfaces";
import { Body, Content, Text, Title } from "./styled";

export const NotFound = ({
  text = "Page not found",
  title = "404",
}: INotFound) => {
  useScrollToTop();
  return (
    <Body>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Body>
  );
};
