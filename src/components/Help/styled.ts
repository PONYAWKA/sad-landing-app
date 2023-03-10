import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Body = styled.div`
  margin: ${({ theme }) => theme.spaces.x}px ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    align-items: center;
  }
`;

export const Title = styled.h1``;

export const ButtonContainer = styled.div`
  align-self: center;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: flex;
    margin: 0;
    width: 100%;
  }
`;

export const ButtonContent = styled.div`
  padding: ${({ theme }) => theme.spaces.s}px ${({ theme }) => theme.spaces.m}px;
  width: 100%;
`;
export const Text = styled.h4`
  max-width: ${({ theme }) => theme.spaces.l}px;
  margin: ${({ theme }) => theme.spaces.m}px 0;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;
