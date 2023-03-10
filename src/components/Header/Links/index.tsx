import { Media } from "sad-landing-lib";

import { DropDownNav } from "@/components/Header/DropDownNav";
import { options } from "@/constants/headerRouts";
import { useDevice } from "@/hooks/useMobile";
import { useTranslate } from "@/hooks/useTranslate";

import { ILinks } from "./interfaces";
import { LinkContainer, MediaContainer, StyledLink } from "./styled";

export const LinkElement = ({ isOpen, setIsOpen }: ILinks) => {
  const { value } = useTranslate();
  const { isMobile } = useDevice();
  const { NAV_ROUTES } = options[value];

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  if (isOpen && isMobile) document.body.style.overflow = "hidden";
  else document.body.style.overflowY = "scroll";

  return (
    <LinkContainer isOpen={isOpen}>
      {NAV_ROUTES.map(({ name, to, children }) =>
        !children ? (
          <StyledLink to={to} key={name} onClick={handleClick} name-link={name}>
            {name}
          </StyledLink>
        ) : (
          <DropDownNav
            name={name}
            routs={children}
            key={name}
            setIsOpen={setIsOpen}
          />
        )
      )}
      <MediaContainer>
        <Media black>Follow us</Media>
      </MediaContainer>
    </LinkContainer>
  );
};
