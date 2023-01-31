import { NAV_ROUTES } from "@/constants/routs";
import { Media } from "@/sad-components-lib/components/Media";

import { DropDownNav } from "../DropDownNav";
import { LinkContainer, MediaContainer, StyledLink } from "./styled";

export const LinkElement = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <LinkContainer isOpen={isOpen}>
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
      <MediaContainer>
        <Media black>Follow us</Media>
      </MediaContainer>
    </LinkContainer>
  );
};