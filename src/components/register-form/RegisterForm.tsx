import { FC } from "react";

import { useRegisterForm } from "../../hooks/useRegisterForm";
import Form from "../shared/form";

const RegisterForm: FC = () => {
  const { methods, onSubmit, isLoading } = useRegisterForm();

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.Field name="Name" />
      <Form.Field name="Bio" />
      <Form.Field name="Email" />
      <Form.Field name="Password" />
      <Form.Field name="Confirm Password" />
      <Form.SubmitButton isLoading={isLoading}>Register</Form.SubmitButton>
    </Form>
  );
};

export default RegisterForm;
