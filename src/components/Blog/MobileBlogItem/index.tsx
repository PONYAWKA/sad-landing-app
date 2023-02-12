import { useNavigate } from "react-router-dom";
import { TagButton } from "sad-components-lib";

import { IMobileBlogItem } from "./interfaces";
import { Body, Content, Image, Info, TagsContainer, Title } from "./styled";

export const MobileBlogItem = ({
  tags,
  icon,
  heading,
  info,
  id,
}: IMobileBlogItem) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`?id=${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Body onClick={onClickHandler}>
      <Image src={icon} loading="lazy" />
      <Content>
        <Info>{info}</Info>
        <Title>{heading}</Title>
        <TagsContainer>
          {tags?.map((e) => (
            <TagButton key={e} text={e} />
          ))}
        </TagsContainer>
      </Content>
    </Body>
  );
};
