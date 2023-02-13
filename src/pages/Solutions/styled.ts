import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.m}px;
`;

export const Content = styled.section`
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;

export const TestimonialsContainer = styled.section`
  margin: ${({ theme }) => theme.spaces.x}px 0;
`;
