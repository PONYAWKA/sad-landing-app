import { memo } from "react";
import { Link } from "react-router-dom";
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

export const PowerSection = memo(
  ({ text, title, buttonText }: IPowerSection) => {
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
          <Link to="services">
            <CircleButton>{buttonText}</CircleButton>
          </Link>
        </CircleButtonContainer>
      </Content>
    );
  }
);
