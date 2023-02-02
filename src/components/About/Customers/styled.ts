import styled from "styled-components";

export const Body = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  align-items: center;
`;

export const TextContainer = styled.div`
  max-width: ${({ theme }) => theme.spaces.l}px;
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;
  font-weight: 800;
`;
export const Text = styled.h3`
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spaces.x}px;
`;
