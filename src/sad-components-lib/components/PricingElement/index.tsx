import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { createPaypalOrder } from "@/api/paypalAPI";
import { libTheme } from "@/sad-components-lib/theme";

import bOk from "../../assets/images/bOk.svg";
import wOk from "../../assets/images/wOk.svg";
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

export const PricingElement = ({ priority, plus, yr, mo, name }: IProps) => {
  const theme = {
    pr: !priority ? libTheme.colors.blue : libTheme.colors.white,
    se: priority ? libTheme.colors.blue : libTheme.colors.white,
  };

  const Icon = theme.pr == libTheme.colors.blue ? bOk : wOk;

  const [isYear, setIsYear] = useState(false);

  const [PayPal, setPayPal] = useState(false);

  const setYrHandler = () => setIsYear(true);
  const setMoHandler = () => setIsYear(false);

  const money = isYear ? yr : mo;

  const payPalHandler = () => {
    setPayPal((prev) => !prev);
    setTimeout(() => setPayPal((prev) => !prev), 3000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Body>
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
          {!PayPal ? (
            <PlanButton onClick={payPalHandler}>Choose plan</PlanButton>
          ) : (
            <PayPalButtons createOrder={createPaypalOrder(+money, name)} />
          )}
          <PlusContainer>
            {plus.map((e) => (
              <PlusElement key={e}>
                <Image loading="lazy" src={Icon} />
                <PlusText>{e}</PlusText>
              </PlusElement>
            ))}
          </PlusContainer>
        </Container>
      </Body>
    </ThemeProvider>
  );
};
