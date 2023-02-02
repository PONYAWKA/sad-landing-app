import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.section`
  display: flex;
  justify-content: center;
  max-width: ${libTheme.spaces.maxContentWidth}px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${libTheme.spaces.mmm}px;
`;

export const Title = styled.h1`
  font-size: ${libTheme.fonts.x}px;
  font-weight: 800;
  margin: 0;
`;
