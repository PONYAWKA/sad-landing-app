import { IBlogItem } from "./interfaces";
import { Container, Element, Icon, StyledLink, Text, Title } from "./styled";
export const HorizontalBlogItem = ({
  text,
  icon,
  info,
  heading,
  id,
  hideId,
  hideText,
}: IBlogItem) => {
  return (
    <Element>
      <Icon src={icon} />
      <Container>
        <Text>{info}</Text>
        <Title>{heading}</Title>
        {!hideText && <Text>{text}</Text>}
        {!hideId && <StyledLink to={`?id=${id}`}>Read more</StyledLink>}
      </Container>
    </Element>
  );
};
