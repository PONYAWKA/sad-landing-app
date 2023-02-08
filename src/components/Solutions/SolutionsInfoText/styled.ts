import styled from "styled-components";

import circleIcon from "@/assets/icons/solutions/circle.svg";
export const Body = styled.div`
  width: 100%;
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
`;
export const Title = styled.h1`
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
`;

export const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.spaces.l}px;
  margin-bottom: ${({ theme }) => theme.spaces.x}px;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.mm}px;
`;

export const Container = styled.ul``;

export const Element = styled.li`
  list-style: none;
  list-style-image: url(${circleIcon});
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
  span {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const LinkMarker = styled.div``;
