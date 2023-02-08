import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
`;

export const TestimonialsContainer = styled.div`
  margin: ${({ theme }) => theme.spaces.x}px 0;
`;
