import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { BlogDesktop } from "@/components/Blog/Desktop";
import { BlogMobile } from "@/components/Blog/Mobile";

export const Blog = () => {
  const theme = useContext(ThemeContext);
  const isMobile = window.screen.width < theme.endPoints.tablet;
  if (isMobile) return <BlogMobile />;
  return <BlogDesktop />;
};
