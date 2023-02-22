import { useRef, useState } from "react";

import { useClickOutContainer } from "@/hooks/useClickOutContainer";

import { IDropDownNav } from "./interfaces";
import {
  ChildrenLinkContainer,
  ChildrenStyledLink,
  MoreLinks,
  MoreLinksBody,
} from "./styled";

export const DropDownNav = ({ name, routs, setIsOpen }: IDropDownNav) => {
  const [isVisible, setIsVisible] = useState(false);
  const rootEl = useRef<HTMLDivElement>(null);

  const handleHide = () => setIsVisible(false);

  useClickOutContainer(rootEl, handleHide);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleVisible = () => {
    setIsOpen((prev) => !prev);
    handleClick();
  };

  return (
    <MoreLinksBody key={name} name-link="morePages" ref={rootEl}>
      <MoreLinks onClick={handleClick} id="morePages">
        {name}
      </MoreLinks>
      <ChildrenLinkContainer visible={isVisible}>
        {routs.map(({ name, to }) => (
          <ChildrenStyledLink
            to={to}
            key={name}
            onClick={handleVisible}
            name-link={to}
          >
            {name}
          </ChildrenStyledLink>
        ))}
      </ChildrenLinkContainer>
    </MoreLinksBody>
  );
};
