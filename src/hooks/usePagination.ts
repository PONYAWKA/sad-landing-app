import { useEffect } from "react";

export const usePagination = (
  onPagination?: () => void,
  paginationMax = 1000
) => {
  useEffect(() => {
    const scrollHandler = () => {
      const {
        documentElement: { scrollHeight, scrollTop },
      } = document;
      if (scrollHeight - (scrollTop + window.innerHeight) < paginationMax) {
        if (onPagination) onPagination();
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);
};
