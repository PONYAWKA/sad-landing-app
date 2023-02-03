import { PageHeader } from "@/components/PageHeader";
import { blogArticles } from "@/constants/blogs";
import { useQuery } from "@/hooks/useQuery";

import { CurrentBlog } from "../CurrentBlog";
import { RelatedPost } from "../RelatedPost";
import { pageHeadConfig } from "./mock";
import {
  BlogContainer,
  Body,
  HeaderContainer,
  LeftSection,
  RightSection,
} from "./styled";

export const BlogDesktop = () => {
  const query = useQuery();
  const blog = query.get("id") as unknown as number;
  const currentBlogInfo = blogArticles[blog];
  return (
    <Body>
      <HeaderContainer>
        <PageHeader {...pageHeadConfig(currentBlogInfo?.heading)} />
      </HeaderContainer>
      <BlogContainer>
        <LeftSection>
          {currentBlogInfo && <CurrentBlog {...currentBlogInfo} />}
          <RelatedPost items={blogArticles} title="Related Post" hideId />
        </LeftSection>
        <RightSection>
          <RelatedPost items={blogArticles} title="Popular posts" hiedText />
        </RightSection>
      </BlogContainer>
    </Body>
  );
};
