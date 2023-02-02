import { IProps } from "./interfaces";
import { Body, SubText, Text, Title } from "./styled";

export const Top = ({ text, title, subtext }: IProps) => {
  return (
    <Body>
      <Title>{text}</Title>
      <Text>{title}</Text>
      <SubText>{subtext}</SubText>
    </Body>
  );
};
