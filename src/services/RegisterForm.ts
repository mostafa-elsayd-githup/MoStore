import { api } from "../api/api";
import { authApi } from "../api/authApi";
import type {
  accessTokenType,
  registerForm,
} from "../types/AuthTypes/AuthFormType";

const table = "/profiles";
export const creatUser = async (userData: registerForm) => {
  const { password, email, fullName, phone } = userData;

  const authUser: accessTokenType = await authApi.post("/signup", {
    email: email,
    password: password,
  });
  localStorage.setItem("sb-access-token", authUser.data.access_token);
  const req = await api.post(
    `${table}`,
    {
      fullName,
      email,
      phone,
    },
    {
      headers: {
        Prefer: "return=representation",
      },
    },
  );
  return req.data;
};
