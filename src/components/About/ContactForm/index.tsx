import { useFormik } from "formik";

import { IContactUs } from "@/api/interfaces";
import { Contact } from "@/api/mailAPI";
import { Button } from "@/sad-components-lib/components/Button";

import { validScheme } from "./mock";
import {
  Body,
  ButtonContainer,
  ButtonText,
  Container,
  ErrorText,
  Field,
  FieldName,
  StyledForm,
  Title,
} from "./styled";

const initialValue = {
  name: "",
  email: "",
  theme: "",
  message: "",
};

export const ContactForm = () => {
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
      <Container>
        <Title>Contact Us</Title>
        <StyledForm onSubmit={handleSubmit}>
          <FieldName>Name</FieldName>
          <Field
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
          <FieldName id="email">Email</FieldName>
          <Field
            onChange={handleChange}
            value={values.email}
            type="text"
            name="email"
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
          <FieldName id="theme">Theme</FieldName>
          <Field
            onChange={handleChange}
            value={values.theme}
            type="text"
            name="theme"
          />
          {errors.theme && <ErrorText>{errors.theme}</ErrorText>}
          <FieldName id="message">Message</FieldName>
          <Field
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
      </Container>
    </Body>
  );
};
