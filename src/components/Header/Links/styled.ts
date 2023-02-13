import { Link } from "react-router-dom";
import styled from "styled-components";

import { styledProps } from "./interfaces";

export const Body = styled.nav``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 ${({ theme }) => theme.spaces.m}px;
  color: ${({ theme }) => theme.colors.gray};
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    padding: ${({ theme }) => theme.spaces.m}px 0;
    margin: 0 ${({ theme }) => theme.spaces.m}px;
    border-bottom: 1px solid #9497a1;
    width: 90%;
    border-bottom-width: 2px;
    font-weight: bold;
  }
`;

export const LinkContainer = styled.div<styledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    align-items: flex-start;
    flex-direction: column;
    top: 86px;
    left: 0px;
    background-color: white;
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%); display: none;"};
  }
`;
export const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces.m}px 0
    ${({ theme }) => theme.spaces.x}px 0;
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
  width: 100%;
`;
