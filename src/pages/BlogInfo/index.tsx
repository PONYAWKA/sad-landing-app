import { BlogDesktop } from "@/components/Blog/Desktop";
import { BlogMobile } from "@/components/Blog/Mobile";
import { useIsMobile } from "@/hooks/useMobile";

export const BlogInfo = () => {
  const { isMobile } = useIsMobile();
  if (isMobile) return <BlogMobile />;
  return <BlogDesktop />;
};
