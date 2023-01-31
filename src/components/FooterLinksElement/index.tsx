import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

import { IProps } from "./interface";
import { LinkContainer, LinkTitle, List, StyledLink } from "./styled";

export const FooterLinkElement = ({ elements, title }: IProps) => {
  const theme = useContext(ThemeContext);

  const isPhone = window.screen.width < theme.endPoints.tablet;

  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <List>
      <LinkTitle onClick={isOpenHandler}>{title}</LinkTitle>
      <LinkContainer isOpen={isPhone ? isOpen : true}>
        {elements.map(({ title, to }) => (
          <StyledLink to={to} key={title}>
            {title}
          </StyledLink>
        ))}
      </LinkContainer>
    </List>
  );
};
