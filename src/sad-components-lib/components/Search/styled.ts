import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: row;
`;

export const Field = styled.input`
  border: 1px solid ${libTheme.colors.gray};
  border-radius: ${libTheme.spaces.s}px;
  width: 100%;
  padding: ${libTheme.spaces.s}px;
  outline: none;
`;

export const ButtonContent = styled.div`
  padding: 0 ${libTheme.spaces.sss}px;
`;

export const ButtonContainer = styled.div`
  margin-left: -${libTheme.spaces.ss}px;
`;
