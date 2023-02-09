import styled from "styled-components";

import blueOk from "@/assets/icons/servicesInfo/bOk.svg";

import { IText } from "./interfaces";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.spaces.x}px;
  gap: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  &:last-child {
    grid-template-columns: 1fr 1fr;
    @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
      margin: ${({ theme }) => theme.spaces.x}px
        ${({ theme }) => theme.spaces.m}px;
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
    margin: 0 ${({ theme }) => theme.spaces.m}px;
  }
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

export const Text = styled.h2<IText>`
  margin: ${({ theme }) => theme.spaces.sss}px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
`;

export const Image = styled.img`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: 100%;
  }
`;

export const LittleImage = styled.img`
  width: 100%;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
  }
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

export const FootContainer = styled.div`
  padding: 0 0 ${({ theme }) => theme.spaces.x}px 0;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    padding: 0;
  }
`;

export const Contact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Line = styled.div`
  width: 10%;
  height: 2px;
  border-top: ${({ theme }) => theme.spaces.s}px solid
    ${({ theme }) => theme.colors.primary};
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.div`
  margin-top: ${({ theme }) => theme.spaces.sss}px;
  display: flex;
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
`;

export const ImageContainer = styled.div`
  margin-right: ${({ theme }) => theme.spaces.sss}px;
`;
