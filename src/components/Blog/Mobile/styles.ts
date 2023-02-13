import styled from "styled-components";

export const Body = styled.main`
  margin: 0 ${({ theme }) => theme.spaces.m}px;
  display: flex;
  flex-direction: column;
`;

export const BlogsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.section`
  display: flex;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.m}px 0;
  & > button {
    width: 100%;
  }
`;

export const CrumbContainer = styled.section`
  margin-top: ${({ theme }) => theme.spaces.ss}px;
`;
