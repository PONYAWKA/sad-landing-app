import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: ${libTheme.spaces.xx}px;
  color: ${libTheme.colors.blue};
  font-weight: ${libTheme.fonts.weightX};
  @media (max-width: ${libTheme.endPoints.phone}px) {
    font-size: ${libTheme.spaces.x}px;
  }
`;

export const Text = styled.h2`
  width: 100%;
  text-align: center;
  color: ${libTheme.colors.gray};
  padding: 0 0 ${libTheme.spaces.m}px 0;
`;
