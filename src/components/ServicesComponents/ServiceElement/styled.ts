import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.l}px;
`;

export const Icon = styled.img`
  max-width: ${({ theme }) => theme.spaces.mmmm}px;
`;

export const Title = styled.h2`
  margin: 0;
`;
export const SubTitle = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
