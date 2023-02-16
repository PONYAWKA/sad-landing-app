import { BrowserRouter } from "react-router-dom";
import { CarouselTeam } from "sad-landing-lib";

import { config } from "@/components/About/AboutMobile/mock";

export default {
  title: "CarouselTeam",
  component: CarouselTeam,
};

const Template = () => (
  <BrowserRouter>
    <CarouselTeam {...config.en.Testimonials} />
  </BrowserRouter>
);

export const Default = Template.bind({});
