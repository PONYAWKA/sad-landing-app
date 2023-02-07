import { useState } from "react";

import { Button } from "../Button";
import { IEvent, ISearch } from "./interfaces";
import { Body, ButtonContainer, ButtonContent, Field } from "./styled";

export const Search = ({
  onClick,
  buttonText,
  palaceHolder,
  value,
  onChange,
}: ISearch) => {
  return (
    <Body>
      <Field value={value} onChange={onChange} placeholder={palaceHolder} />
      <ButtonContainer>
        <Button onClick={onClick}>
          <ButtonContent>{buttonText}</ButtonContent>
        </Button>
      </ButtonContainer>
    </Body>
  );
};
