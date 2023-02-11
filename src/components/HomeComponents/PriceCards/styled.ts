import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.endPoints.tabletM}px) {
    flex-direction: row;
    overflow: scroll;
    & > div {
      margin-left: ${({ theme }) => theme.spaces.m}px;
    }
  }
`;
export const Content = styled.section`
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.x}px 20px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;
  font-weight: 800;
  margin-left: ${({ theme }) => theme.spaces.m}px;
`;
