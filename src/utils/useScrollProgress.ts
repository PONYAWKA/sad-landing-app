import { useEffect, useState } from "react";

export const useScrollProgress = (nameObserve?: string) => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const onObserve = (e: IntersectionObserverEntry[]) => {
        const {target} = e[0]
     if(value.target.getAttribute("data-content") && value.isIntersecting)
    };
    const observer = new IntersectionObserver(onObserve, { threshold: 1 });
    const elements = document.querySelectorAll("h1[data-content]");
    elements.forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);

  return progress;
};
