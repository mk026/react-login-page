import { FC } from "react";

import { useLoginForm } from "../../hooks/useLoginForm";
import Form from "../shared/form";
import FormCard from "../shared/form-card";
import FormTitle from "../shared/form-title";
import FormInfo from "../shared/form-info";
import TextLink from "../shared/text-link";
import { Paths } from "../../routes";

const LoginForm: FC = () => {
  const { methods, onSubmit, isLoading } = useLoginForm();

  return (
    <FormCard>
      <FormTitle>Login</FormTitle>
      <Form methods={methods} onSubmit={onSubmit}>
        <Form.Field label="Email" name="email" />
        <Form.Field label="Password" name="password" type="password" />
        <Form.SubmitButton isLoading={isLoading}>Login</Form.SubmitButton>
      </Form>
      <FormInfo>
        Don't have an account? <TextLink to={Paths.REGISTER}>Register</TextLink>
      </FormInfo>
    </FormCard>
  );
};

export default LoginForm;
