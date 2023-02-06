import { IProps } from "./interfaces";
import { Body, Image, StyledLink, SubTitle, Title } from "./styled";

export const Card = ({ to = "", subTitle, title, icon }: IProps) => {
  return (
    <Body>
      <Image loading="lazy" src={icon} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <StyledLink to={to}></StyledLink>
    </Body>
  );
};
