import { Link } from "react-router-dom";
import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  display: flex;
  width: fit-content;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${libTheme.fonts.s}px;
  color: ${libTheme.colors.gray};
  padding-right: ${libTheme.spaces.s}px;
  margin-right: ${libTheme.spaces.s}px;
  border-right: 1px solid ${libTheme.colors.gray};
`;

export const CurPage = styled.div`
  font-size: ${libTheme.fonts.s}px;
  font-weight: bold;
`;
