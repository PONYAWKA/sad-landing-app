import styled from "styled-components";

export const Body = styled.div`
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    &:nth-child(3n - 1) {
      transform: translateY(-120px);
    }
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin-bottom: ${({ theme }) => theme.spaces.m}px;
  }
`;

export const ImagWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    max-height: ${({ theme }) => theme.spaces.xxxx}px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.spaces.m}px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Name = styled.h3``;

export const Position = styled.h4`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin-top: 0;
    position: relative;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  margin-top: -${({ theme }) => theme.spaces.mmmm}px;
  margin-left: 2%;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin-top: 0;
    position: relative;
    color: ${({ theme }) => theme.colors.black};
  }
`;
