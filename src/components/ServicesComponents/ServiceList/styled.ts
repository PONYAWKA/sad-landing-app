import styled from "styled-components";

export const Body = styled.section`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.mm}px;
`;

export const Grid = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.spaces.mm}px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;
