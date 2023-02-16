import { BreadCrumbs, Button, NotFound } from "sad-landing-lib";

import { SecondPageHeader } from "@/components/SecondPageHeader";
import { blogArticles } from "@/constants/blogs";
import { useQuery } from "@/hooks/useQuery";
import { useTranslate } from "@/hooks/useTranslate";

import { CurrentBlog } from "../CurrentBlog";
import { MobileBlogItem } from "../MobileBlogItem";
import { config } from "./mock";
import {
  BlogsContainer,
  Body,
  ButtonContainer,
  CrumbContainer,
} from "./styles";

export const BlogMobile = () => {
  const { value } = useTranslate();
  const { breadCrumb, headerConfig } = config[value];
  const query = useQuery();
  const blog = query.get("id");
  if (blog) {
    const currentBlogInfo = blogArticles[Number(blog)];
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
  }
  return <NotFound />;
};
