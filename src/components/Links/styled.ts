import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.div``;

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
interface styledProps {
  isOpen?: boolean;
}

export const LinkContainer = styled.div<styledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    position: absolute;
    align-items: flex-start;
    flex-direction: column;
    top: 86px;
    left: 0px;
    background-color: white;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%); display: none;"};
  }
`;
export const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.spaces.mm}px;
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
  width: 100%;
`;
