import type { BaseProduct } from "../ProductsType/Product";

export interface WishlistType {
  Wishlist: AddToWishlist[];
  ToggleWishlist: (
    product: AddToWishlist,
  ) => "added" | "removed" ;
}

export type AddToWishlist = BaseProduct;