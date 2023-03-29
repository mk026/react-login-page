import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";
import { Paths } from "../../../routes";

const AuthWrapper: FC = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={Paths.HOME} />;
};

export default AuthWrapper;
