import styled from "styled-components";

export const Body = styled.main`
  width: 100wv;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;
