import { Link } from "react-router-dom";
import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  max-width: 100%;
  height: fit-content;
`;

export const Image = styled.img`
  max-width: ${libTheme.spaces.mmmm}px;
  max-height: ${libTheme.spaces.mmmm}px;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const SubTitle = styled.h5`
  color: ${libTheme.colors.gray};
  font-weight: normal;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${libTheme.colors.blue};
`;
