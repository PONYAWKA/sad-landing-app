import { CircleButton } from "sad-landing-lib";

import { Body } from "./styled";

export default {
  title: "CircleButton",
  component: CircleButton,
};

const Template = () => (
  <Body>
    <CircleButton>Press</CircleButton>
  </Body>
);

export const Default = Template.bind({});
