import z from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "الاسم الكامل يجب أن يكون 3 أحرف على الأقل" }),

    email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),

    phone: z.string().regex(/^01[0125][0-9]{8}$/, {
      message: "رقم الهاتف غير صحيح، يجب أن يكون رقم مصري مكون من 11 رقماً",
    }),

    password: z
      .string()
      .min(8, { message: "كلمة المرور يجب ألا تقل عن 8 أحرف" }),

    confirmPassword: z.string().min(1, { message: "يرجى تأكيد كلمة المرور" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمت المرور غير متطابقه",
    path: ["confirmPassword"],
  });

export const loginSchame = z.object({
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  password: z.string().min(8, { message: "كلمة المرور يجب ألا تقل عن 8 أحرف" }),
});
