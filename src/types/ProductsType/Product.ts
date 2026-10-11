export type ProductTypeProp = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  type: string;
  gender: string;
  product_type: string;
  category: string;
  image: string;
  image_Hover: string;
  image3: string;
  image4: string;
  video: string;
  made: string;
  color: number;
  Inventory: number;
  price: number;
  oldprice: number;
  quantity: number;
  rating: number;
  stock: number;
  watched: number;
  url: {
    id: string;
    img_url: string;
  }[];

  sizes: string[];
};
export interface ErrorMessageProps {
  status?: number | string;
  message?: string;
  onRetry?: () => void;
}
export interface ApiErrorResponse {
  message?: string;
  status?: number;
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
}