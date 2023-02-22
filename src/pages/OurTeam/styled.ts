import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    max-width: ${({ theme }) => theme.spaces.l}px;
    margin: 0 ${({ theme }) => theme.spaces.sss}px;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 ${({ theme }) => theme.spaces.m}px;
  margin-top: ${({ theme }) => theme.spaces.xx}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin-top: 0;
  }
`;

export const DarkHeaderContainer = styled.div`
  width: 100%;
`;
