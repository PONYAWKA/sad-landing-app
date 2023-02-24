import { useFormik } from "formik";
import { Button } from "sad-landing-lib";

import { IContactUs } from "@/api/interfaces";
import { Contact } from "@/api/mailAPI";

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
    Contact(e).then(() => resetForm());
  };

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitHandler,
    validationSchema: validScheme,
    validateOnBlur: true,
  });

  return (
    <Body>
      <StyledForma onSubmit={handleSubmit}>
        <InputContainer>
          <InputContainerText>
            <TextTitle>Email</TextTitle>

            <InputField
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              error={!!errors.email}
            />
          </InputContainerText>
          <InputContainerText>
            <TextTitle>Name</TextTitle>
            <InputField
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
          <InputField
            name="theme"
            type="text"
            onChange={handleChange}
            value={values.theme}
            error={!!errors.theme}
          />
        </InputContainerText>
        <InputContainerText>
          <TextTitle>Message</TextTitle>
          <InputField
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
    </Body>
  );
};
