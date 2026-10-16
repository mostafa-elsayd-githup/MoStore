export interface ProductDetailsType {
  brand: string;
  id: number;
  type: string;
  category: string;
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
  }[];
  sizes: {
    label: string;
    available: boolean;
  }[];
  image: string[];
  details: string[];
}
