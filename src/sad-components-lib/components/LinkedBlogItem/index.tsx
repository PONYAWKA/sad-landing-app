import { useNavigate } from "react-router";

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
  const Link = vertical ? `Info/?id=${id}` : `?id=${id}`;

  const navigate = useNavigate();

  const onclickHandler = () => (vertical || hideId) && navigate(Link);

  return (
    <Element
      vertical={vertical}
      hideId={vertical || hideId}
      onClick={onclickHandler}
    >
      <Icon src={icon} vertical={vertical} />
      <Container>
        <Text>{info}</Text>
        <Title>{heading}</Title>
        {!hideText && <Text>{text}</Text>}
        {!hideId && <StyledLink to={Link}>Read more</StyledLink>}
      </Container>
    </Element>
  );
};
