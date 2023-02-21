import { useNavigate } from "react-router-dom";

import { IImageElement } from "./interfaces";
import {
  Body,
  Image,
  ImagWrapper,
  Name,
  Position,
  TextContainer,
} from "./styled";

export const ImageElement = ({
  name,
  photo,
  profession,
  id,
}: IImageElement) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`/ourTeamInfo?id=${id}`);

  return (
    <Body onClick={onClickHandler}>
      <ImagWrapper>
        <Image src={photo} loading="lazy" alt="Loading..." title="picture" />
      </ImagWrapper>
      <TextContainer>
        <Name>{name}</Name>
        <Position>{profession}</Position>
      </TextContainer>
    </Body>
  );
};
