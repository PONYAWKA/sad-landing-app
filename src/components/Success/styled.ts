import styled from "styled-components";

import { IStyledProps } from "./interfaces";

export const SuccessContent = styled.section`
  margin: ${({ theme }) => theme.spaces.x}px ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const SuccessBody = styled.div<IStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ center }) => (center ? "center" : "")};
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
    align-self: center;
  }
`;
export const SuccessTitle = styled.h2`
  text-align: center;
  font-weight: ${({ theme }) => theme.fonts.weightX};
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
`;
export const SuccessMetric = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    justify-content: center;
  }
`;
export const SuccessMetricElement = styled.div`
  margin: 0 ${({ theme }) => theme.spaces.sss}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SuccessMetricTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.x}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weightX};
  @media (max-width: ${({ theme }) => theme.endPoints.phone}px) {
    font-size: ${({ theme }) => theme.fonts.m}px;
  }
`;
export const SuccessMetricSubTitle = styled.h6`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
  margin: 0;
`;
export const SuccessText = styled.h4`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
  max-width: ${({ theme }) => theme.spaces.l}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    align-self: center;
    text-align: center;
  }
`;
