import { AuthResponse, LoginDto, RegisterDto } from "../types/auth";
import { IUser } from "../types/user";

export const generateFakeAuthResponse = (
  data: LoginDto | RegisterDto
): AuthResponse => {
  const fakeUser: IUser = {
    id: 1,
    name: "name" in data ? data.name : data.email.split("@")[0],
    email: data.email,
    bio: "bio" in data ? data.bio : undefined,
    createdAt: new Date().toLocaleDateString(),
  };
  const fakeToken = "12345".repeat(10);

  return {
    user: fakeUser,
    token: fakeToken,
  };
};

export const fakeLoginRequest = (data: LoginDto): Promise<AuthResponse> => {
  const fakeResponse = generateFakeAuthResponse(data);
  return new Promise((res) => setTimeout(() => res(fakeResponse), 1000));
};

export const fakeRegisterRequest = (
  data: RegisterDto
): Promise<AuthResponse> => {
  const fakeResponse = generateFakeAuthResponse(data);
  return new Promise((res) => setTimeout(() => res(fakeResponse), 1000));
};
