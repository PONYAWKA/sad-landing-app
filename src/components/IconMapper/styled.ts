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
