import { useNavigate } from "react-router-dom";
import { CircleButton } from "sad-landing-lib";

import { useTranslate } from "@/hooks/useTranslate";

import { IPowerSection } from "./interfaces";
import {
  CircleButtonContainer,
  Content,
  PowerContent,
  PowerText,
  PowerTitle,
} from "./styled";

export const PowerSection = ({ text, title, buttonText }: IPowerSection) => {
  const navigator = useNavigate();

  const HandleClick = () => {
    navigator("Services");
  };

  const { value } = useTranslate();

  return (
    <Content>
      <PowerContent>
        <PowerTitle isRu={value === "ru"}>
          {title} <span>Ensome</span>
        </PowerTitle>
        <PowerText>{text}</PowerText>
      </PowerContent>
      <CircleButtonContainer>
        <CircleButton onClick={HandleClick}>{buttonText}</CircleButton>
      </CircleButtonContainer>
    </Content>
  );
};
