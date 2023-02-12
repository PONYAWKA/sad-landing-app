import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.mmm}px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;
  font-weight: ${({ theme }) => theme.fonts.weightX};
  margin: 0;
`;
