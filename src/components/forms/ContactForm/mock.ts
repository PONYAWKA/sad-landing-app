import * as Yup from "yup";
export const validScheme = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required(),
  email: Yup.string().email("Incorrect Email").required(),
  message: Yup.string().required(),
  theme: Yup.string().required(),
});

export const initialValue = {
  name: "",
  email: "",
  theme: "",
  message: "",
};
