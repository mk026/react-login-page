import { FC, PropsWithChildren, createContext, useState } from "react";

import { IUser } from "../models/user";

export interface AuthContext {
  isAuth: boolean;
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const login = (user: IUser) => {
    setUser(user);
    setIsAuth(true);
  };
  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const initialValue: AuthContext = {
    isAuth,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
