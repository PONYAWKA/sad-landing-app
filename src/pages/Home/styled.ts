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
  max-width: 100%;
  height: auto;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    height: ${({ theme }) => theme.spaces.xx}px;
  }
`;
export const CarouselContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.mmm}px 0;
`;

export const PriceContainer = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
