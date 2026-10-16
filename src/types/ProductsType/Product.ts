export interface BaseProduct {
  id: number;
  title: string;
  type: string;
  price: number;
  oldprice?: number;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  image: string;
  image_Hover: string;
  image3: string;
  image4: string;
  video: string;
}
export interface ProductTypeProp extends BaseProduct {
  created_at: string;
  description: string;
  gender: string;
  product_type: string;
  category: string;
  made: string;
  Inventory: number;
  quantity: number;
  stock: number;
  watched: number;
  colors: {
    id: number;
    name: string;
    hex: string;
  }[];
  sizes: {
    label: string;
    available: boolean;
  }[];
  url: {
    id: string;
    img_url: string;
  }[];
  details: string[];
}
export type ProductCardItem = Pick<
  ProductTypeProp,
  "id" | "title" | "type" | "price" | "rating" | "reviews" | "image"
> &
  Partial<
    Pick<
      ProductTypeProp,
      | "oldprice"
      | "category"
      | "brand"
      | "image_Hover"
      | "image3"
      | "image4"
      | "product_type"
      | "made"
      | "url"
    >
  >;
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
export interface propType {
  category?: string;
  productId?: string;
  signal: AbortSignal;
}
export interface EmptyListProps {
  namePage?: string;
  pageIcon?: React.ReactNode;
}
