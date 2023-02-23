import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import { IStyledProps, IWindow } from "./interfaces";

export const Body = styled.section`
  max-width: ${libTheme.spaces.maxContentWidth}px;
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const TitleButtonContainer = styled.div`
  display: flex;
`;

export const ElementContainer = styled.div<IWindow>`
  transition: "translate";
  transform: translateX(${({ maxWidth }) => maxWidth}px);
  transition-property: "transform";
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Window = styled.div<IWindow>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  overflow: hidden;
  align-self: center;
`;

export const WindowElementContainer = styled.div``;
