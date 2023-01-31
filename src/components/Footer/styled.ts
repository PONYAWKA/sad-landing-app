import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  align-self: center;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  width: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
`;
export const SubscribeContainer = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
  }
`;
export const TextBlock = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spaces.mmmm}px 0;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    text-align: center;
    padding: ${({ theme }) => theme.spaces.mm}px 0
      ${({ theme }) => theme.spaces.m}px 0;
  }
`;

export const MailContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin: ${({ theme }) => theme.spaces.m}px;
  }
`;

export const TitleText = styled.h1``;
export const SubTitleText = styled.h4`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.helperB2};
  margin: ${({ theme }) => theme.spaces.ss}px 0;
  margin-bottom: ${({ theme }) => theme.spaces.mmmm}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: 95%;
    align-self: center;
  }
`;

export const EndPageLine = styled.div`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.helperB2};
  margin: ${({ theme }) => theme.spaces.ss}px 0;
  margin-bottom: ${({ theme }) => theme.spaces.s}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: 95%;
    align-self: center;
  }
`;

export const Description = styled.div`
  flex: 1;
`;

export const DescriptionText = styled.h3`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
  max-width: ${({ theme }) => theme.spaces.xxx}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
    align-self: center;
  }
`;

export const MediaContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;

export const EndPageMediaContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    display: none;
  }
`;
export const Image = styled.img``;

export const EndPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EndPageTitle = styled.h3`
  color: ${({ theme }) => theme.colors.helperB2};
  font-size: ${({ theme }) => theme.fonts.s}px;
  margin-left: ${({ theme }) => theme.spaces.m}px;
`;

export const EndPageLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.helperB2};
  font-size: ${({ theme }) => theme.fonts.s}px;
  margin: 0 ${({ theme }) => theme.spaces.ss}px;
`;

export const LinkContainer = styled.div``;
