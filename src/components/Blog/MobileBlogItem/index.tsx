import { useNavigate } from "react-router-dom";
import { TagButton } from "sad-landing-lib";

import { IMobileBlogItem } from "./interfaces";
import { Body, Content, Image, Info, TagsContainer, Title } from "./styled";

export const MobileBlogItem = ({
  tags,
  icon,
  heading,
  info,
}: IMobileBlogItem) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`?id=${heading}`);
    window.scrollTo(0, 0);
  };

  return (
    <Body onClick={onClickHandler}>
      <Image src={icon} loading="lazy" alt="Loading..." title="Blog" />
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
