import { IBlogItem } from "./interfaces";
import {
  Element,
  ElementIcon,
  ElementText,
  ElementTitle,
  StyledLink,
} from "./styled";
export const BlogItem = ({ text, icon, info, heading, id }: IBlogItem) => {
  return (
    <Element>
      <ElementIcon src={icon} alt="Loading..." />
      <ElementText>{info}</ElementText>
      <ElementTitle>{heading}</ElementTitle>
      <ElementText>{text}</ElementText>
      {id && <StyledLink to={`/BlogInfo?id=${id}`}>Read more</StyledLink>}
    </Element>
  );
};
