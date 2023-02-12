import styled from "styled-components";

export const Body = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.spaces.x}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: fit-content;
    position: static;
    margin-bottom: ${({ theme }) => theme.spaces.m}px;
  }
  margin: 0 auto;
`;

export const Element = styled.div`
  padding: ${({ theme }) => theme.spaces.m}px;
  border-left: ${({ theme }) => theme.spaces.s}px solid
    ${({ theme }) => theme.colors.helperB3};

  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: fit-content;
  }
`;

export const Container = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
