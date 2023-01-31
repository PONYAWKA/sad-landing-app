import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: ${libTheme.spaces.mm}px;
`;
export const MediaContainer = styled.div``;
export const MediaItem = styled.img`
  padding: ${libTheme.spaces.s}px;
  cursor: pointer;
`;

export const ChildrenContainer = styled.div`
  font-weight: bold;
`;
