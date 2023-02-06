import styled from "styled-components";

export const Body = styled.section`
  background-color: ${({ theme }) => theme.colors.helperB3};
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.mm}px;
  justify-content: center;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: flex;
`;

export const Container = styled.div`
  flex: 1;
  margin: ${({ theme }) => theme.spaces.mmm}px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-weight: 800;
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spaces.mmm}px;
`;

export const Info = styled.h3`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spaces.mm}px;
`;
export const InfoText = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;
