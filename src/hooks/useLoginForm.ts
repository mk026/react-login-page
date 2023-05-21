import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  LoginFormValues,
  loginValidationSchema,
} from "../validation/loginValidation";
import { useLoginMutation } from "./useLoginMutation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../routes";

export const useLoginForm = () => {
  const { ...methods } = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginValidationSchema),
  });
  const { mutate, isLoading, isSuccess } = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(Paths.PROFILE);
    }
  }, [isSuccess]);

  const loginHandler = (values: LoginFormValues) => mutate(values);

  return {
    methods,
    onSubmit: methods.handleSubmit(loginHandler),
    isLoading,
  };
};
