import { useMutation } from "@tanstack/react-query";
import { createElement } from "react";
import { useLocation, useNavigate } from "react-router";
import { loginUser } from "../services/LoginForm";
import { X } from "lucide-react";
import { getFriendlyErrorMessage } from "../utils/apiErrorHandler";
import { errorToastMessage} from "../utils/ShowToastMessage";
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
    onSuccess: (data) => {
      localStorage.setItem("sb-access-token", data?.access_token);
      navigate(redirectTo || "/");
    },
    onError: (err) => {
      const errorMessage = getFriendlyErrorMessage(err);
    errorToastMessage(errorMessage, createElement(X, { size: 20 }))
    },
  });
  return { registerUser, isPending, isError, error };
};
