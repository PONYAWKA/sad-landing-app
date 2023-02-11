import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { PricingElement } from "@/sad-components-lib/components/PricingElement";

import { IPriceCards } from "./interfaces";
import { Body, Content, Title } from "./styled";

export const PriceCards = ({ clientId, cards, title }: IPriceCards) => {
  return (
    <Content>
      <Title>{title}</Title>
      <PayPalScriptProvider
        options={{
          "client-id": clientId,
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
