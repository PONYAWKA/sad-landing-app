import styled from "styled-components";

export const Body = styled.section``;
export const Image = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.spaces.ss}px;
`;
export const InfoElement = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: ${({ theme }) => theme.spaces.m}px;
`;
export const InfoText = styled.h5`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
  margin-right: ${({ theme }) => theme.spaces.s}px;
`;
export const InfoIcon = styled.img`
  max-width: ${({ theme }) => theme.spaces.ss}px;
  max-height: ${({ theme }) => theme.spaces.ss}px;
  margin-right: ${({ theme }) => theme.spaces.ss}px;
`;

export const Title = styled.h1``;
export const Text = styled.h4`
  color: ${({ theme }) => theme.colors.gray};
`;
export const TagItem = styled.div``;
