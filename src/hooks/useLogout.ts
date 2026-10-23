import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../services/LogoutButton";
import { useCartStore } from "../store/cardStore";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useLogout = () => {
  const navigate = useNavigate();
  const { clearAll } = useCartStore();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: (token: string) => logoutApi({ token }),
    onSuccess: () => {
      localStorage.removeItem("sb-access-token");
      clearAll();
      toast.success("تم تسجيل الخروج بنجاح");
      navigate("/login");
    },
    onError: () => {
      localStorage.removeItem("sb-access-token");
      clearAll();
      toast.info("تم تسجيل خروجك من الجهاز");
      navigate("/login");
    },
  });
  return { logout, isPending };
};
