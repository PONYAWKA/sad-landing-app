import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
`;
export const BreadCrumbContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.sss}px;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.spaces.x}px 0 0 0;
  font-size: ${({ theme }) => theme.fonts.x}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin: ${({ theme }) => theme.spaces.m}px 0 0 0;
  }
`;
export const Text = styled.h4`
  color: ${({ theme }) => theme.colors.background};
  margin: ${({ theme }) => theme.spaces.x}px 0;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin: ${({ theme }) => theme.spaces.m}px 0;
  }
`;
