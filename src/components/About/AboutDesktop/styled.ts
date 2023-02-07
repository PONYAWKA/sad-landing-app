import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.helperB3};
`;
