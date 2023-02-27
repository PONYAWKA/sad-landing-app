import { Field, FormikProvider, useFormik } from "formik";
import { Button } from "sad-landing-lib";

import { IContactUs } from "@/api/interfaces";
import { contact } from "@/api/mailAPI";

import { initialValue, validScheme } from "./mock";
import {
  Body,
  ButtonContainer,
  ButtonText,
  InputContainer,
  InputContainerText,
  InputField,
  StyledForma,
  TextTitle,
} from "./styled";

export const SecondFormaComponent = () => {
  const onSubmitHandler = (e: IContactUs) => {
    contact(e)
      .catch(() => setErrors({ ...errors, sand: "The letter was'nt send" }))
      .then(() => resetForm());
  };

  const forma = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitHandler,
    validationSchema: validScheme,
    validateOnBlur: true,
  });

  const { handleSubmit, handleChange, values, errors, resetForm, setErrors } =
    forma;

  return (
    <Body>
      <FormikProvider value={forma}>
        <StyledForma onSubmit={handleSubmit}>
          <InputContainer>
            <InputContainerText>
              <TextTitle>Email</TextTitle>
              <Field
                as={InputField}
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                error={!!errors.email}
              />
            </InputContainerText>
            <InputContainerText>
              <TextTitle>Name</TextTitle>
              <Field
                as={InputField}
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                error={!!errors.name}
              />
            </InputContainerText>
          </InputContainer>
          <InputContainerText>
            <TextTitle>Theme</TextTitle>
            <Field
              as={InputField}
              name="theme"
              type="text"
              onChange={handleChange}
              value={values.theme}
              error={!!errors.theme}
            />
          </InputContainerText>
          <InputContainerText>
            <TextTitle>Message</TextTitle>
            <Field
              as={InputField}
              name="message"
              onChange={handleChange}
              value={values.message}
              error={!!errors.message}
            />
          </InputContainerText>
          <ButtonContainer>
            <Button type="submit">
              <ButtonText>Send</ButtonText>
            </Button>
          </ButtonContainer>
        </StyledForma>
      </FormikProvider>
    </Body>
  );
};
