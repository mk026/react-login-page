import { ComponentType } from "react";

import HomePage from "../pages/home-page";
import ProfilePage from "../pages/profile-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";

export enum Paths {
  HOME = "/",
  PROFILE = "/profile",
  LOGIN = "/login",
  REGISTER = "/register",
}

export interface IRoute {
  path: string;
  Component: ComponentType;
}

export const publicRoutes: IRoute[] = [
  { path: Paths.HOME, Component: HomePage },
  { path: Paths.LOGIN, Component: LoginPage },
  { path: Paths.REGISTER, Component: RegisterPage },
];

export const protectedRoutes: IRoute[] = [
  { path: Paths.PROFILE, Component: ProfilePage },
];
