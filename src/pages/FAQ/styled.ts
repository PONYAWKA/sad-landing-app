import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const CrumbContainer = styled.section`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
`;

export const FAQContent = styled.section`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: 95%;
    margin: 0 ${({ theme }) => theme.spaces.m}px;
    margin-top: ${({ theme }) => theme.spaces.m}px;
  }
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  margin-bottom: ${({ theme }) => theme.spaces.x}px;
`;
export const SecondPageHeaderContainer = styled.section`
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;
