import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";

import { useRegisterForm } from "../../../hooks/useRegisterForm";
import Form from "../../shared/form";

interface RegisterFormProps {
  changeAuthMode: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ changeAuthMode }) => {
  const { methods, onSubmit, isLoading } = useRegisterForm();

  return (
    <Box>
      <Typography>Register</Typography>
      <Form methods={methods} onSubmit={onSubmit}>
        <Form.Field label="Name" name="name" />
        <Form.Field label="Bio" name="bio" />
        <Form.Field label="Email" name="email" />
        <Form.Field label="Password" name="password" type="password" />
        <Form.Field
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <Form.SubmitButton isLoading={isLoading}>Register</Form.SubmitButton>
      </Form>
      <Typography>
        Already have an account? <Button onClick={changeAuthMode}>Login</Button>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
