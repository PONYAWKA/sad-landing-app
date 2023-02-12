import styled from "styled-components";

export const Body = styled.div`
  max-width: 95vw;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.s};
  border-radius: ${({ theme }) => theme.spaces.s}px;
  margin-top: ${({ theme }) => theme.spaces.m}px;
`;

export const Image = styled.img`
  width: 100%;
  border: 0;
`;

export const Info = styled.h4`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Title = styled.h2``;

export const TagsContainer = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spaces.m}px;
`;
