import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spaces.m}px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    max-width: ${({ theme }) => theme.spaces.l}px;
    margin: 0 ${({ theme }) => theme.spaces.sss}px;
  }
`;

export const FormaContainer = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xxx}px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.x}px;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Contacts = styled.div``;

export const ContactsCard = styled.div`
  margin-right: ${({ theme }) => theme.spaces.mm}px;
  margin-bottom: ${({ theme }) => theme.spaces.mm}px;
`;

export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spaces.sss}px;
`;

export const Container = styled.div`
  display: flex;
`;

export const ImageTitle = styled.h5``;

export const Description = styled.h5`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;
