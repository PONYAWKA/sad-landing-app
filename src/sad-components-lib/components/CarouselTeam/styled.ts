import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import { IStyledNav, IStyledProps } from "./interfaces";

export const Body = styled.section`
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
  justify-content: space-between;
  animation: slidIn 1s forwards;
  @keyframes slidIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Element = styled.div<IStyledNav>`
  cursor: ${({ to }) => (to ? "pointer" : "default")};
  box-shadow: ${libTheme.shadows.s};
  padding: ${libTheme.spaces.m}px;
  margin: 0 ${libTheme.spaces.sss}px;
`;

export const ElementIcon = styled.img`
  width: ${libTheme.spaces.mmmm}px;
  height: ${libTheme.spaces.mmmm}px;
`;

export const ElementTitle = styled.h3`
  padding: 0;
  margin: 0;
  width: fit-content;
`;

export const ElementPosition = styled.h6`
  padding: 0;
  margin: 0;
  width: fit-content;
  color: ${libTheme.colors.gray};
  font-weight: normal;
`;

export const ElementHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ElementHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-left: ${libTheme.spaces.m}px;
`;

export const ElementText = styled.h3`
  color: ${libTheme.colors.gray};
  font-weight: normal;
  font-family: "Open Sans";
`;
