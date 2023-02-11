import { AboutDesktop } from "@/components/About/AboutDesktop";
import { AboutMobile } from "@/components/About/AboutMobile";
import { useIsMobile } from "@/hooks/useMobile";

export const About = () => {
  const { isMobile } = useIsMobile();

  if (isMobile) return <AboutMobile />;
  return <AboutDesktop />;
};
