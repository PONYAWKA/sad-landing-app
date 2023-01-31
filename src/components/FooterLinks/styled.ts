import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    flex-direction: column;
  }
`;
