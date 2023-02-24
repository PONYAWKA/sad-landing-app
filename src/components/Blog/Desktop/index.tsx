import { useMemo, useState } from "react";
import {
  CategoriesElement,
  NotFound,
  Search,
  TagButton,
} from "sad-landing-lib";
import { v4 } from "uuid";

import { CurrentBlog } from "@/components/Blog/CurrentBlog";
import { RelatedPost } from "@/components/Blog/RelatedPost";
import { PageHeader } from "@/components/PageHeader";
import { blogArticles } from "@/constants/blogs";
import { useQuery } from "@/hooks/useQuery";
import { useTranslate } from "@/hooks/useTranslate";
import { sortByPopular } from "@/utils/popular";
import { searchElem } from "@/utils/searchElements";

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
  const blogTitle = query.get("id");
  const [check, setCheck] = useState(["All topics"]);
  const [related, setRelated] = useState(blogArticles);
  const [search, setSearch] = useState("");
  const [searchButton, setSarahButton] = useState(false);
  const [popular, setPopular] = useState(blogArticles);

  const { value } = useTranslate();
  const {
    categories,
    pageHeadConfig,
    tags,
    popularPosts,
    relatedPosts,
    categoriesT,
    tagT,
  } = options[value];

  useMemo(() => {
    setRelated(
      blogArticles.filter(
        ({ tags }) => searchElem(tags, check) || check.includes("All topics")
      )
    );
  }, [check]);

  useMemo(() => {
    setPopular(
      blogArticles
        ?.sort(sortByPopular)
        .filter(({ heading }) =>
          search
            ? heading.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            : true
        )
    );
  }, [searchButton]);

  const handleSearch = () => setSarahButton((prev) => !prev);

  const handleTag = (tag: string) => {
    if (check.includes(tag)) {
      setCheck((prev) => prev.filter((e) => e !== tag));
    } else {
      setCheck((prev) => [...prev, tag]);
    }
  };

  if (blogTitle) {
    const currentBlogInfo = blogArticles.filter(
      ({ heading }) => heading.replaceAll(" ", "-") === blogTitle
    )[0];

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
                onClick={handleSearch}
              />
              <RelatedPost items={popular} title={popularPosts} hiedText />
              <CategoriesContainer>
                <Title>{categoriesT}</Title>
                {categories.map((e) => (
                  <CategoriesElement {...e} key={v4()} />
                ))}
              </CategoriesContainer>
              <TagsContainer>
                <Title>{tagT}</Title>
                {tags.map((e) => (
                  <TagButton
                    key={e}
                    selected={!check.includes(e)}
                    setSelected={handleTag}
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
