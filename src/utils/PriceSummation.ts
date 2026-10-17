import type { cartType } from "../types/storeType/CardType";
export const getCartSummary = ({ cartItem }: { cartItem: cartType[] }) => {
  return cartItem.reduce(
    (total, product) => {
      const quentity = product.quantity ?? 1;
      const price = product.price;
      const hasDiscount = product.oldPrice && product.oldPrice > price;
      const itemDiscount = hasDiscount
        ? (product.oldPrice - price) * quentity
        : 0;
      return {
        totalPrice: total.totalPrice + product.price * quentity,
        totalQuantity: total.totalQuantity + quentity,
        totalDiscount: total.totalDiscount + itemDiscount, 
    };
    },
    { totalPrice: 0, totalQuantity: 0, totalDiscount: 0},
  );
};
