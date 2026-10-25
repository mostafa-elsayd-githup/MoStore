import { useMutation } from "@tanstack/react-query";
import { checkoutForm } from "../services/CheckoutForm";
import type { CheckoutFormData } from "../types/CheckoutTypes/FormTypesInput";
import { useTotalPrice } from "./useCheckoutCalcTotalPrice";
import {
  successToastMessage,
  errorToastMessage,
} from "../utils/ShowToastMessage";
import { ERROR_MESSAGES_MAP } from "../utils/apiErrorHandler";
import { Handbag, X } from "lucide-react";
import { createElement } from "react";
export const useSumbitForm = () => {
  const { totalPrice, totalQuantity, item } = useTotalPrice();

  const token = localStorage.getItem("sb-access-token") || "";
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (formData: CheckoutFormData) => {
      const { address, area, city, ...restForm } = formData;
      return checkoutForm({
        formData: {
          ...restForm,
          shipping_address: {
            address: address,
            area: area,
            city: city,
          },
          total_amount: totalPrice,
          quantity: totalQuantity,
          items: item,
          status: "pending",
        },
        userToken: token,
      });
    },
    onSuccess: () => {
      successToastMessage(
        "تمت عمليه الشراء بنجاح",
        createElement(Handbag, { size: 20 }),
      );
    },
    onError: (err: any) => {
      const statusCode = err.response?.status;
      const errorMessage =
        (statusCode && ERROR_MESSAGES_MAP[statusCode]) ||
        err.message ||
        "حدث خطأ غير متوقع، يرجى المحاولة مرة أخرى";
      errorToastMessage(errorMessage, createElement(X, { size: 20 }));
    },
  });
  return { submitOrder: mutate, isPending, isError, error };
};
