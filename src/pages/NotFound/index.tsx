import { useScrollToTop } from "@/hooks/useScrollToTop";

import { Body, Content, Text, Title } from "./styled";

export const NotFound = () => {
  useScrollToTop();
  return (
    <Body>
      <Content>
        <Title>404</Title>
        <Text>Page not found</Text>
      </Content>
    </Body>
  );
};
