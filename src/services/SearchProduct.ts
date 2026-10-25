import { api } from "../api/api";
const table = "/products";
export const SearchProduct = async (productName: string | undefined) => {
  if (!productName || productName.trim() === "") return [];
  const searchingProduct = await api.get(table,{
    params:{
        select:"*",
        title:`ilike.%${productName}%`
    }
  }
  );

  return searchingProduct.data;
};
