import { useMutation } from "@tanstack/react-query";

import { fakeLoginRequest } from "../api/fakeApi";

export const useLoginMutation = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: fakeLoginRequest,
    onSuccess: (data) => console.log(data),
  });
