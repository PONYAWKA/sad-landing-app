import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { AboutDesktop } from "@/components/About/AboutDesktop";
import { AboutMobile } from "@/components/About/AboutMobile";

export const About = () => {
  const theme = useContext(ThemeContext);
  const isMobile = window.screen.width < theme.endPoints.tablet;

  if (isMobile) return <AboutMobile />;
  return <AboutDesktop />;
};
