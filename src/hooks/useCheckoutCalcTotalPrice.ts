import { useCartStore } from "../store/cardStore";
import { getCartSummary } from "../utils/PriceSummation";

export const useTotalPrice = () => {
  const { cart } = useCartStore();
  const { totalPrice, totalQuantity } = getCartSummary({ cartItem: cart });
  return { totalPrice, totalQuantity, item: cart };
};
