import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../services/LogoutButton";
import { useCartStore } from "../store/cardStore";
import { useNavigate } from "react-router";
import { LogOut} from "lucide-react";
import {
  successToastMessage,
  errorToastMessage,
} from "../utils/ShowToastMessage";
import { createElement } from "react";

export const useLogout = () => {
  const navigate = useNavigate();
  const { clearAll } = useCartStore();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: (token: string) => logoutApi({ token }),
    onSuccess: () => {
      localStorage.removeItem("sb-access-token");
      clearAll();
      successToastMessage(
        "تم تسجيل الخروج بنجاح",
        createElement(LogOut, { size: 20 }),
      );
      navigate("/login");
    },
    onError: () => {
      localStorage.removeItem("sb-access-token");
      clearAll();
      errorToastMessage(
        "تم تسجيل خروجك من الجهاز",
        createElement(LogOut, { size: 20 }),
      );
      navigate("/login");
    },
  });
  return { logout, isPending };
};
