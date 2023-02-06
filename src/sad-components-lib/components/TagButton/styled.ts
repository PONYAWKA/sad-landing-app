import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const STagButton = styled.button<{ checks: boolean }>`
  outline: none;
  border: 1px solid
    ${({ checks }) => (checks ? libTheme.colors.gray : libTheme.colors.white)};
  background-color: ${({ checks }) =>
    !checks ? libTheme.colors.blue : libTheme.colors.white};
  border-radius: ${libTheme.spaces.s}px;
  color: ${({ checks }) =>
    checks ? libTheme.colors.blue : libTheme.colors.white};
  font-weight: 800;
  margin: 0 ${libTheme.spaces.s}px;
  margin-bottom: ${libTheme.spaces.s}px;
  cursor: pointer;
`;
