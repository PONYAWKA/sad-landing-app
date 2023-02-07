import { SecondPageHeader } from "@/components/SecondPageHeader";
import { blogArticles } from "@/constants/blogs";
import { useQuery } from "@/hooks/useQuery";
import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";
import { Button } from "@/sad-components-lib/components/Button";

import { CurrentBlog } from "../CurrentBlog";
import { MobileBlogItem } from "../MobileBlogItem";
import { breadCrumb, headerConfig } from "./mock";
import {
  BlogsContainer,
  Body,
  ButtonContainer,
  CrumbContainer,
} from "./styles";

export const BlogMobile = () => {
  const query = useQuery();
  const blog = query.get("id") as unknown as number;
  const currentBlogInfo = blogArticles[blog];
  return (
    <Body>
      <CrumbContainer>
        <BreadCrumbs {...breadCrumb} />
      </CrumbContainer>

      <SecondPageHeader {...headerConfig} />
      {currentBlogInfo && <CurrentBlog {...currentBlogInfo} />}
      <BlogsContainer>
        {blogArticles.map((e) => (
          <MobileBlogItem {...e} key={e.heading} />
        ))}
      </BlogsContainer>
      <ButtonContainer>
        <Button>See more</Button>
      </ButtonContainer>
    </Body>
  );
};
