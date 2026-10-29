import PageHeader from "../components/common/PageHeader";
import ProductDetailsComponent from "../components/features/cart/ProductDetailsComponent";
import { useCartStore } from "../store/cardStore";
import CheckoutForm from "../components/Chechout/CheckoutForm";
import { motion, type Variants } from "framer-motion";
import { slideInRight, slideInLeft } from "../animations/variants";
function CheckOutPage() {
  const { cart } = useCartStore((item) => item);
  return (
    <section className="container m-auto">
      <div >
        <PageHeader numberOfItems={cart.length} />
        <hr className="absolute bottom-0 left-0 w-full  text-(--border_card)" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInRight as Variants}
          viewport={{ once: true }}
        >
          <ProductDetailsComponent />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft as Variants}
          viewport={{ once: true }}
        >
          <CheckoutForm />
        </motion.div>
      </div>
    </section>
  );
}

export default CheckOutPage;
