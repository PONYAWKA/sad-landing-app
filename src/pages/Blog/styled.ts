import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogContainer = styled.div`
  display: grid;
  align-self: center;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tabletL}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;
