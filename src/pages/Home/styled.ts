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

export const PowerContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spaces.mmmm}px 0;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
    margin: ${({ theme }) => theme.spaces.m}px 0;
    margin-left: ${({ theme }) => theme.spaces.m}px;
    justify-content: center;
  }
`;

export const PowerTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;
  max-width: ${({ theme }) => theme.spaces.l}px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.m}px;
    align-self: center;
  }
`;

export const PowerText = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  max-width: ${({ theme }) => theme.spaces.xxx}px;
  align-self: center;
`;

export const CircleButtonContainer = styled.div`
  position: absolute;
  height: ${({ theme }) => theme.spaces.xm}px;
  width: ${({ theme }) => theme.spaces.xm}px;
  right: 20%;
  top: ${({ theme }) => theme.tops.x}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    height: ${({ theme }) => theme.spaces.x}px;
    width: ${({ theme }) => theme.spaces.x}px;
    top: ${({ theme }) => theme.tops.s}px;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.phone}px) {
    top: ${({ theme }) => theme.tops.m}px;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.fold}px) {
    top: ${({ theme }) => theme.tops.x}px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    height: ${({ theme }) => theme.spaces.xx}px;
  }
`;

export const NewestText = styled.div`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  max-width: ${({ theme }) => theme.spaces.l}px;
  align-self: center;
  line-height: ${({ theme }) => theme.spaces.m}px;
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
`;

export const ButtonText = styled.div`
  margin: 0 ${({ theme }) => theme.spaces.sss}px;
`;

export const NewestTextContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Newest = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  justify-content: space-around;
  margin: ${({ theme }) => theme.spaces.mmmm}px 0;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;

    margin: ${({ theme }) => theme.spaces.m}px;
    max-width: ${({ theme }) => theme.spaces.l}px;
  }
`;
export const NewestContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const SolutionsContent = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SolutionsImage = styled.img`
  max-width: 50%;
  height: auto;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;
export const SolutionsImageMobile = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;

export const SolutionsTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;

export const SolutionsText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.spaces.l}px;
  margin: auto 0;
  margin-left: ${({ theme }) => theme.spaces.mm}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin-left: 0px;
  }
`;

export const SolutionsTextTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
`;
export const SolutionsTextText = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.mmm}px 0;
`;

export const PriceContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
