import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";

import { useLoginForm } from "../../../hooks/useLoginForm";
import Form from "../../shared/form";

interface LoginFormProps {
  changeAuthMode: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ changeAuthMode }) => {
  const { methods, onSubmit, isLoading } = useLoginForm();

  return (
    <Box>
      <Typography>Login</Typography>
      <Form methods={methods} onSubmit={onSubmit}>
        <Form.Field label="Email" name="email" />
        <Form.Field label="Password" name="password" type="password" />
        <Form.SubmitButton isLoading={isLoading}>Login</Form.SubmitButton>
      </Form>
      <Typography>
        Don't have an account?{" "}
        <Button onClick={changeAuthMode}>Register</Button>
      </Typography>
    </Box>
  );
};

export default LoginForm;
