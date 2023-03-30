import * as yup from "yup";

export interface LoginFormValues
  extends yup.InferType<typeof loginValidationSchema> {}

export const loginValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
