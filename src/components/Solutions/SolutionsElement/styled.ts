import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.l}px;
  margin-bottom: ${({ theme }) => theme.spaces.mm}px;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: ${({ theme }) => theme.spaces.s}px;
`;

export const Icon = styled.img`
  max-width: ${({ theme }) => theme.spaces.mmmm}px;
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.spaces.m}px 0;
`;
export const SubTitle = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Content = styled.div`
  margin: ${({ theme }) => theme.spaces.m}px;
`;
