import { createContext } from "react";

import { IUser } from "../models/user";

export interface AuthContext {
  isAuth: boolean;
  user: IUser | null;
}

export const AuthContext = createContext<AuthContext>({
  isAuth: false,
  user: null,
});
