import { useMutation } from "@tanstack/react-query";

import { fakeRegisterRequest } from "../api/fakeApi";
import { useAuth } from "./useAuth";

export const useRegisterMutation = () => {
  const { login } = useAuth();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: fakeRegisterRequest,
    onSuccess: (data) => login(data),
  });
};
