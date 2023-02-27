import { Field, FormikProvider, useFormik } from "formik";
import { useCallback } from "react";
import { Button } from "sad-landing-lib";

import { IContactUs } from "@/api/interfaces";
import { contact } from "@/api/mailAPI";

import { initialValue, validScheme } from "./mock";
import {
  Body,
  ButtonContainer,
  ButtonText,
  Container,
  ErrorText,
  Field as MyField,
  FieldName,
  StyledForm,
  Title,
} from "./styled";

export const ContactForm = () => {
  const onSubmitHandler = (e: IContactUs) => {
    contact(e);
  };

  const form = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitHandler,
    validationSchema: validScheme,
  });
  const { handleSubmit, handleChange, values, errors } = form;

  return (
    <Body>
      <Container>
        <Title>Contact Us</Title>
        <FormikProvider value={form}>
          <StyledForm onSubmit={handleSubmit}>
            <FieldName>Name</FieldName>
            <Field
              as={MyField}
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
            <FieldName id="email">Email</FieldName>
            <Field
              as={MyField}
              onChange={handleChange}
              value={values.email}
              type="text"
              name="email"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <FieldName id="theme">Theme</FieldName>
            <Field
              as={MyField}
              onChange={handleChange}
              value={values.theme}
              type="text"
              name="theme"
            />
            {errors.theme && <ErrorText>{errors.theme}</ErrorText>}
            <FieldName id="message">Message</FieldName>
            <Field
              as={MyField}
              onChange={handleChange}
              value={values.message}
              type="text"
              name="message"
            />
            {errors.message && <ErrorText>{errors.message}</ErrorText>}
            <ButtonContainer>
              <Button type="submit">
                <ButtonText>Send</ButtonText>
              </Button>
            </ButtonContainer>
          </StyledForm>
        </FormikProvider>
      </Container>
    </Body>
  );
};
