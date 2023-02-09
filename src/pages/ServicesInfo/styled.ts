import styled from "styled-components";

import blueOk from "@/assets/icons/servicesInfo/bOk.svg";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.spaces.x}px;
  width: 100%;
  gap: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightSections = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;

export const ArticleContainer = styled.div``;

export const Title = styled.h1`
  margin: ${({ theme }) => theme.spaces.sss}px 0;
`;

export const Text = styled.h2`
  margin: ${({ theme }) => theme.spaces.sss}px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
`;

export const Image = styled.img``;

export const LittleImage = styled.img`
  width: 100%;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const List = styled.ul`
  margin: 0;
`;

export const ListElement = styled.li`
  margin-bottom: ${({ theme }) => theme.spaces.sss}px;
  list-style-image: url(${blueOk});
`;

export const ServicesContainer = styled.div``;
export const SearchContainer = styled.div``;
