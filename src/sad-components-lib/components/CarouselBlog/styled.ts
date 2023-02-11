import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import { IStyledProps } from "./interfaces";

export const Body = styled.div`
  max-width: ${libTheme.spaces.maxContentWidth}px;
  width: 100%;
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
  width: 100%;
  justify-content: space-around;
`;
