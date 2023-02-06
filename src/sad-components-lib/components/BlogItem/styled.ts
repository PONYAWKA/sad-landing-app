import { Link } from "react-router-dom";
import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import rightArrow from "../../assets/images/rightArrow.png";

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${libTheme.spaces.m}px;
  box-sizing: border-box;
  max-width: ${libTheme.spaces.xxx}px;
`;

export const ElementIcon = styled.img`
  max-width: ${libTheme.spaces.xxx}px;
  height: auto;
  @media (max-width: ${libTheme.endPoints.fold}) {
    max-width: ${({ theme }) => theme.spaces.xx}px;
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
    margin-top: ${libTheme.spaces.s}px;
    margin-left: ${libTheme.spaces.ss}px;
  }
`;
