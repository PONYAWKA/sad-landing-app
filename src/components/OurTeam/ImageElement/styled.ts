import styled from "styled-components";

export const Body = styled.div`
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    &:nth-child(3n - 1) {
      transform: translateY(-120px);
    }
  }
`;

export const ImagWrapper = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Name = styled.h3``;

export const Position = styled.h4``;

export const TextContainer = styled.div`
  position: absolute;
  margin-top: -${({ theme }) => theme.spaces.mmmm}px;
  margin-left: 2%;
  color: ${({ theme }) => theme.colors.white};
`;
