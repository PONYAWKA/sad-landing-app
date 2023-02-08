import styled from "styled-components";

export const IconsContainer = styled.div`
  align-self: center;
  display: flex;
  overflow: hidden;
`;
export const Icon = styled.img`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.xm}px;
  height: auto;
`;
export const Link = styled.a`
  text-decoration: none;
  margin-right: ${({ theme }) => theme.spaces.s}px;
`;
