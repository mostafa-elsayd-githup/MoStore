import { authApi } from "../api/authApi";
import type { loginForm } from "../types/AuthTypes/AuthFormType";

export const loginUser = async (dataForm: loginForm) => {
  const res = await authApi.post("/token?grant_type=password", {
    email: dataForm.email,
    password: dataForm.password,
  });
  return res.data;
};