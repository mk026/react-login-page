import { useMutation } from "@tanstack/react-query";

import { fakeLoginRequest } from "../api/fakeApi";
import { useAuth } from "./useAuth";

export const useLoginMutation = () => {
  const { login } = useAuth();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: fakeLoginRequest,
    onSuccess: (data) => login(data),
  });
};
