import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AddToWishlist, WishlistType } from "../types/storeType/WishlistType";


export const useWishlistStore = create<WishlistType>()(
  persist(
    (set) => ({
      Wishlist: [],
      ToggleWishlist: (product: AddToWishlist) => {
        let actionResult: "added" | "removed" = "added";

        set((state) => {
          const exists = state.Wishlist.some((item) => item.id === product.id);

          if (exists) {
            actionResult = "removed";
            return {
              Wishlist: state.Wishlist.filter((item) => item.id !== product.id),
            };
          } else {
            actionResult = "added";
            return {
              Wishlist: [...state.Wishlist, product],
            };
          }
        });
        return actionResult;
      },
    }),

    {
      name: "wishlist-store",
    },
  ),
);
