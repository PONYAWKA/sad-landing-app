import { useFormik } from "formik";

import { IContactUs } from "@/api/interfaces";
import { Contact } from "@/api/mailAPI";
import { Button } from "@/sad-components-lib/components/Button";

import { IFormaComponent } from "./interfaces";
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

export const FormaComponent = ({ alternative }: IFormaComponent) => {
  const onSubmitHandler = (e: IContactUs) => {
    Contact(e);
  };
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitHandler,
    validationSchema: validScheme,
  });

  return (
    <Body alternative={alternative}>
      <StyledForma onSubmit={handleSubmit}>
        <InputContainer>
          <InputContainerText>
            {alternative && <TextTitle>Email</TextTitle>}
            <InputField
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              error={!!errors.email}
              placeholder={!alternative ? "Your email" : ""}
              alternative={alternative}
            />
          </InputContainerText>
          <InputContainerText>
            {alternative && <TextTitle>Name</TextTitle>}
            <InputField
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              error={!!errors.name}
              placeholder={!alternative ? "Your name" : ""}
              alternative={alternative}
            />
          </InputContainerText>
        </InputContainer>
        <InputContainerText>
          {alternative && <TextTitle>Theme</TextTitle>}
          <InputField
            name="theme"
            type="text"
            onChange={handleChange}
            value={values.theme}
            error={!!errors.theme}
            placeholder={!alternative ? "Theme" : ""}
            alternative={alternative}
          />
        </InputContainerText>
        <InputContainerText>
          {alternative && <TextTitle>Message</TextTitle>}
          {!alternative ? (
            <BigInputField
              name="message"
              onChange={handleChange}
              value={values.message}
              error={!!errors.message}
              placeholder="Your message"
              alternative={alternative}
            />
          ) : (
            <InputField
              name="message"
              onChange={handleChange}
              value={values.message}
              error={!!errors.message}
              alternative={alternative}
            />
          )}
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
