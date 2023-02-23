import { PayPalButtons } from "@paypal/react-paypal-js";
import { memo, useState } from "react";
import { ThemeProvider } from "styled-components";

import { createPaypalOrder } from "@/api/paypalAPI";
import bOk from "@/sad-components-lib/assets/images/bOk.svg";
import wOk from "@/sad-components-lib/assets/images/wOk.svg";
import { libTheme } from "@/sad-components-lib/theme";

import { IProps } from "./interface";
import {
  Body,
  Button,
  ButtonContainer,
  Container,
  ElementContainer,
  Image,
  PlanButton,
  PlusContainer,
  PlusElement,
  PlusText,
  Price,
  Title,
} from "./styled";

export const PricingElement = memo(({ plus, yr, mo, name }: IProps) => {
  const [priority, setPriority] = useState(false);

  const theme = {
    primary: !priority ? libTheme.colors.blue : libTheme.colors.white,
    secondary: priority ? libTheme.colors.blue : libTheme.colors.white,
  };

  const Icon = theme.primary == libTheme.colors.blue ? bOk : wOk;

  const [isYear, setIsYear] = useState(false);
  const [payPal, setPayPal] = useState(false);

  const onMouseEnter = () => setPriority(true);
  const onMouseLeave = () => setPriority(false);

  const setYrHandler = () => setIsYear(true);
  const setMoHandler = () => setIsYear(false);

  console.log(priority);

  const money = isYear ? yr : mo;

  const payPalHandler = () => setPayPal((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <Body onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Container>
          <Title>{name}</Title>
          <ElementContainer>
            <Price>${money}</Price>
            <ButtonContainer>
              <Button onClick={setYrHandler} isChose={isYear}>
                Yr
              </Button>
              <Button onClick={setMoHandler} isChose={!isYear}>
                Mo
              </Button>
            </ButtonContainer>
          </ElementContainer>
          {!payPal ? (
            <PlanButton onClick={payPalHandler}>Choose plan</PlanButton>
          ) : (
            <PayPalButtons createOrder={createPaypalOrder(+money, name)} />
          )}
          <PlusContainer>
            {plus.map((e) => (
              <PlusElement key={e}>
                <Image loading="lazy" src={Icon} alt="Loading..." />
                <PlusText>{e}</PlusText>
              </PlusElement>
            ))}
          </PlusContainer>
        </Container>
      </Body>
    </ThemeProvider>
  );
});
