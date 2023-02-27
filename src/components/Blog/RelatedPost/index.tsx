import { useMemo } from "react";
import { LinkedBlogItem } from "sad-landing-lib";

import { IRelatedPost } from "./interfaces";
import { Body, NoPost, PostTitle } from "./styled";

export const RelatedPost = ({
  items,
  title,
  hideId,
  hiedText,
}: IRelatedPost) => {
  const slicedItems = useMemo(() => items.slice(0, 3), [items]);
  return (
    <Body>
      <PostTitle>{title}</PostTitle>
      {slicedItems.length ? (
        slicedItems.map((e) => (
          <LinkedBlogItem
            {...e}
            key={e.heading}
            hideId={hideId}
            hideText={hiedText}
          />
        ))
      ) : (
        <NoPost>NoPost</NoPost>
      )}
    </Body>
  );
};
