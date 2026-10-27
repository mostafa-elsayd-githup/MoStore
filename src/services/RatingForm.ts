import { api } from "../api/api";
import type { formDataType } from "../types/RetingSection/RatingType";
const table = "feedback";
export const RetingForm = async (ratingForm: formDataType) => {
  const ratingMessage = await api.post(table, ratingForm);
  return ratingMessage.data;
};
