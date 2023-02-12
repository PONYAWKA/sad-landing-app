import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.mmm}px;
  background-color: ${({ theme }) => theme.colors.helperB3};
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: grid;
  grid-template-columns: 2fr 4fr;
  margin-top: ${({ theme }) => theme.spaces.x}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spaces.mm}px;
  }
`;
export const Titles = styled.div``;
export const TextContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HederLine = styled.div`
  position: absolute;
  top: 0;
`;
