export type Role = "admin" | "customer";
export interface User extends BaseUser {
  id: number;
  role: string;
  avatar: string;
  re_password: undefined;
  creationAt?: string;
  updatedAt?: string;
}

export interface BaseUser {
  name: string;
  email: string;
  password: string;
  re_password?: string;
  avatar: FileList | string;
}

export interface UserReducer {
  userList: User[];
  currentUser?: User;
  access_token?: string;
  isLoggedIn?: boolean;
  isAdmin?: boolean;
}

export interface Credentials {
  password: string;
  email: string;
}

export interface ReturnCredentials {
  access_token: string;
}
