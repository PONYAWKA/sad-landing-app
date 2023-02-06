import * as Yup from "yup";
export const initialValue = {
  name: "",
  email: "",
  theme: "",
  message: "",
};
export const validScheme = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!"),
  email: Yup.string().email("Incorrect Email").required(),
  message: Yup.string(),
});
