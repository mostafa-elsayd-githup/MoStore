export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  area: string;
  address: string;
  paymentMethod: "cash" | "card";
}