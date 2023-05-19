import { FC, useState } from "react";

import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const AuthForm: FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const changeAuthMode = () => setIsLogin((prev) => !prev);

  return isLogin ? (
    <LoginForm changeAuthMode={changeAuthMode} />
  ) : (
    <RegisterForm changeAuthMode={changeAuthMode} />
  );
};

export default AuthForm;
