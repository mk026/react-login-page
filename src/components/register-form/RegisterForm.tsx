import { FC } from "react";
import { useForm } from "react-hook-form";

import Form from "../shared/form";

const RegisterForm: FC = () => {
  const { ...methods } = useForm();

  return (
    <Form methods={methods} onSubmit={() => console.log("register")}>
      <Form.Field name="Name" />
      <Form.Field name="Bio" />
      <Form.Field name="Email" />
      <Form.Field name="Password" />
      <Form.Field name="Confirm Password" />
      <Form.SubmitButton isLoading={false}>Register</Form.SubmitButton>
    </Form>
  );
};

export default RegisterForm;
