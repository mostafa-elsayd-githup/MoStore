import { useCartStore } from "../../../store/cardStore";
import { ShoppingBag } from "lucide-react";
import EmptyList from "../../common/EmptyList";
import { formatCurrency } from "../../../utils/formatters";
import { Link } from "react-router";
import { getCartSummary } from "../../../utils/PriceSummation";
import ProductDetailsComponent from "./ProductDetailsComponent";

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
          <ShoppingBag className="text-white w-25 h-25 p-2 rounded-full bg-linear-to-r from-(--color-main) via-( --bg-searchinput) to-(--text-footer) to-60% animate-pulse" />
        }
      />
    );
  }
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ProductDetailsComponent />
      <div className="bg-linear-to-br from-(--bg-card) to-(--bg-primary) rounded-3xl border border-(--border_card) shadow-(--shadow) p-6 flex justify-around flex-col gap-4 ml-4">
        <h3 className="text-xl font-bold! text-(--text-h) border-b border-(--border_card) pb-4">
          ملخص الطلب
        </h3>
        <div className="flex flex-col gap-3.5 text-md">
          <div className="flex items-center justify-between text-(--text-normal)">
            <span>إجمالي المنتجات ({totalQuantity} قطع)</span>
            <span className="font-bold text-(--text-h)">
              {formatCurrency(totalPrice)}
            </span>
          </div>
          <div className="flex items-center justify-between text-(--text-normal)">
            <span>مصاريف الشحن</span>
            <span className="font-bold text-(--color-primary)">مجاناً</span>
          </div>
          {totalDiscount > 0 && (
            <div className="flex items-center justify-between text-(--text-normal)">
              <span>قيمة الخصم</span>
              <span className="font-bold text-(--color-sale)">
                {formatCurrency(totalDiscount)}
              </span>
            </div>
          )}
        </div>
        <span className="h-px bg-(--border_card) w-full"></span>
        <div className="flex items-center justify-between ">
          <span className="font-bold text-(--text-h)">الإجمالي النهائي</span>
          <span className="text-2xl font-black text-(--color-primary)">
            {formatCurrency(totalPrice - totalDiscount)}
          </span>
        </div>
        <Link
          to={"/checkout"}
          className=" w-full py-3.5 px-6 rounded-2xl bg-(--color-primary) text-(--color-main) font-bold shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.01] cursor-pointer text-center"
        >
          إتمام الطلب والدفع
        </Link>
      </div>
    </section>
  );
}

export default CartComponent;
