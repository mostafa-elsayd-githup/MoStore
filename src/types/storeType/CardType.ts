export interface cartType {
  id: number;
  type: string;
  title: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  description: string;
  colors: {
    id: number;
    name: string;
    hex: string;
  };
  quantity: number;
  sizes: string;
  image: string[];
  details: string[];
}

export interface cartPropType {
  cart: cartType[];
  toggleCart: (product: cartType) => "added" | "removed" | "incremented";
  deleteProduct: (product: cartType) => void;
  clearAll: () => void;
}
