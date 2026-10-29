import { useCartStore } from "../../../store/cardStore";
import { ShoppingBag } from "lucide-react";
import EmptyList from "../../common/EmptyList";
import { formatCurrency } from "../../../utils/formatters";
import { Link } from "react-router";
import { getCartSummary } from "../../../utils/PriceSummation";
import ProductDetailsComponent from "./ProductDetailsComponent";
import { slideInRight, slideInLeft } from "../../../animations/variants";
import { motion, type Variants } from "framer-motion";
function CartComponent() {
  const cartItem = useCartStore((state) => state.cart);

  const { totalPrice, totalQuantity, totalDiscount } = getCartSummary({
    cartItem,
  });
  if (!cartItem.length) {
    return (
      <EmptyList
        namePage="عربة التسوق"
        pageIcon={
          <ShoppingBag className=" w-18 h-18 md:w-25 md:h-25 p-2 rounded-3xl text-(--bg-feedback)" />
        }
      />
    );
  }
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-3">
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
        className="bg-linear-to-br from-(--bg-card) to-(--bg-primary) rounded-3xl border border-(--bg-feedback)/20 shadow-xl p-6 flex justify-around flex-col gap-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 left-0 h-1 bg-linear-to-l from-(--bg-feedback) to-transparent" />
        <h3 className="text-xl font-bold text-(--text-h) border-b border-(--border_card) pb-4 flex items-center justify-between">
          <span>ملخص الطلب</span>
          <span className="w-2.5 h-2.5 rounded-full bg-(--bg-feedback) animate-pulse" />
        </h3>
        <div className="flex flex-col gap-3.5 text-md">
          <div className="flex items-center justify-between text-(--text-normal)">
            <span>
              إجمالي المنتجات{" "}
              <span className="text-(--bg-feedback)">
                ( {totalQuantity} قطع )
              </span>
            </span>
            <span className="font-bold text-(--text-h)">
              {formatCurrency(totalPrice)}
            </span>
          </div>
          <div className="flex items-center justify-between text-(--text-normal)">
            <span>مصاريف الشحن</span>
            <span className="font-bold text-(--bg-feedback) bg-(--bg-feedback)/10 px-2.5 py-0.5 rounded-full text-xs">
              مجاناً
            </span>
          </div>
          {totalDiscount > 0 && (
            <div className="flex items-center justify-between text-(--text-normal)">
              <span>قيمة الخصم</span>
              <span className="font-bold text-(--bg-feedback)">
                {formatCurrency(totalDiscount)}
              </span>
            </div>
          )}
        </div>
        <span className="h-px bg-linear-to-r from-transparent via-(--bg-feedback)/30 to-transparent w-full my-1"></span>
        <div className="flex items-center justify-between bg-(--bg-feedback)/5 p-3.5 rounded-2xl border border-(--bg-feedback)/15">
          <span className="font-bold text-(--text-h)">الإجمالي النهائي</span>
          <span className="text-2xl font-black text-(--bg-feedback)">
            {formatCurrency(totalPrice - totalDiscount)}
          </span>
        </div>
        <Link
          to={"/checkout"}
          className="w-full py-3.5 px-6 rounded-2xl bg-(--bg-feedback) text-white font-bold shadow-lg shadow-orange-500/25 transition-all duration-300 hover:opacity-95 hover:scale-[1.02] active:scale-95 cursor-pointer text-center flex items-center justify-center gap-2"
        >
          <span>إتمام الطلب والدفع</span>
        </Link>
      </motion.div>
    </section>
  );
}

export default CartComponent;
