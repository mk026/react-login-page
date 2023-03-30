import * as yup from "yup";

export interface RegisterFormValues
  extends yup.InferType<typeof registerValidationSchema> {}

export const registerValidationSchema = yup.object({
  name: yup.string().min(1).max(100).required(),
  bio: yup.string().min(1).max(1000).optional(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(100).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
