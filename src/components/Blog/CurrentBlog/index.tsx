import { TagButton } from "sad-components-lib";

import authorIcon from "@/assets/icons/blog/author.svg";
import date from "@/assets/icons/blog/date.svg";
import shareIcon from "@/assets/icons/blog/share.svg";
import tagIcon from "@/assets/icons/blog/tag.svg";
import viewsIcon from "@/assets/icons/blog/views.svg";
import { IconsMapper } from "@/components/IconMapper";

import { ICurrentBlog } from "./interfaces";
import { Icons } from "./mock";
import {
  Body,
  Image,
  InfoContainer,
  InfoElement,
  InfoIcon,
  InfoText,
  Text,
  Title,
} from "./styled";

export const CurrentBlog = ({
  icon,
  info,
  author,
  heading,
  text,
  views,
  tags,
}: ICurrentBlog) => {
  return (
    <Body>
      <Image src={icon} loading="lazy" />
      <InfoContainer>
        <InfoElement>
          <InfoText>
            <InfoIcon src={date} loading="lazy" />
            {info}
          </InfoText>
        </InfoElement>
        <InfoElement>
          <InfoText>
            <InfoIcon src={authorIcon} loading="lazy" />
            {author}
          </InfoText>
        </InfoElement>
      </InfoContainer>
      <Title>{heading}</Title>
      <Text>{text}</Text>
      <Text>{text}</Text>
      <Text>{text}</Text>
      <InfoContainer>
        <InfoElement>
          <InfoText>
            <InfoIcon src={viewsIcon} loading="lazy" />
            {views}
          </InfoText>
        </InfoElement>
        <InfoElement>
          <InfoText>
            <InfoIcon src={shareIcon} loading="lazy" />
            Share:
          </InfoText>
          <IconsMapper Icons={Icons} />
        </InfoElement>
        <InfoElement>
          <InfoText>
            <InfoIcon src={tagIcon} loading="lazy" />
            Tags:
            {tags?.map((e) => (
              <TagButton key={e} text={e} />
            ))}
          </InfoText>
        </InfoElement>
      </InfoContainer>
    </Body>
  );
};
