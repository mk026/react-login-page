import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  RegisterFormValues,
  registerValidationSchema,
} from "../validation/registerValidation";

export const useRegisterForm = () => {
  const { ...methods } = useForm<RegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerValidationSchema),
  });

  const registerHandler = (values: RegisterFormValues) => console.log(values);

  return {
    methods,
    onSubmit: methods.handleSubmit(registerHandler),
    isLoading: false,
  };
};
