import { Field, FormikProvider, useFormik } from "formik";
import { Button } from "sad-landing-lib";

import { IContactUs } from "@/api/interfaces";
import { contact } from "@/api/mailAPI";

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
} from "./styled";

export const FormaComponent = () => {
  const onSubmitHandler = (e: IContactUs) => {
    resetForm();
    contact(e).catch(() =>
      setErrors({ ...errors, sand: "The letter was'nt send" })
    );
  };
  const form = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitHandler,
    validationSchema: validScheme,
  });

  const { handleSubmit, handleChange, values, errors, resetForm, setErrors } =
    form;

  return (
    <Body>
      <FormikProvider value={form}>
        <StyledForma onSubmit={handleSubmit}>
          <InputContainer>
            <InputContainerText>
              <Field
                as={InputField}
                name="email"
                type="email"
                onChange={handleChange}
                error={!!errors.name}
                value={values.email}
                placeholder="Your email"
              />
            </InputContainerText>
            <InputContainerText>
              <Field
                as={InputField}
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
            <Field
              as={InputField}
              name="theme"
              type="text"
              onChange={handleChange}
              value={values.theme}
              error={!!errors.theme}
              placeholder="Theme"
            />
          </InputContainerText>
          <InputContainerText>
            <Field
              as={BigInputField}
              name="message"
              onChange={handleChange}
              value={values.message}
              error={!!errors.message}
              placeholder="Your message"
            />
          </InputContainerText>
          <ButtonContainer>
            <Button type="submit">
              <ButtonText error={!!errors.sand}>
                {errors.sand ? "Error" : "Send"}
              </ButtonText>
            </Button>
          </ButtonContainer>
        </StyledForma>
      </FormikProvider>
    </Body>
  );
};
