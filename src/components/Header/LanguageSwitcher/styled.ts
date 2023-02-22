import styled from "styled-components";

export const Body = styled.div`
  padding: 0 ${({ theme }) => theme.spaces.ss}px;
`;

export const Selector = styled.div`
  width: ${({ theme }) => theme.spaces.mmm}px;
  cursor: pointer;
  border: 0;
  outline: none;
  margin: ${({ theme }) => theme.spaces.s}px;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.helperB2};
  border-radius: ${({ theme }) => theme.spaces.s}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Option = styled.div`
  border: 0;
  color: ${({ theme }) => theme.colors.gray};
  outline: none;
  cursor: pointer;
  margin: ${({ theme }) => theme.spaces.s}px;
`;
