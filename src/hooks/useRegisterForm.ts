import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  RegisterFormValues,
  registerValidationSchema,
} from "../validation/registerValidation";
import { useRegisterMutation } from "./useRegisterMutation";

export const useRegisterForm = () => {
  const { ...methods } = useForm<RegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerValidationSchema),
  });
  const { mutate, isLoading } = useRegisterMutation();

  const registerHandler = (values: RegisterFormValues) => mutate(values);

  return {
    methods,
    onSubmit: methods.handleSubmit(registerHandler),
    isLoading,
  };
};
