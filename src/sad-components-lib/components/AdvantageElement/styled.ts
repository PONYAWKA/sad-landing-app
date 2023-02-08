import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  margin-bottom: ${libTheme.spaces.m}px;
`;

export const Image = styled.img`
  margin-right: ${libTheme.spaces.m}px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${libTheme.spaces.m}px;
`;

export const Title = styled.h3``;

export const Text = styled.h4`
  color: ${libTheme.colors.gray};
  font-weight: normal;
  line-height: ${libTheme.spaces.m}px;
`;
