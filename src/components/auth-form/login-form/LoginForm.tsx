import { FC } from "react";
import { Button } from "@mui/material";

import { useLoginForm } from "../../../hooks/useLoginForm";
import Form from "../../shared/form";
import FormCard from "../../shared/form-card";
import FormTitle from "../../shared/form-title";
import FormInfo from "../../shared/form-info";

interface LoginFormProps {
  changeAuthMode: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ changeAuthMode }) => {
  const { methods, onSubmit, isLoading } = useLoginForm();

  return (
    <FormCard>
      <FormTitle>Login</FormTitle>
      <Form methods={methods} onSubmit={onSubmit}>
        <Form.Field fullWidth label="Email" name="email" />
        <Form.Field
          fullWidth
          label="Password"
          name="password"
          type="password"
        />
        <Form.SubmitButton isLoading={isLoading}>Login</Form.SubmitButton>
      </Form>
      <FormInfo>
        Don't have an account?{" "}
        <Button onClick={changeAuthMode}>Register</Button>
      </FormInfo>
    </FormCard>
  );
};

export default LoginForm;
