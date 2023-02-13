import { PricingElement } from "sad-landing-lib";

import { card } from "./mock";
import { Body } from "./styled";

export default {
  title: "PricingElement",
  component: PricingElement,
};

const Template = () => (
  <Body>
    <PricingElement {...card} />
  </Body>
);

export const Default = Template.bind({});
