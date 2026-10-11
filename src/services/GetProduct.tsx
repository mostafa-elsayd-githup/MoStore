import { api } from "../api/api";
import type { ProductTypeProp } from "../types/ProductsType/Product";
export const GetProducts = async ({
  category,
  signal,
}: {
  category: string;
  signal: AbortSignal;
}):Promise<ProductTypeProp[]> => {
  const req = await api.get(`/products?select=*&type=eq.${category}`, {
    signal,
  });

  return req.data;
};
