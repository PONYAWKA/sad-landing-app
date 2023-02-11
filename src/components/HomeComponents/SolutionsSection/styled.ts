import styled from "styled-components";

export const SolutionsContent = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SolutionsImage = styled.img`
  max-width: 50%;
  height: auto;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;

export const SolutionsImageMobile = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;

export const SolutionsTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;

export const SolutionsText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.spaces.l}px;
  margin: auto 0;
  margin-left: ${({ theme }) => theme.spaces.mm}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin-left: 0px;
  }
`;

export const SolutionsTextTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
`;

export const SolutionsTextText = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ButtonText = styled.div`
  margin: 0 ${({ theme }) => theme.spaces.sss}px;
`;
