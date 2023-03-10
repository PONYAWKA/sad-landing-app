import { useEffect } from "react";

export const showBlocks = () => {
  function onEntry(entry: IntersectionObserverEntry[]) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  const options = {
    threshold: [0.5],
  };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.getElementsByClassName("element-animation");
  useEffect(() => {
    for (const elm of elements) {
      observer.observe(elm);
    }
    return () => {
      for (const elm of elements) {
        observer.unobserve(elm);
      }
    };
  });
};
