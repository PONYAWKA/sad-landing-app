import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { PricingElement } from "@/sad-components-lib/components/PricingElement";

import { PRICE } from "./mock";
import { Body, Content, Title } from "./styled";

export const Price = () => {
  return (
    <Content>
      <Title>Our pricing</Title>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AQDwMTzIWXOvJVPxCjfShNnJQSTUBthostkKH4BACDj8KHHwIgjkfQ9RmHNkKKVwT6cRsUyzCeNQxa6_",
        }}
      >
        <Body>
          {PRICE.map((e) => (
            <PricingElement key={e.name} {...e} />
          ))}
        </Body>
      </PayPalScriptProvider>
    </Content>
  );
};
