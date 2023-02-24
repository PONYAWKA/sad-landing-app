import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { PricingElement } from "@/sad-components-lib";

import { IPriceCards } from "./interfaces";
import { Body, Content, Title } from "./styled";

export const PriceCards = ({ cards, title }: IPriceCards) => {
  return (
    <Content>
      <Title>{title}</Title>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_PAYPAL as string,
        }}
      >
        <Body>
          {cards.map((e) => (
            <PricingElement key={e.name} {...e} />
          ))}
        </Body>
      </PayPalScriptProvider>
    </Content>
  );
};
