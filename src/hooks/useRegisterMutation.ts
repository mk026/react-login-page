import { useMutation } from "@tanstack/react-query";

import { fakeRegisterRequest } from "../api/fakeApi";

export const useRegisterMutation = () =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: fakeRegisterRequest,
    onSuccess: (data) => console.log(data),
  });
