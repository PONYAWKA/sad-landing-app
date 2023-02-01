import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import { IStyledProps } from "./interface";

export const Body = styled.div`
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  padding: ${libTheme.spaces.m}px;
  background-color: ${({ theme }) => theme.se};
  border-radius: ${libTheme.spaces.s}px;
  color: ${({ theme }) => theme.pr};
`;

export const Container = styled.div`
  height: ${libTheme.spaces.l}px;
  width: ${libTheme.spaces.xx}px;
`;

export const ElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Element = styled.div``;

export const Title = styled.h5`
  font-weight: bold;
  color: ${({ theme }) =>
    theme.pr == libTheme.colors.blue
      ? libTheme.colors.black
      : libTheme.colors.white};
`;

export const Price = styled.div`
  color: ${({ theme }) =>
    theme.pr == libTheme.colors.blue
      ? libTheme.colors.black
      : libTheme.colors.white};
  font-weight: 800;
  font-size: ${libTheme.spaces.m}px;
`;

export const Button = styled.button<IStyledProps>`
  margin: ${libTheme.spaces.s}px;
  background-color: ${({ isChose, theme }) => (isChose ? theme.pr : theme.se)};
  color: ${({ isChose, theme }) => (!isChose ? theme.pr : theme.se)};
  border: 1px solid ${({ isChose, theme }) => (!isChose ? theme.pr : theme.se)};
  padding: ${libTheme.spaces.s}px ${libTheme.spaces.ss}px;
  border-radius: ${libTheme.spaces.s}px;
  cursor: pointer;
`;

export const PlanButton = styled.button`
  margin: ${libTheme.spaces.s}px;
  background-color: ${({ theme }) => theme.pr};
  color: ${({ theme }) => theme.se};
  border: 1px solid ${({ theme }) => theme.pr};
  padding: ${libTheme.spaces.s}px ${libTheme.spaces.ss}px;
  border-radius: ${libTheme.spaces.s}px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;
export const ButtonContainer = styled.div``;

export const PlusContainer = styled.div``;

export const PlusElement = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  margin: ${libTheme.spaces.m}px ${libTheme.spaces.s}px;
`;

export const PlusText = styled.div`
  color: ${({ theme }) =>
    theme.pr == libTheme.colors.blue
      ? libTheme.colors.black
      : libTheme.colors.white};
`;

export const Image = styled.img`
  width: 17px;
  height: 12px;
  margin-right: ${libTheme.spaces.sss}px;
`;
export const PayPalContainer = styled.div``;
