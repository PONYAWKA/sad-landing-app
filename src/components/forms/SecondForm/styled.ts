import styled from "styled-components";

import { IError } from "./interfaces";

export const Body = styled.div<IError>`
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces.mmm}px;

  input {
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.gray)};
  }
`;

export const InputField = styled.input<IError>`
  &::placeholder {
    margin-top: 10px;
  }
  background-color: transparent;
  width: 100%;
  height: ${({ theme }) => theme.spaces.mm}px;
  border-radius: ${({ theme }) => theme.spaces.s}px;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.gray)};
  outline: none;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
  padding-left: ${({ theme }) => theme.spaces.sss}px;
`;

export const InputContainer = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.endPoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const StyledForma = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BigInputField = styled.textarea<IError>`
  width: 100%;
  border-radius: ${({ theme }) => theme.spaces.s}px;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.gray)};
  outline: none;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.gray};
  outline: none;
  height: ${({ theme }) => theme.spaces.x}px;
  text-align: start;
  resize: none;
  padding: ${({ theme }) => theme.spaces.sss}px;
  margin-bottom: ${({ theme }) => theme.spaces.m}px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const ButtonText = styled.div`
  margin: ${({ theme }) => theme.spaces.s}px ${({ theme }) => theme.spaces.mm}px;
`;

export const InputContainerText = styled.div`
  display: flex;
`;

export const TextTitle = styled.h6`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
  position: absolute;
  transform: translateY(-200%);
`;
