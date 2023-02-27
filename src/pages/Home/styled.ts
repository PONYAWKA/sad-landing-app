import styled from "styled-components";

export const Body = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    max-width: ${({ theme }) => theme.spaces.l};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  min-width: ${({ theme }) => theme.spaces.l}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    height: ${({ theme }) => theme.spaces.xx}px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  align-self: center;
  max-width: ${({ theme }) => theme.spaces.hd}px;
`;
export const CarouselContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PriceContainer = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
