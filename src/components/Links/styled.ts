import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
  color: ${({ theme }) => theme.colors.gray};
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    display: none;
  }
`;
