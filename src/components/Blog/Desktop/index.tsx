import { useEffect, useState } from "react";
import { CategoriesElement } from "sad-landing-lib";
import { Search } from "sad-landing-lib";
import { TagButton } from "sad-landing-lib";
import { v4 } from "uuid";

import { CurrentBlog } from "@/components/Blog/CurrentBlog";
import { RelatedPost } from "@/components/Blog/RelatedPost";
import { PageHeader } from "@/components/PageHeader";
import { blogArticles } from "@/constants/blogs";
import { useQuery } from "@/hooks/useQuery";
import { NotFound } from "@/pages/NotFound";
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
  const blog = query.get("id");

  if (blog) {
    const [check, setCheck] = useState("All topics");
    const [related, setRelated] = useState(blogArticles);
    const [search, setSearch] = useState("");
    const popular = blogArticles.sort(sortByPopular);
    const currentBlogInfo = blogArticles[Number(blog)];

    useEffect(() => {
      setRelated(
        blogArticles
          .filter(({ tags }) => tags.includes(check) || check === "All topics")
          .filter(({ heading }) =>
            search ? heading.toLocaleLowerCase().includes(search) : true
          )
      );
    }, [check, search]);

    const onChangeHandler = ({ target: { value } }: any) => {
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
              <RelatedPost items={related} title="Related Post" hideId />
            </LeftSection>
            <RightSection>
              <Search
                buttonText="Search"
                value={search}
                onChange={onChangeHandler}
              />
              <RelatedPost items={popular} title="Popular posts" hiedText />
              <CategoriesContainer>
                <Title>Categories</Title>
                {categories.map((e) => (
                  <CategoriesElement {...e} key={v4()} />
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
  }
  return <NotFound />;
};
