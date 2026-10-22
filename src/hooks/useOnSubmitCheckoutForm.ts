import { useMutation } from "@tanstack/react-query";
import { checkoutForm } from "../services/CheckoutForm";
import type { CheckoutFormData } from "../types/CheckoutTypes/FormTypesInput";
import { useTotalPrice } from "./useCheckoutCalcTotalPrice";
import { toast } from "sonner";
import { ERROR_MESSAGES_MAP } from "../utils/apiErrorHandler";
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
      toast.success("تمت عمليه الشراء بنجاح", {
        duration: 4000,
      });
    },
    onError: (err: any) => {
      const statusCode = err.response?.status;
      const errorMessage =
        (statusCode && ERROR_MESSAGES_MAP[statusCode]) ||
        err.message ||
        "حدث خطأ غير متوقع، يرجى المحاولة مرة أخرى";
      toast.error(errorMessage, {
        duration: 4000,
      });
    },
  });
  return { submitOrder: mutate, isPending, isError, error };
};
