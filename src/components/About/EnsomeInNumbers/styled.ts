import styled from "styled-components";

export const Body = styled.section`
  background-color: ${({ theme }) => theme.colors.helperB3};
  width: 100%;
  margin: ${({ theme }) => theme.spaces.mm}px 0;
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;
  margin-top: ${({ theme }) => theme.spaces.mmm}px;
  font-weight: 800;
`;

export const SuccessMetric = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SuccessMetricElement = styled.div`
  padding: 0 ${({ theme }) => theme.spaces.sss}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
  &:first-child {
    border: none;
  }
`;
export const SuccessMetricTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.x}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  @media (max-width: ${({ theme }) => theme.endPoints.phone}px) {
    font-size: ${({ theme }) => theme.fonts.m}px;
  }
`;
export const SuccessMetricSubTitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.x}px;
`;
