import styled from "styled-components";

export const Body = styled.div`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: fit-content;
    margin-bottom: ${({ theme }) => theme.spaces.m}px;
  }
  margin: 0 auto;
`;

export const Element = styled.div`
  padding: ${({ theme }) => theme.spaces.m}px;
  border-left: ${({ theme }) => theme.spaces.ii}px solid
    ${({ theme }) => theme.colors.helperB3};
  &:first-child {
    border-left: ${({ theme }) => theme.spaces.ii}px solid
      ${({ theme }) => theme.colors.blue} !important;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: fit-content;
  }
`;

export const Container = styled.a`
  text-decoration: none;
`;
