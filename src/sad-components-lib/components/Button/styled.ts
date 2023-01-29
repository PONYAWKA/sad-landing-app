import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.button`
  border: 0;
  margin: 0;
  padding: ${libTheme.spaces.ss}px;
  background-color: ${libTheme.colors.blue};
  border-radius: ${libTheme.spaces.ss}px;
  color: ${libTheme.colors.white};
  box-shadow: 0px ${libTheme.spaces.s}px ${libTheme.spaces.m}px
    rgba(24, 92, 255, 0.18);
`;
