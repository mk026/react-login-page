import { FC, PropsWithChildren, createContext } from "react";

import { IUser } from "../models/user";

export interface AuthContext {
  isAuth: boolean;
  user: IUser | null;
}

export const AuthContext = createContext<AuthContext>({
  isAuth: false,
  user: null,
});

const initialValue: AuthContext = {
  isAuth: false,
  user: null,
};

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
