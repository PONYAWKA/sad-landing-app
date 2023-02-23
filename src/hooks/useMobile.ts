import { useEffect, useState } from "react";

import { theme } from "@/theme";

export const useIsMobile = (breakpoint = theme.endPoints.tablet) => {
  const checkForDevice = () => {
    return {
      tablet: document.documentElement.clientWidth < breakpoint,
      fold: document.documentElement.clientWidth < theme.endPoints.phone,
    };
  };
  const [{ tablet, fold }, setIsMobile] = useState(() => checkForDevice());
  useEffect(() => {
    const handlePageResized = () => {
      setIsMobile(checkForDevice());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handlePageResized);
      window.addEventListener("orientationchange", handlePageResized);
      window.addEventListener("load", handlePageResized);
      window.addEventListener("reload", handlePageResized);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handlePageResized);
        window.removeEventListener("orientationchange", handlePageResized);
        window.removeEventListener("load", handlePageResized);
        window.removeEventListener("reload", handlePageResized);
      }
    };
  }, []);

  return {
    isMobile: tablet,
    isFold: tablet && !fold,
  };
};
