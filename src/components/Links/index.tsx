import { NAV_ROUTES } from "@/constants/routs";

import { DropDownNav } from "../DropDownNav";
import { LinkContainer, StyledLink } from "./styled";

export const LinkElement = () => {
  return (
    <LinkContainer>
      {NAV_ROUTES.map(({ name, to, children }) => {
        if (!children) {
          return (
            <StyledLink to={to} key={name}>
              {name}
            </StyledLink>
          );
        } else {
          return <DropDownNav name={name} routs={children} key={name} />;
        }
      })}
    </LinkContainer>
  );
};
