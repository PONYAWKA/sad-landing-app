import styled from "styled-components";

export const Body = styled.main`
  width: 100wv;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;

export const CrumbContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
`;
