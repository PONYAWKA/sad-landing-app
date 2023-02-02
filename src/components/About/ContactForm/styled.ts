import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.xxx}px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.sss}px;
  margin: auto;
`;

export const Container = styled.div`
  margin: ${({ theme }) => theme.spaces.mm}px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.m}px;
  font-weight: bold;
`;

export const FieldName = styled.div`
  font-size: ${({ theme }) => theme.spaces.sss}px;
  color: ${({ theme }) => theme.colors.gray};
`;
export const Field = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding-bottom: ${({ theme }) => theme.spaces.ss}px;
  margin-bottom: ${({ theme }) => theme.spaces.ss}px;
  outline: none;
  width: 100%;
  font-weight: bold;
`;

export const StyledForm = styled.form``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: ${({ theme }) => theme.spaces.mm}px;
  justify-content: flex-end;
`;

export const ButtonText = styled.div`
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;
export const ErrorText = styled.h5`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spaces.ss}px;
  margin-top: -${({ theme }) => theme.spaces.ss}px;
  color: ${({ theme }) => theme.colors.red};
`;
