import { useCartStore } from "../store/cardStore";
import CartComponent from "../components/features/cart/CartComponent";
import PageHeader from "../components/common/PageHeader";

function CartPage() {
  const cartItem = useCartStore((state) => state.cart);
  return (
    <section className="container m-auto">
      <div className="relative text-start mx-4 mb-10 pb-4">
        <PageHeader numberOfItems={cartItem.length} />
        <span className="absolute bottom-0 left-0 w-full border-b border-(--border_card)" />
      </div>
      <div>
        <CartComponent />
      </div>
    </section>
  );
}

export default CartPage;
