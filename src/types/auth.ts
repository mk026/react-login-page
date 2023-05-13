import { IUser } from "./user";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto extends LoginDto {
  name: string;
  bio?: string;
}

export interface AuthResponse {
  user: IUser;
  token: string;
}
