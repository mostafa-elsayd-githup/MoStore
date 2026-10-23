import { authApi } from "../api/authApi";

export const logoutApi = async ({ token }: { token: string }) => {
  const logoutReq = await authApi.post("/logout", null, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return logoutReq.data;
};
