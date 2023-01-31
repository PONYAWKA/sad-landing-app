import styled from "styled-components";

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
    align-items: center;
  }
`;
