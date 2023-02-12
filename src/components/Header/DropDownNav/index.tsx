import { useState } from "react";

import { IProps } from "./interfaces";
import {
  ChildrenLinkContainer,
  ChildrenStyledLink,
  MoreLinks,
  MoreLinksBody,
} from "./styled";

export const DropDownNav = ({ name, routs, setIsOpen }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleVisible = () => {
    setIsOpen((prev) => !prev);
    handleClick();
  };

  return (
    <MoreLinksBody key={name}>
      <MoreLinks onClick={handleClick}>{name}</MoreLinks>
      <ChildrenLinkContainer visible={isVisible}>
        {routs.map(({ name, to }) => (
          <ChildrenStyledLink to={to} key={name} onClick={handleVisible}>
            {name}
          </ChildrenStyledLink>
        ))}
      </ChildrenLinkContainer>
    </MoreLinksBody>
  );
};
