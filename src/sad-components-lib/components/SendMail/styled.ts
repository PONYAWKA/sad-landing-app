import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
  font-family: Manrope !important;
  background-color: ${libTheme.colors.helperB3};
  border-radius: ${libTheme.spaces.s}px;
  max-width: ${libTheme.spaces.l}px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${libTheme.endPoints.tablet}px) {
    flex-direction: column;
    background-color: transparent;
    margin: ${libTheme.spaces.sss}px;
  }
`;
export const Field = styled.input`
  font-weight: bold;
  background-color: transparent;
  border-radius: ${libTheme.spaces.s}px 0 0 ${libTheme.spaces.s}px;
  border: 0px;
  outline: none;
  padding: ${libTheme.spaces.sss}px;
  @media (max-width: ${libTheme.endPoints.tablet}px) {
    border: 2px solid ${libTheme.colors.helperB2};
    color: ${libTheme.colors.helperB2};
    margin-bottom: ${libTheme.spaces.m}px;
  }
`;
export const Send = styled.button`
  font-weight: bolder;
  padding: 0 ${libTheme.spaces.m}px;
  border: 0px;
  border-radius: ${libTheme.spaces.s}px;
  @media (max-width: ${libTheme.endPoints.tablet}px) {
    height: ${libTheme.spaces.mmm}px;
  }
`;
