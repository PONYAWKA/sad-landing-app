import { useState } from "react";

import { MinusIcon } from "@/sad-components-lib/assets/icons/MinusIcon";
import { PlusIcon } from "@/sad-components-lib/assets/icons/PlusIcon";
import { libTheme } from "@/sad-components-lib/theme";

import { IFAQComponent } from "./interfaces";
import { Body, IconContainer, Text, Title, TitleContainer } from "./styled";

export const FAQComponent = ({ description, heading }: IFAQComponent) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => setIsOpen((prev) => !prev);

  return (
    <Body onClick={onClickHandler}>
      <TitleContainer>
        <Title isOpen={isOpen}>{heading}</Title>
        <IconContainer>
          {isOpen ? (
            <MinusIcon fill={libTheme.colors.blue} />
          ) : (
            <PlusIcon fill={libTheme.colors.gray} />
          )}
        </IconContainer>
      </TitleContainer>
      {isOpen && <Text>{description}</Text>}
    </Body>
  );
};
