import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  RegisterFormValues,
  registerValidationSchema,
} from "../validation/registerValidation";
import { useRegisterMutation } from "./useRegisterMutation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Paths } from "../routes";

export const useRegisterForm = () => {
  const { ...methods } = useForm<RegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerValidationSchema),
  });
  const { mutate, isLoading, isSuccess } = useRegisterMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(Paths.PROFILE);
    }
  }, [isSuccess]);

  const registerHandler = (values: RegisterFormValues) => mutate(values);

  return {
    methods,
    onSubmit: methods.handleSubmit(registerHandler),
    isLoading,
  };
};
