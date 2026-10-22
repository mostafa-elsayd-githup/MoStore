import { literal, z } from "zod";
export const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  email: z
    .string()
    .email({ message: "البريد الإلكتروني غير صالح" })
    .optional()
    .or(literal("")),
  phone: z.string().regex(/^01[0125][0-9]{8}$/, {
    message: "رقم الهاتف غير صحيح، يجب أن يكون رقم مصري مكون من 11 رقماً",
  }),
  city: z.string().min(2, { message: "يرجى إدخال اسم المحافظة أو المدينة" }),
  area: z.string().min(2, { message: "يرجى إدخال اسم المنطقة أو الحي" }),
  address: z.string().min(10, {
    message: "العنوان بالتفصيل قصير جداً، يرجى كتابة الشارع ورقم العقار",
  }),
  paymentMethod: z.enum(["card", "cash"], {
    message: "يرجى اختيار طريقة دفع صالحة",
  }),
});
