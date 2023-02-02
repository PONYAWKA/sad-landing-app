import * as Yup from "yup";
export const validScheme = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!"),
  email: Yup.string().email("Incorrect Email").required(),
  message: Yup.string(),
});
