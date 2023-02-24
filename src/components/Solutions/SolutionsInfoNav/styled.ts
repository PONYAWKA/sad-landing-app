import styled from "styled-components";

import { IStyledProps } from "./interfaces";

export const Body = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.spaces.x}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  margin: 0 auto;
`;

export const Element = styled.div<IStyledProps>`
  padding: ${({ theme }) => theme.spaces.m}px;
  border-left: ${({ theme }) => theme.spaces.s}px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : theme.colors.helperB3};

  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: fit-content;
  }
`;

export const Container = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
