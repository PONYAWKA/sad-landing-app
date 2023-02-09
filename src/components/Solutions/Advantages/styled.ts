import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const TextContent = styled.div`
  margin: auto 0;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin-left: ${({ theme }) => theme.spaces.m}px;
  }
`;

export const Title = styled.h1``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  align-self: center;
`;

export const AdvantageElement = styled.div``;

export const AdvantagesContainer = styled.div`
  margin: ${({ theme }) => theme.spaces.m}px 0;
`;
