import styled from "styled-components";

export const Body = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.helperB3};
`;

export const BlogContainer = styled.section`
  margin-top: ${({ theme }) => theme.spaces.x}px;
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  display: grid;
  grid-template-columns: 15fr 9fr;
`;

export const CategoriesContainer = styled.div`
  margin: ${({ theme }) => theme.spaces.mm}px 0;
`;

export const Title = styled.h2`
  font-weight: bold;
`;
export const TagsContainer = styled.div``;

export const LeftSection = styled.div`
  margin: 0 ${({ theme }) => theme.spaces.m}px;
`;
export const RightSection = styled.div``;

export const CurrentBlogContainer = styled.div``;
