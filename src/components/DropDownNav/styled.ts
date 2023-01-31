import { Link } from "react-router-dom";
import styled from "styled-components";

import downArrow from "@/assets/icons/downArrow.png";
import rightArrow from "@/assets/icons/rightArrow.png";

export const MoreLinks = styled.div`
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.spaces.m}px;
  color: ${({ theme }) => theme.colors.gray};
  &::after {
    position: absolute;
    content: " ";
    width: ${({ theme }) => theme.spaces.ss}px;
    margin-top: ${({ theme }) => theme.spaces.s}px;
    margin-left: ${({ theme }) => theme.spaces.s}px;
    height: ${({ theme }) => theme.spaces.so}px;
    background-image: url(${downArrow});
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    padding: 0;
    font-weight: bold;
  }
`;
interface IProps {
  visible: boolean;
}
export const MoreLinksBody = styled.div`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    padding: ${({ theme }) => theme.spaces.m}px 0;
    margin: 0 ${({ theme }) => theme.spaces.m}px;
    border-bottom: 1px solid #9497a1;
    width: 90%;
    border-bottom-width: 2px;
  }
`;
export const ChildrenLinkContainer = styled.div<IProps>`
  display: ${({ visible }) => (!visible ? "none" : "flex")} !important;
  position: absolute;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.s}px;
  filter: drop-shadow(0px 2px 6px rgba(0, 43, 78, 0.15))
    drop-shadow(0px 1px 2px rgba(0, 43, 78, 0.3));
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    position: static;
    filter: none;
  }
`;
export const ChildrenStyledLink = styled(Link)`
  text-decoration: none;
  margin: ${({ theme }) => theme.spaces.ss}px
    ${({ theme }) => theme.spaces.mm}px;
  color: ${({ theme }) => theme.colors.gray};
  width: ${({ theme }) => theme.spaces.xx}px;
  &::after {
    content: " ";
    position: absolute;
    background-image: url(${rightArrow});
    background-repeat: no-repeat;
    width: ${({ theme }) => theme.spaces.m}px;
    height: ${({ theme }) => theme.spaces.ss}px;
    margin-top: ${({ theme }) => theme.spaces.s}px;
    margin-left: ${({ theme }) => theme.spaces.s}px;
    opacity: 0;
  }
  &:hover {
    &::after {
      transition: opacity 0.1s;
      opacity: 1;
    }
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}) {
    &::after {
      transition: none;
      opacity: 1;
    }
    font-weight: bold;
  }
`;
