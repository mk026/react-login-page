import { FC } from "react";
import { useForm } from "react-hook-form";

import Form from "../shared/form";

const LoginForm: FC = () => {
  const { ...methods } = useForm();

  return (
    <Form methods={methods} onSubmit={() => console.log("login")}>
      <Form.Field name="Email" />
      <Form.Field name="Password" />
      <Form.SubmitButton isLoading={false}>Login</Form.SubmitButton>
    </Form>
  );
};

export default LoginForm;
