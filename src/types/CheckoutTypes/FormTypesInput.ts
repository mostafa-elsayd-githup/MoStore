import type { cartType } from "../storeType/CardType";

export interface CheckoutFormData {
  fullName: string;
  email?: string;
  phone: string;
  address: string;
  area: string;
  city: string;
  paymentMethod: "cash" | "card";
}

export interface CheckoutPayload {
  fullName: string;
  email?: string;
  phone: string;
  paymentMethod: "cash" | "card";
  total_amount: number;
  quantity: number;
  shipping_address: {
    address: string;
    area: string;
    city: string;
  };
  status?: string;
  items: cartType[];
}
