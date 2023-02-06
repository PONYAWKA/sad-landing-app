import styled from "styled-components";

export const Body = styled.div`
  margin: 0 ${({ theme }) => theme.spaces.m}px;
  display: flex;
  flex-direction: column;
`;

export const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.m}px 0;
  & > button {
    width: 100%;
  }
`;

export const CrumbContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.ss}px;
`;
