import { Link } from "react-router-dom";
import styled from "styled-components";

import rightArrow from "@/sad-components-lib/assets/images/rightArrow.png";
import { libTheme } from "@/sad-components-lib/theme";

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: ${libTheme.spaces.xxm}px;
`;

export const ElementIcon = styled.img`
  width: ${libTheme.spaces.xxm}px;
  height: auto;
  @media (max-width: ${libTheme.endPoints.fold}) {
    align-self: center;
  }
`;

export const ElementTitle = styled.h3``;

export const ElementPosition = styled.h6``;

export const ElementHeader = styled.div``;

export const ElementHeaderContainer = styled.div``;

export const ElementText = styled.h5`
  font-weight: normal;
  color: ${libTheme.colors.gray};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${libTheme.colors.blue};
  &::after {
    content: " ";
    position: absolute;
    background-image: url(${rightArrow});
    background-repeat: no-repeat;
    width: ${libTheme.spaces.m}px;
    height: ${libTheme.spaces.ss}px;
    margin-top: ${libTheme.spaces.soo}px;
    margin-left: ${libTheme.spaces.ss}px;
  }
`;
