import { useEffect, useState } from "react";
import { CategoriesElement } from "sad-landing-lib";
import { NotFound, Search, TagButton } from "sad-landing-lib";
import { v4 } from "uuid";

import { CurrentBlog } from "@/components/Blog/CurrentBlog";
import { RelatedPost } from "@/components/Blog/RelatedPost";
import { PageHeader } from "@/components/PageHeader";
import { blogArticles } from "@/constants/blogs";
import { useQuery } from "@/hooks/useQuery";
import { useTranslate } from "@/hooks/useTranslate";
import { sortByPopular } from "@/utils/popular";

import { IEvent } from "./interfaces";
import { options } from "./mock";
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
  const blog = query.get("id");
  const [check, setCheck] = useState("All topics");
  const [related, setRelated] = useState(blogArticles);
  const [search, setSearch] = useState("");

  const { value } = useTranslate();
  const {
    categories,
    pageHeadConfig,
    tags,
    popularPosts,
    relatedPosts,
    categoriesT,
    TagT,
  } = options[value];
  useEffect(() => {
    setRelated(
      blogArticles
        .filter(({ tags }) => tags.includes(check) || check === "All topics")
        .filter(({ heading }) =>
          search ? heading.toLocaleLowerCase().includes(search) : true
        )
    );
  }, [check, search]);

  if (blog) {
    const popular = blogArticles.sort(sortByPopular);
    const currentBlogInfo = blogArticles[Number(blog)];

    const onChangeHandler = ({ target: { value } }: IEvent) => {
      setSearch(value);
    };

    if (currentBlogInfo)
      return (
        <Body>
          <HeaderContainer>
            <PageHeader {...pageHeadConfig(currentBlogInfo?.heading)} />
          </HeaderContainer>
          <BlogContainer>
            <LeftSection>
              <CurrentBlog {...currentBlogInfo} />
              <RelatedPost items={related} title={relatedPosts} hideId />
            </LeftSection>
            <RightSection>
              <Search
                buttonText="Search"
                value={search}
                onChange={onChangeHandler}
              />
              <RelatedPost items={popular} title={popularPosts} hiedText />
              <CategoriesContainer>
                <Title>{categoriesT}</Title>
                {categories.map((e) => (
                  <CategoriesElement {...e} key={v4()} />
                ))}
              </CategoriesContainer>
              <TagsContainer>
                <Title>{TagT}</Title>
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
  }

  return <NotFound />;
};
