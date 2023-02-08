import { LinkedBlogItem } from "@/sad-components-lib/components/LinkedBlogItem";

import { IRelatedPost } from "./interfaces";
import { Body, PostTitle } from "./styled";

export const RelatedPost = ({
  items,
  title,
  hideId,
  hiedText,
}: IRelatedPost) => {
  return (
    <Body>
      <PostTitle>{title}</PostTitle>
      {items.slice(0, 3).map((e) => (
        <LinkedBlogItem
          {...e}
          key={e.heading}
          hideId={hideId}
          hideText={hiedText}
        />
      ))}
    </Body>
  );
};
