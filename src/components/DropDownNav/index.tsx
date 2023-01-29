import { useState } from "react";

import {
  ChildrenLinkContainer,
  ChildrenStyledLink,
  MoreLinks,
  MoreLinksBody,
} from "./styled";

export const DropDownNav = ({
  name,
  routs,
}: {
  name: string;
  routs: { name: string; to: string }[];
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <MoreLinksBody key={name} onClick={onClickHandler}>
      <MoreLinks>{name}</MoreLinks>
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
