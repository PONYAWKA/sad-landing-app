import { useState } from "react";

import { Button } from "../Button";
import { IEvent, ISearch } from "./interfaces";
import { Body, ButtonContainer, ButtonContent, Content, Field } from "./styled";

export const Search = ({ onClick, buttonText, palaceHolder }: ISearch) => {
  const [text, setText] = useState("");

  const onChangeHandler = (e: IEvent) => {
    setText(e.target.value);
  };

  return (
    <Body>
      <Field
        value={text}
        onChange={onChangeHandler}
        placeholder={palaceHolder}
      />
      <ButtonContainer>
        <Button onClick={onClick}>
          <ButtonContent>{buttonText}</ButtonContent>
        </Button>
      </ButtonContainer>
    </Body>
  );
};
