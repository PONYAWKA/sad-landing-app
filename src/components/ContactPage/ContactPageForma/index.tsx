import { useFormik } from "formik";

import { IContactUs } from "@/api/interfaces";
import { Contact } from "@/api/mailAPI";
import { Button } from "@/sad-components-lib/components/Button";

import { initialValue, validScheme } from "./mock";
import {
  BigInputField,
  Body,
  ButtonContainer,
  ButtonText,
  InputContainer,
  InputField,
  StyledForma,
} from "./styled";

export const ContactPageForma = () => {
  const onSubmitHandler = (e: IContactUs) => {
    Contact(e);
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitHandler,
    validationSchema: validScheme,
  });

  return (
    <Body>
      <StyledForma onSubmit={handleSubmit}>
        <InputContainer>
          <InputField
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            error={!!errors.email}
            placeholder="Your email"
          />
          <InputField
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            error={!!errors.name}
            placeholder="Your name"
          />
        </InputContainer>
        <InputField
          name="theme"
          type="text"
          onChange={handleChange}
          value={values.theme}
          error={!!errors.theme}
          placeholder="Theme"
        />
        <BigInputField
          name="message"
          onChange={handleChange}
          value={values.message}
          error={!!errors.message}
          placeholder="Your message"
        />
        <ButtonContainer>
          <Button type="submit">
            <ButtonText>Send</ButtonText>
          </Button>
        </ButtonContainer>
      </StyledForma>
    </Body>
  );
};
