import styled from "styled-components";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.helperB3};
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  padding: ${({ theme }) => theme.spaces.m}px 0px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin: 0 ${({ theme }) => theme.spaces.m}px;
  }
`;

export const Image = styled.img``;

export const ButtonTitle = styled.div`
  margin-left: ${({ theme }) => theme.spaces.s}px;
`;
export const ButtonContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;
export const BurgerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;
