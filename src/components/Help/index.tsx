import { Button } from "@/sad-components-lib/components/Button";

import { Body, ButtonContent, Container, Text, Title } from "./styled";

export const Help = () => (
  <Container>
    <Body>
      <Title>Do you need help?</Title>
      <Text>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi.
      </Text>
      <Button>
        <ButtonContent>Contact Us</ButtonContent>
      </Button>
    </Body>
  </Container>
);
