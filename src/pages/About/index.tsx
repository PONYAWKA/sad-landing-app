import { AboutDesktop } from "@/components/About/AboutDesktop";
import { AboutMobile } from "@/components/About/AboutMobile";
import { useDevice } from "@/hooks/useMobile";

export const About = () => {
  const { isMobile } = useDevice();

  if (isMobile) return <AboutMobile />;
  return <AboutDesktop />;
};
