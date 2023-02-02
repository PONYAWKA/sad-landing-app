import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h6`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0;
`;
export const Text = styled.h3`
  font-size: ${({ theme }) => theme.fonts.x}px;
  font-weight: bold;
  margin: ${({ theme }) => theme.spaces.m}px 0;
`;

export const SubText = styled.h4`
  color: ${({ theme }) => theme.colors.gray};
  max-width: ${({ theme }) => theme.spaces.z}px;
  margin: 0;
  text-align: center;
`;
