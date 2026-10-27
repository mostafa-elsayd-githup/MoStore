import z from "zod";
export const RatingDataValidation = z.object({
  message: z.string().min(3, "يجب ان لا يقل عن 3 احرف"),
});
