import { Link } from "react-router-dom";
import styled from "styled-components";

import downArrow from "@/assets/icons/downArrow.png";

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
`;
interface IProps {
  visible: boolean;
}
export const MoreLinksBody = styled.div``;
export const ChildrenLinkContainer = styled.div<IProps>`
  display: ${({ visible }) => (visible ? "none" : "flex")} !important;
  position: absolute;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.s}px;
`;
export const ChildrenStyledLink = styled(Link)`
  text-decoration: none;
  margin: ${({ theme }) => theme.spaces.ss}px ${({ theme }) => theme.spaces.m}px;
  color: ${({ theme }) => theme.colors.gray};
`;
