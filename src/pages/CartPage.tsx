import { useCartStore } from "../store/cardStore";
import CartComponent from "../components/features/cart/CartComponent";

function CartPage() {
  const cartItem = useCartStore((state) => state.cart);

  return (
    <section className="container m-auto">
      <div className="relative text-start mx-4 mb-10 pb-4">
        <div className="flex items-baseline gap-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-(--text-h)">
            عربة التسوق
          </h1>
          <span className="text-sm font-medium text-(--color-secondary) bg-(--border_card)/50 px-3 py-1 rounded-full">
            {cartItem.length} {cartItem.length === 1 ? "عنصر" : "عناصر"}
          </span>
        </div>
        <span className="absolute bottom-0 left-0 w-full border-b border-(--border_card)" />
      </div>
      <div>
        <CartComponent />
      </div>
    </section>
  );
}

export default CartPage;
