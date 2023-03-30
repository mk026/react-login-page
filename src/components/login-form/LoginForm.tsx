import { FC } from "react";

import { useLoginForm } from "../../hooks/useLoginForm";
import Form from "../shared/form";

const LoginForm: FC = () => {
  const { methods, onSubmit, isLoading } = useLoginForm();

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.Field name="Email" />
      <Form.Field name="Password" />
      <Form.SubmitButton isLoading={isLoading}>Login</Form.SubmitButton>
    </Form>
  );
};

export default LoginForm;
