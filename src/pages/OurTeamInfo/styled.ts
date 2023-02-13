import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.x}px;
`;

export const PageHeaderContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.helperB3};
  padding: ${({ theme }) => theme.spaces.mmm}px 0;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    padding: ${({ theme }) => theme.spaces.mm}px 0;
    h1 {
      text-align: center;
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spaces.m}px;
  margin-top: ${({ theme }) => theme.spaces.mmm}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
    margin: 0 ${({ theme }) => theme.spaces.m}px;
    margin-top: ${({ theme }) => theme.spaces.m}px;
    width: auto;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Image = styled.img`
  align-self: center;
  max-width: ${({ theme }) => theme.spaces.xx}px;
  width: auto;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;
`;
export const Info = styled.h4`
  font-weight: normal;
`;

export const TextContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
`;
export const IconContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.ss}px;
`;

export const FormaTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;
export const FormaTitle = styled.h1`
  max-width: ${({ theme }) => theme.spaces.xxxx}px;
`;
export const EndPage = styled.div`
  height: ${({ theme }) => theme.spaces.x}px;
`;
