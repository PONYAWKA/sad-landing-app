import { BreadCrumbProps } from "./interfaces";
import { Body, CurPage, StyledLink } from "./styled";

export const BreadCrumbs = ({ links, curPage }: BreadCrumbProps) => {
  return (
    <Body>
      {links?.map(({ name, to }) => (
        <StyledLink key={name} to={to}>
          {name}
        </StyledLink>
      ))}
      <CurPage>{curPage}</CurPage>
    </Body>
  );
};
