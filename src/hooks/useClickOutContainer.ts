import { useEffect } from "react";

export const useClickOutContainer = (rootEl: any, event: () => void) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) =>
      rootEl.current.contains(e.target) || event();
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
};
