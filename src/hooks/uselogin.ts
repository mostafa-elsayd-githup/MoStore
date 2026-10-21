import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import { loginUser } from "../services/LoginForm";
import { toast } from "sonner";
import { getFriendlyErrorMessage } from "../utils/apiErrorHandler";

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname;
  const {
    mutate: registerUser,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate(redirectTo || "/");
    },
    onError: (err) => {
      const errorMessage = getFriendlyErrorMessage(err);
      toast.error(errorMessage, {
        position: "top-center",
        duration: 6000,
        style: {
          background: "var(--bg-card)",
          color: "var(--text-h)",
          border: "1px solid var(--border-color)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "var(--shadow)",
          fontFamily: "var(--sans)",
          borderRadius: "16px",
          padding: "14px 18px",
        },
      });
    },
  });
  return { registerUser, isPending, isError, error };
};
