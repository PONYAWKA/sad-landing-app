import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { AboutDesktop } from "@/components/About/Desktop";
import { AboutMobile } from "@/components/About/Mobile";

export const About = () => {
  const theme = useContext(ThemeContext);
  const isMobile = window.screen.width < theme.endPoints.tablet;

  if (isMobile) return <AboutMobile />;
  return <AboutDesktop />;
};
