import { FC } from "react";

import { useRegisterForm } from "../../hooks/useRegisterForm";
import Form from "../shared/form";

const RegisterForm: FC = () => {
  const { methods, onSubmit, isLoading } = useRegisterForm();

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.Field label="Name" name="name" />
      <Form.Field label="Bio" name="bio" />
      <Form.Field label="Email" name="email" />
      <Form.Field label="Password" name="password" />
      <Form.Field label="Confirm Password" name="confirmPassword" />
      <Form.SubmitButton isLoading={isLoading}>Register</Form.SubmitButton>
    </Form>
  );
};

export default RegisterForm;
