import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.spaces.xx}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weightX};
  @media (max-width: ${({ theme }) => theme.endPoints.phone}px) {
    font-size: ${({ theme }) => theme.spaces.x}px;
  }
`;

export const Text = styled.h2`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0 0 ${({ theme }) => theme.spaces.m}px 0;
`;
