import { IDescription } from "./interfaces";
import { Body, Image, Text, TextContent, Title } from "./styled";

export const Description = ({
  reverse,
  textOne,
  textTwo,
  title,
  image,
}: IDescription) => {
  return (
    <Body reverse={reverse} className="element-animation">
      <TextContent>
        <Title>{title}</Title>
        <Text>{textOne}</Text>
        <Text>{textTwo}</Text>
      </TextContent>
      <Image src={image} loading="lazy" />
    </Body>
  );
};
