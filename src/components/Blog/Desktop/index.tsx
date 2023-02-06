import { useEffect, useState } from "react";

import { CurrentBlog } from "@/components/Blog/CurrentBlog";
import { RelatedPost } from "@/components/Blog/RelatedPost";
import { PageHeader } from "@/components/PageHeader";
import { blogArticles } from "@/constants/blogs";
import { useQuery } from "@/hooks/useQuery";
import { CategoriesElement } from "@/sad-components-lib/components/CategoriesElement";
import { Search } from "@/sad-components-lib/components/Search";
import { TagButton } from "@/sad-components-lib/components/TagButton";
import { sortByPopular } from "@/utils/popular";

import { categories, pageHeadConfig, tags } from "./mock";
import {
  BlogContainer,
  Body,
  CategoriesContainer,
  HeaderContainer,
  LeftSection,
  RightSection,
  TagsContainer,
  Title,
} from "./styled";

export const BlogDesktop = () => {
  const query = useQuery();
  const [check, setCheck] = useState("All topics");
  const [related, setRelated] = useState(blogArticles);
  const popular = blogArticles.sort(sortByPopular);
  const blog = query.get("id") as unknown as number;
  const currentBlogInfo = blogArticles[blog];

  useEffect(() => {
    setRelated(
      blogArticles.filter(
        ({ tags }) => tags.includes(check) || check === "All topics"
      )
    );
  }, [check]);

  return (
    <Body>
      <HeaderContainer>
        <PageHeader {...pageHeadConfig(currentBlogInfo?.heading)} />
      </HeaderContainer>
      <BlogContainer>
        <LeftSection>
          {currentBlogInfo && <CurrentBlog {...currentBlogInfo} />}
          <RelatedPost items={related} title="Related Post" hideId />
        </LeftSection>
        <RightSection>
          <Search buttonText="Search" />
          <RelatedPost items={popular} title="Popular posts" hiedText />
          <CategoriesContainer>
            <Title>Categories</Title>
            {categories.map((e) => (
              <CategoriesElement {...e} key={e.name} />
            ))}
          </CategoriesContainer>
          <TagsContainer>
            <Title>Tags</Title>
            {tags.map((e) => (
              <TagButton
                key={e}
                selected={check}
                setSelected={setCheck}
                text={e}
              />
            ))}
          </TagsContainer>
        </RightSection>
      </BlogContainer>
    </Body>
  );
};
