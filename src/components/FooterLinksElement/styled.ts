import { Link } from "react-router-dom";
import styled from "styled-components";

import { IStyledProps } from "./interface";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.helperB2};
  }
  width: 90%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spaces.sss}px;
`;

export const LinkContainer = styled.div<IStyledProps>`
  flex-direction: column;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

export const LinkTitle = styled.h2`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    cursor: pointer;
  }
`;
