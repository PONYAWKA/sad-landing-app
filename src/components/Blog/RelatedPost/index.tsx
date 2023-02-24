import { LinkedBlogItem } from "sad-landing-lib";

import { IRelatedPost } from "./interfaces";
import { Body, NoPost, PostTitle } from "./styled";

export const RelatedPost = ({
  items,
  title,
  hideId,
  hiedText,
}: IRelatedPost) => {
  return (
    <Body>
      <PostTitle>{title}</PostTitle>
      {items.length ? (
        items
          .slice(0, 3)
          .map((e) => (
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
