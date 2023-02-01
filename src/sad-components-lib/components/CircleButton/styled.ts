import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: ${libTheme.spaces.xm};
  border-radius: 50%;
  background-color: ${libTheme.colors.blue};
  border: ${libTheme.spaces.s}px solid ${libTheme.colors.white};
  display: flex;
  justify-content: center;
  z-index: -1;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.5px solid ${libTheme.colors.white};
  color: ${libTheme.colors.white};
  &:hover {
    background-color: ${libTheme.colors.hoverBlue};
  }
`;
