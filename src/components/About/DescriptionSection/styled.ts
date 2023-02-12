import styled from "styled-components";

import { IStyled } from "./interfaces";

export const Body = styled.section<IStyled>`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  margin: ${({ theme }) => theme.spaces.mm}px 0;
  display: flex;
  justify-content: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.spaces.mm}px;
  margin: 0;
`;

export const Text = styled.h5`
  color: ${({ theme }) => theme.colors.gray};
  max-width: ${({ theme }) => theme.spaces.xxxx}px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.l}px;
  height: auto;
`;
