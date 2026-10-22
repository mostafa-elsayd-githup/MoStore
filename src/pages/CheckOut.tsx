import PageHeader from "../components/common/PageHeader";
import ProductDetailsComponent from "../components/features/cart/ProductDetailsComponent";
import { useCartStore } from "../store/cardStore";
import CheckoutForm from "../components/Chechout/CheckoutForm";

function CheckOutPage() {
  const { cart } = useCartStore((item) => item);  
  return (
    <section className="container m-auto">
      <div className="relative text-start mx-4 mb-10 pb-4">
        <PageHeader numberOfItems={cart.length} />
        <hr className="absolute bottom-0 left-0 w-full  text-(--border_card)" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProductDetailsComponent />
        <CheckoutForm />
      </div>
    </section>
  );
}

export default CheckOutPage;
