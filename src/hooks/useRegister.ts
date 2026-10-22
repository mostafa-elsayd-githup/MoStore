import { useMutation } from "@tanstack/react-query";
import { creatUser } from "../services/RegisterForm";
import { useLocation, useNavigate } from "react-router";
import { getFriendlyErrorMessage } from "../utils/apiErrorHandler";
import { toast } from "sonner";
import { useEffect } from "react";

export const useRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname;
  const {
    mutate: registerUser,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: creatUser,
    onSuccess: (response) => {
      navigate(redirectTo || "/", {
        replace: true,
        state: {
          isRegisteredSuccessfully: true,
          welcomeMessage: `اهلا بك  ${response[0].fullName} فى MoStore`,
        },
      });
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

export const useWelcomeMessage = () => {
  const location = useLocation();
  const isRegisteredSuccessfully = location.state?.isRegisteredSuccessfully;
  const welcomeMessage = location.state?.welcomeMessage;
  useEffect(() => {
    if (isRegisteredSuccessfully && welcomeMessage) {
      toast.success(welcomeMessage, {
        position: "top-center",
        duration: 4000,
        style: {
          background: "var(--bg-badge)",
          color: "var(--color-main)",
          border: "1px solid var(--border-color)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "var(--shadow)",
          borderRadius: "16px",
          width: "20rem",
        },
      });
    }
  }, [isRegisteredSuccessfully, welcomeMessage]);
};
