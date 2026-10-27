import { useMutation } from "@tanstack/react-query";
import { RetingForm } from "../services/RatingForm";
import {
  errorToastMessage,
  successToastMessage,
} from "../utils/ShowToastMessage";
import { Check, X } from "lucide-react";
import { createElement } from "react";
import type { formDataType } from "../types/RetingSection/RatingType";
export const useRatingHook = () => {
  const {
    mutate: RatingFormResPons,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (formData: formDataType) => RetingForm(formData),
    onSuccess: () => {
      successToastMessage("شكرًا لك! تم إرسال تقييمك بنجاح 🌟", createElement(Check, { size: 20 }));
    },
    onError: () => {
      errorToastMessage(
        "تعذر إرسال التقييم، برجاء المحاولة مجدداً",
        createElement(X, { size: 20 }),
      );
    },
  });
  return { RatingFormResPons, isPending, isError };
};
