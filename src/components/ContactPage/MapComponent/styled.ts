import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  .leaflet-container {
    height: ${({ theme }) => theme.spaces.xxxx}px;
    z-index: 1;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    .leaflet-container {
      height: ${({ theme }) => theme.spaces.xxx}px;
    }
  }
`;
