import { useNavigate } from "react-router-dom";

import { IBlogItem } from "./interfaces";
import { Container, Element, Icon, StyledLink, Text, Title } from "./styled";
export const LinkedBlogItem = ({
  text,
  icon,
  info,
  heading,
  id,
  hideId,
  hideText,
  vertical,
}: IBlogItem) => {
  const Link = vertical ? `/BlogInfo?id=${id}` : `?id=${id}`;

  const navigate = useNavigate();

  const onclickHandler = () => (vertical || hideId) && navigate(Link);

  return (
    <Element
      vertical={vertical}
      hideId={vertical || hideId}
      onClick={onclickHandler}
    >
      <Icon src={icon} vertical={vertical} loading="lazy" alt="Loading..." />
      <Container>
        <Text>{info}</Text>
        <Title>{heading}</Title>
        {!hideText && <Text>{text}</Text>}
        {!hideId && <StyledLink to={Link}>Read more</StyledLink>}
      </Container>
    </Element>
  );
};
