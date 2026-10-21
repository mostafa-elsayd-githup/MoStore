export interface registerForm {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
export type loginForm = Pick<registerForm, "email" | "password">;
export interface accessTokenType {
  data: {
    access_token: string;
    exprires_in: number;
    expires_at: number;
    refresh_token: string;
  };
}
export interface ApiError {
  status?: number;
  response?: {
    status?: number;
  };
  message?: string;
  code?: string | number;
}