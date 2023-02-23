import { LinkedBlogItem } from "sad-landing-lib";
import { v4 } from "uuid";

import { DarkDescription } from "@/components/DarkDescription";
import { blogArticles } from "@/constants/blogs";
import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import { BlogContainer, Body } from "./styled";

export const Blog = () => {
  const { value } = useTranslate();
  const { headerConfig } = options[value];
  return (
    <Body>
      <DarkDescription {...headerConfig} />
      <BlogContainer>
        {blogArticles.map((e) => (
          <LinkedBlogItem {...e} vertical key={v4()} />
        ))}
      </BlogContainer>
    </Body>
  );
};
