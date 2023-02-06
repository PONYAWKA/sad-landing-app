import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  padding: ${libTheme.spaces.m}px 0;
  border-bottom: 1px solid ${libTheme.colors.black};
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  &:hover {
    color: ${libTheme.colors.blue};
  }
  & > svg {
    fill: ${libTheme.colors.black};
  }
  &:hover {
    & > svg {
      fill: ${libTheme.colors.blue};
    }
  }
`;

export const Text = styled.div``;
