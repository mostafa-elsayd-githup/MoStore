import { api } from "../api/api";
import type { ProductTypeProp, propType } from "../types/ProductsType/Product";
const table = "/products";
export const GetProductsByType = async ({
  category,
  signal,
}: propType): Promise<ProductTypeProp[]> => {
  const req = await api.get(`${table}?select=*&type=eq.${category}`, {
    signal,
  });
  return req.data;
};
export const GetProductById_productDetils = async ({
  productId,
  signal,
}: propType): Promise<ProductTypeProp> => {
  const req = await api.get(`${table}?select=*&id=eq.${productId}`, { signal });
  if (!req.data || req.data.length === 0) {
    throw new Error(); 
  }
  return req.data[0];
};
