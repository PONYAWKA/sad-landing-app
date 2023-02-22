import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import { IStyled } from "./interfaces";

export const Body = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  border: ${libTheme.spaces.i}px solid ${libTheme.colors.gray};
  border-radius: ${libTheme.spaces.s}px;
  padding: ${libTheme.spaces.m}px;
  margin-bottom: ${libTheme.spaces.m}px;
`;

export const Text = styled.h3`
  color: ${libTheme.colors.gray};
  font-weight: normal;
  margin-top: ${libTheme.spaces.ss}px;
`;

export const Title = styled.h2<IStyled>`
  color: ${({ isOpen }) =>
    isOpen ? libTheme.colors.blue : libTheme.colors.black};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
