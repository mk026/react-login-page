import { FC } from "react";

import { useRegisterForm } from "../../hooks/useRegisterForm";
import Form from "../shared/form";
import FormCard from "../shared/form-card";
import FormTitle from "../shared/form-title";
import FormInfo from "../shared/form-info";
import TextLink from "../shared/text-link";
import { Paths } from "../../routes";

const RegisterForm: FC = () => {
  const { methods, onSubmit, isLoading } = useRegisterForm();

  return (
    <FormCard>
      <FormTitle>Register</FormTitle>
      <Form methods={methods} onSubmit={onSubmit}>
        <Form.Field label="Name" name="name" />
        <Form.Field multiline label="About Yourself" name="bio" />
        <Form.Field label="Email" name="email" />
        <Form.Field label="Password" name="password" type="password" />
        <Form.Field
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <Form.SubmitButton isLoading={isLoading}>Register</Form.SubmitButton>
      </Form>
      <FormInfo>
        Already have an account? <TextLink to={Paths.LOGIN}>Login</TextLink>
      </FormInfo>
    </FormCard>
  );
};

export default RegisterForm;
