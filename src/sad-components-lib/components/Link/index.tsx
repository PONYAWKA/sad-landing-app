import { Link } from "react-router-dom";
import styled from "styled-components";

import { libTheme } from "@/sad-components-lib/theme";

import rightArrow from "../../assets/rightArrow.png";

export const StyledLick = styled(Link)`
  text-decoration: none;
  color: ${libTheme.colors.blue};
  &::after {
    content: " ";
    position: absolute;
    background-image: url(${rightArrow});
    background-repeat: no-repeat;
    width: ${libTheme.spaces.m}px;
    height: ${libTheme.spaces.ss}px;
    margin-top: ${libTheme.spaces.s}px;
    margin-left: ${libTheme.spaces.ss}px;
  }
`;
