import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  LoginFormValues,
  loginValidationSchema,
} from "../validation/loginValidation";

export const useLoginForm = () => {
  const { ...methods } = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginValidationSchema),
  });

  const loginHandler = (values: LoginFormValues) => console.log(values);

  return {
    methods,
    onSubmit: methods.handleSubmit(loginHandler),
    isLoading: false,
  };
};
