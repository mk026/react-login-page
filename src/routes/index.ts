import { ComponentType } from "react";

import HomePage from "../pages/home-page";
import AuthPage from "../pages/auth-page";
import ProfilePage from "../pages/profile-page";

export enum Paths {
  HOME = "/home",
  PROFILE = "/profile",
  AUTH = "/auth",
}

export interface IRoute {
  path: string;
  Component: ComponentType;
}

export const publicRoutes: IRoute[] = [
  { path: Paths.HOME, Component: HomePage },
  { path: Paths.AUTH, Component: AuthPage },
];

export const protectedRoutes: IRoute[] = [
  { path: Paths.PROFILE, Component: ProfilePage },
];
