import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.helperB3};
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  padding: ${({ theme }) => theme.spaces.m}px 0px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 20px;
  color: #9497a1;
`;
