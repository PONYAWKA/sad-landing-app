import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.spaces.x}px ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
    max-width: ${({ theme }) => theme.spaces.l}px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
  }
`;

export const Text = styled.div`
  align-self: center;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin: 0 ${({ theme }) => theme.spaces.sss}px;
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.weightX};
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.xxx}px;
`;

export const SubTitle = styled.h3`
  max-width: ${({ theme }) => theme.spaces.xxx}px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
`;

export const CardContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    overflow-y: hidden;
    height: fit-content;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.fold}px) {
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
`;

export const CardElement = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.s}px;
  padding: ${({ theme }) => theme.spaces.m}px;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  margin: 0 ${({ theme }) => theme.spaces.ss}px;
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    &:nth-child(2n-1) {
      margin-bottom: 40px;
    }
    &:nth-child(2n) {
      margin-top: 40px;
    }
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin: ${({ theme }) => theme.spaces.ss}px;
    & > div {
      width: ${({ theme }) => theme.spaces.xx}px;
      height: ${({ theme }) => theme.spaces.xx}px;
    }
  }
`;
