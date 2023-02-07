import { IImageElement } from "./interfaces";
import {
  Body,
  Image,
  ImagWrapper,
  Name,
  Position,
  TextContainer,
} from "./styled";

export const ImageElement = ({ name, photo, profession }: IImageElement) => {
  return (
    <Body>
      <ImagWrapper>
        <Image src={photo} />
      </ImagWrapper>
      <TextContainer>
        <Name>{name}</Name>
        <Position>{profession}</Position>
      </TextContainer>
    </Body>
  );
};
