import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import { IStyledProps } from "./interfaces";

export const STagButton = styled.button<IStyledProps>`
  outline: none;
  border: 1px solid
    ${({ checks }) => (checks ? libTheme.colors.gray : libTheme.colors.white)};
  background-color: ${({ checks }) =>
    !checks ? libTheme.colors.blue : libTheme.colors.white};
  border-radius: ${libTheme.spaces.s}px;
  color: ${({ checks }) =>
    checks ? libTheme.colors.blue : libTheme.colors.white};
  font-weight: ${libTheme.fonts.weightX};
  margin: 0 ${libTheme.spaces.s}px;
  margin-bottom: ${libTheme.spaces.s}px;
  cursor: pointer;
`;
