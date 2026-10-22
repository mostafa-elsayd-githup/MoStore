import { api } from "../api/api";
import type { CheckoutPayload } from "../types/CheckoutTypes/FormTypesInput";
interface CheckoutParams {
  formData: CheckoutPayload;
  userToken: string;
}
export const checkoutForm = async ({ formData, userToken }: CheckoutParams) => {
  const req = await api.post("/orders", formData, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return req.data;
};
