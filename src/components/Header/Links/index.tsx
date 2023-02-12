import { Media } from "sad-landing-lib";

import { DropDownNav } from "@/components/Header/DropDownNav";
import { NAV_ROUTES } from "@/constants/routs";
import { useIsMobile } from "@/hooks/useMobile";

import { ILinks } from "./interfaces";
import { LinkContainer, MediaContainer, StyledLink } from "./styled";

export const LinkElement = ({ isOpen, setIsOpen }: ILinks) => {
  const { isMobile } = useIsMobile();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  if (isOpen && isMobile) document.body.style.overflow = "hidden";
  else {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
  }
  return (
    <LinkContainer isOpen={isOpen}>
      {NAV_ROUTES.map(({ name, to, children }) => {
        if (!children) {
          return (
            <StyledLink
              to={to}
              key={name}
              onClick={handleClick}
              name-link={name}
            >
              {name}
            </StyledLink>
          );
        } else {
          return (
            <DropDownNav
              name={name}
              routs={children}
              key={name}
              setIsOpen={setIsOpen}
            />
          );
        }
      })}
      <MediaContainer>
        <Media black>Follow us</Media>
      </MediaContainer>
    </LinkContainer>
  );
};
