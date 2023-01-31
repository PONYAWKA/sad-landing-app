import { useState } from "react";

import { IProps } from "./interfaces";
import {
  ChildrenLinkContainer,
  ChildrenStyledLink,
  MoreLinks,
  MoreLinksBody,
} from "./styled";

export const DropDownNav = ({ name, routs }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <MoreLinksBody key={name}>
      <MoreLinks onClick={onClickHandler}>{name}</MoreLinks>
      <ChildrenLinkContainer visible={isVisible}>
        {routs.map(({ name, to }) => (
          <ChildrenStyledLink to={to} key={name}>
            {name}
          </ChildrenStyledLink>
        ))}
      </ChildrenLinkContainer>
    </MoreLinksBody>
  );
};
