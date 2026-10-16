import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { cartPropType, cartType } from "../types/storeType/CardType";

export const useCartStore = create<cartPropType>()(
  persist(
    (set) => ({
      cart: [],
      toggleCart: (product: cartType) => {
        let actionResult: "added" | "removed" | "incremented" = "added";

        set((state) => {
          const existsIndex = state.cart.findIndex(
            (item) => item.id === product.id && item.sizes === product.sizes,
          );

          if (existsIndex > -1) {
            const updatedCart = [...state.cart];
            updatedCart[existsIndex] = {
              ...updatedCart[existsIndex],
              quantity:
                (updatedCart[existsIndex].quantity || 1) +
                (product.quantity || 1),
            };
            actionResult = "incremented";
            return { cart: updatedCart };
          }

          actionResult = "added";
          return {
            cart: [
              ...state.cart,
              { ...product, quantity: product.quantity || 1 },
            ],
          };
        });

        return actionResult;
      },
      deleteProduct: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.id !== product.id || item.sizes !== product.sizes,
          ),
        })),
      clearAll: () =>
        set((state) => ({
          cart: (state.cart = []),
        })),
    }),
    {
      name: "cart-store",
    },
  ),
);
