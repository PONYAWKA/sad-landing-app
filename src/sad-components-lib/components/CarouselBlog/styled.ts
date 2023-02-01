import { Link } from "react-router-dom";
import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import rightArrow from "../../assets/rightArrow.png";
import { IStyledProps } from "./interfaces";

export const Body = styled.div`
  max-width: ${libTheme.spaces.maxContentWidth}px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-left: ${libTheme.spaces.m}px;
  @media (max-width: ${libTheme.endPoints.tablet}) {
    font-size: ${libTheme.spaces.m}px;
  }
`;

export const TitleButton = styled.img<IStyledProps>`
  background-color: ${libTheme.colors.tertiary};
  border-radius: ${libTheme.spaces.m}px;
  padding: ${libTheme.spaces.m}px;
  margin: 0 ${libTheme.spaces.m}px;
  cursor: pointer;
  ${({ disabled }) => (disabled ? "opacity: 0.4; cursor: not-allowed" : null)};
  @media (max-width: ${libTheme.endPoints.fold}) {
    padding: ${libTheme.spaces.ss}px;
    margin: 0 ${libTheme.spaces.ss}px;
  }
`;

export const TitleButtonContainer = styled.div``;

export const ElementContainer = styled.div`
  display: flex;
`;

export const Element = styled.div`
  margin: 0 ${libTheme.spaces.m}px;
  box-sizing: border-box;
  max-width: ${libTheme.spaces.xxx}px;
`;

export const ElementIcon = styled.img`
  max-width: ${libTheme.spaces.xxx}px;
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
