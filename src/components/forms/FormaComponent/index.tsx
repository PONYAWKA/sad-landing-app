import { useFormik } from "formik";
import { Button } from "sad-landing-lib";

import { IContactUs } from "@/api/interfaces";
import { Contact } from "@/api/mailAPI";

import { initialValue, validScheme } from "./mock";
import {
  BigInputField,
  Body,
  ButtonContainer,
  ButtonText,
  InputContainer,
  InputContainerText,
  InputField,
  StyledForma,
  TextTitle,
} from "./styled";

export const FormaComponent = () => {
  const onSubmitHandler = (e: IContactUs) => {
    Contact(e).then(() => resetForm());
  };
  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitHandler,
    validationSchema: validScheme,
  });

  return (
    <Body>
      <StyledForma onSubmit={handleSubmit}>
        <InputContainer>
          <InputContainerText>
            <InputField
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              error={!!errors.email}
              placeholder="Your email"
            />
          </InputContainerText>
          <InputContainerText>
            <InputField
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              error={!!errors.name}
              placeholder="Your name"
            />
          </InputContainerText>
        </InputContainer>
        <InputContainerText>
          <InputField
            name="theme"
            type="text"
            onChange={handleChange}
            value={values.theme}
            error={!!errors.theme}
            placeholder="Theme"
          />
        </InputContainerText>
        <InputContainerText>
          <BigInputField
            name="message"
            onChange={handleChange}
            value={values.message}
            error={!!errors.message}
            placeholder="Your message"
          />
        </InputContainerText>
        <ButtonContainer>
          <Button type="submit">
            <ButtonText>Send</ButtonText>
          </Button>
        </ButtonContainer>
      </StyledForma>
    </Body>
  );
};
