import { FC, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const AuthForm: FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const changeAuthMode = () => setIsLogin((prev) => !prev);

  return isLogin ? (
    <Box>
      <Typography>Login</Typography>
      <LoginForm />
      <Typography>
        Don't have an account?{" "}
        <Button onClick={changeAuthMode}>Register</Button>
      </Typography>
    </Box>
  ) : (
    <Box>
      <Typography>Register</Typography>
      <RegisterForm />
      <Typography>
        Already have an account? <Button onClick={changeAuthMode}>Login</Button>
      </Typography>
    </Box>
  );
};

export default AuthForm;
