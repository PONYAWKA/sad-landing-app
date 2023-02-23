import { memo } from "react";

import { IProps } from "./interfaces";
import { Body, SubText, Text, Title } from "./styled";

export const SecondPageHeader = memo(({ text, title, subtext }: IProps) => {
  return (
    <Body>
      <Title>{text}</Title>
      <Text>{title}</Text>
      <SubText>{subtext}</SubText>
    </Body>
  );
});
