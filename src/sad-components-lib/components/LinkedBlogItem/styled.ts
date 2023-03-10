import { Link } from "react-router-dom";
import styled from "styled-components";

import rightArrow from "@/sad-components-lib/assets/images/rightArrow.png";
import { libTheme } from "@/sad-components-lib/theme";

import { IBlogItem } from "./interfaces";

export const ElementIcon = styled.img`
  max-width: ${libTheme.spaces.xxx}px;
  height: auto;
  @media (max-width: ${libTheme.endPoints.fold}) {
    max-width: ${({ theme }) => theme.spaces.xx}px;
  }
`;

export const ElementText = styled.h5`
  font-weight: normal;
  color: ${libTheme.colors.gray};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${libTheme.colors.blue};
  &::after {
    content: " ";
    position: absolute;
    background-image: url(${rightArrow});
    background-repeat: no-repeat;
    width: ${libTheme.spaces.m}px;
    height: ${libTheme.spaces.ss}px;
    margin-top: ${libTheme.spaces.soo}px;
    margin-left: ${libTheme.spaces.ss}px;
  }
`;
export const Element = styled.div<IBlogItem>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  margin: ${libTheme.spaces.sss}px 0;
  ${({ hideId }) => (hideId ? "cursor: pointer;" : "")};
  overflow: hidden;
`;

export const Info = styled.h5`
  margin: 0;
  color: ${libTheme.colors.gray};
  font-weight: normal;
`;

export const Icon = styled.img<IBlogItem>`
  ${({ vertical }) => (vertical ? "width: 90%" : "")}
  width: ${libTheme.spaces.xx}px;
  height: auto;
`;

export const Container = styled.div`
  margin-left: ${libTheme.spaces.ss}px;
`;
export const Title = styled.h3`
  margin: 0;
  font-weight: bold;
`;

export const Text = styled.h4`
  color: ${libTheme.colors.gray};
  font-weight: normal;
  margin: ${libTheme.spaces.s}px 0;
`;
