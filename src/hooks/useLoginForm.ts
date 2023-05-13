import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  LoginFormValues,
  loginValidationSchema,
} from "../validation/loginValidation";
import { useLoginMutation } from "./useLoginMutation";

export const useLoginForm = () => {
  const { ...methods } = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginValidationSchema),
  });
  const { mutate, isLoading } = useLoginMutation();

  const loginHandler = (values: LoginFormValues) => mutate(values);

  return {
    methods,
    onSubmit: methods.handleSubmit(loginHandler),
    isLoading,
  };
};
