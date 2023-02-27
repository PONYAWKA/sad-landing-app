import { BlogDesktop } from "@/components/Blog/Desktop";
import { BlogMobile } from "@/components/Blog/Mobile";
import { useDevice } from "@/hooks/useMobile";

export const BlogInfo = () => {
  const { isMobile } = useDevice();

  if (isMobile) return <BlogMobile />;
  return <BlogDesktop />;
};
