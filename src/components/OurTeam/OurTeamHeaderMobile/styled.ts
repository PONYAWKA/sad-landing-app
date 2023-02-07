import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spaces.mm}px;
  margin-bottom: ${({ theme }) => theme.spaces.mm}px;
`;

export const Image = styled.img``;

export const Text = styled.h2`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.spaces.m}px ${({ theme }) => theme.spaces.m}px;
`;
