import { BrowserRouter } from "react-router-dom";
import { CarouselBlog } from "sad-landing-lib";

import { blogArticles } from "@/constants/blogs";

export default {
  title: "CarouselBlog",
  component: CarouselBlog,
};

const Template = () => (
  <BrowserRouter>
    <CarouselBlog items={blogArticles} title="Blog" itemsToShow={2} />
  </BrowserRouter>
);

export const Default = Template.bind({});
