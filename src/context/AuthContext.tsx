import { FC, PropsWithChildren, createContext, useState } from "react";

import { IUser } from "../types/user";
import { AuthResponse } from "../types/auth";

export interface AuthContext {
  isAuth: boolean;
  user: IUser | null;
  token: string | null;
  login: (data: AuthResponse) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (data: AuthResponse) => {
    setUser(data.user);
    setToken(data.token);
    setIsAuth(true);
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);
  };

  const initialValue: AuthContext = {
    isAuth,
    user,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
