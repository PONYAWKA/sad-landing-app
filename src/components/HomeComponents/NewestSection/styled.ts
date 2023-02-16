import styled from "styled-components";

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
export const NewestContent = styled.section`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;
  max-width: ${({ theme }) => theme.spaces.l}px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:nth-child(2) {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.m}px;
    align-self: center;
  }
`;
