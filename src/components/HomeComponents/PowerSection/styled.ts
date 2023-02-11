import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    max-width: ${({ theme }) => theme.spaces.l};
  }
`;

export const PowerContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spaces.mmmm}px 0;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
    margin: ${({ theme }) => theme.spaces.m}px 0;
    margin-left: ${({ theme }) => theme.spaces.m}px;
    justify-content: center;
  }
`;

export const PowerTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;
  max-width: ${({ theme }) => theme.spaces.l}px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.m}px;
    align-self: center;
  }
`;

export const PowerText = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  max-width: ${({ theme }) => theme.spaces.xxx}px;
  align-self: center;
`;

export const CircleButtonContainer = styled.div`
  position: absolute;
  height: ${({ theme }) => theme.spaces.xm}px;
  width: ${({ theme }) => theme.spaces.xm}px;
  right: 20%;
  top: ${({ theme }) => theme.tops.x}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    height: ${({ theme }) => theme.spaces.x}px;
    width: ${({ theme }) => theme.spaces.x}px;
    top: ${({ theme }) => theme.tops.s}px;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.phone}px) {
    top: ${({ theme }) => theme.tops.m}px;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.fold}px) {
    top: ${({ theme }) => theme.tops.x}px;
  }
`;
