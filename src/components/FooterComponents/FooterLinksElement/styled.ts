import { Link } from "react-router-dom";
import styled from "styled-components";

import downArrow from "@/assets/icons/header/downArrow.png";

import { IStyledProps } from "./interface";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.helperB2};
  }
  width: 95%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0;
  margin: 0;
  margin: ${({ theme }) => theme.spaces.sss}px 0 0 0;
`;

export const LinkContainer = styled.div<IStyledProps>`
  flex-direction: column;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

export const LinkTitle = styled.h2`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    cursor: pointer;
    &::after {
      content: " ";
      position: absolute;
      background-image: url(${downArrow});
      background-repeat: no-repeat;
      width: ${({ theme }) => theme.spaces.m}px;
      height: ${({ theme }) => theme.spaces.ss}px;
      margin-top: ${({ theme }) => theme.spaces.sss}px;
      right: 10%;
    }
  }
`;

export const AltLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0;
  margin: 0;
  margin: ${({ theme }) => theme.spaces.sss}px 0 0 0;
`;
