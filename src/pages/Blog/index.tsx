import { v4 } from "uuid";

import { DarkHeader } from "@/components/DarkHeader";
import { blogArticles } from "@/constants/blogs";
import { LinkedBlogItem } from "@/sad-components-lib/components/LinkedBlogItem";

import { headerConfig } from "./mock";
import { BlogContainer, Body } from "./styled";

export const Blog = () => {
  return (
    <Body>
      <DarkHeader {...headerConfig} />
      <BlogContainer>
        {blogArticles.map((e) => (
          <LinkedBlogItem {...e} vertical key={v4()} />
        ))}
      </BlogContainer>
    </Body>
  );
};
