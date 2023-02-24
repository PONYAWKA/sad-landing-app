import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const CrumbsContainer = styled.div`
  margin: ${({ theme }) => theme.spaces.m}px;
  width: 100%;

  & > div {
    margin: 0 0 0 ${({ theme }) => theme.spaces.m}px;
  }
`;

export const SuccessContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.mm}px;
  background-color: ${({ theme }) => theme.colors.helperB3};
`;
