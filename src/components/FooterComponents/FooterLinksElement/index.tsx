import { useState } from "react";

import { useDevice } from "@/hooks/useMobile";

import { IProps } from "./interface";
import { AltLink, LinkContainer, LinkTitle, List, StyledLink } from "./styled";

export const FooterLinkElement = ({ routs, title, alt }: IProps) => {
  const { isMobile } = useDevice();

  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <List>
      <LinkTitle onClick={isOpenHandler}>{title}</LinkTitle>
      <LinkContainer isOpen={isMobile ? isOpen : true}>
        {routs.map(({ title, to }) => {
          if (alt)
            return (
              <AltLink href={to} key={title}>
                {title}
              </AltLink>
            );
          return (
            <StyledLink to={to} key={title}>
              {title}
            </StyledLink>
          );
        })}
      </LinkContainer>
    </List>
  );
};
