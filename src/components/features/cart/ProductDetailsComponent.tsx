import { Link } from "react-router";
import { useCartStore } from "../../../store/cardStore";
import { DiscountCalc, formatCurrency } from "../../../utils/formatters";
import { Trash2 } from "lucide-react";

function ProductDetailsComponent() {
  const { cart, clearAll, deleteProduct } = useCartStore();
  return (
    <section>
      <div className="bg-linear-to-br from-(--bg-card) to-(--bg-primary)  rounded-3xl border border-(--border_card) shadow-(--shadow) p-6 flex justify-around flex-col gap-4 ml-4">
        <div className=" flex flex-col gap-4 px-4 pb-12 max-h-120 overflow-y-auto">
          {cart.map((product) => {
            const imageUrl = Array.isArray(product.image)
              ? product.image[0]
              : product.image;
            return (
              <div
                key={`${product.id}-${product.sizes || ""}-${product.colors?.name || ""}`}
                className="relative group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 p-4 rounded-3xl border border-(--border_card) bg-linear-to-br from-(--bg-card) to-(--bg-primary) shadow-(--shadow-navbar) transition-all duration-300 hover:-translate-y-0.5 hover:shadow-(--shadow)"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-2xl bg-(--bg-primary) border border-(--border_card)">
                  <img
                    src={imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.oldPrice && (
                    <span className="absolute top-2 right-2 rounded-full bg-(--bg-badge) px-2 py-0.5 text-[10px] font-bold text-(--color-main) shadow-sm">
                      {DiscountCalc(product.price, product.oldPrice)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 min-w-0 gap-2.5 text-start w-full hover:underline">
                  <Link to={`/productdetails/${product.id}`} className="text-base sm:text-lg font-bold leading-snug text-(--text-h) line-clamp-1">
                    {product.title}
                  </Link>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {product.sizes && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-(--border-color) bg-(--bg-main) text-(--text-normal)">
                        المقاس
                        <strong className="font-bold text-(--text-h)">
                          {product.sizes}
                        </strong>
                      </span>
                    )}
                    {product.colors && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-(--border-color) bg-(--bg-main) text-(--text-normal)">
                        اللون
                        <span
                          className="inline-block w-3.5 h-3.5 rounded-full border border-(--border-color)"
                          style={{
                            backgroundColor:
                              typeof product.colors === "string"
                                ? product.colors
                                : product.colors?.hex,
                          }}
                        />
                        <strong className="font-bold text-(--text-h)">
                          {typeof product.colors === "object"
                            ? product.colors?.name
                            : ""}
                        </strong>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-(--border-color) bg-(--bg-main) text-(--text-normal)">
                      الكمية
                      <strong className="font-bold text-(--text-h)">
                        {product.quantity ?? 1}
                      </strong>
                    </span>
                  </div>
                  {(product.quantity ?? 1) > 1 && (
                    <div className="flex items-baseline gap-2 text-xs text-(--text-normal)">
                      <span>سعر القطعة</span>
                      <span className="font-semibold text-(--text-h)">
                        {formatCurrency(product.price)}
                      </span>
                      {product.oldPrice ? (
                        <span className="line-through text-(--text-normal)/60">
                          {formatCurrency(product.oldPrice)}
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto shrink-0 sm:ps-5 sm:border-s border-(--border_card)">
                  <div className="flex flex-col sm:items-end text-start sm:text-end leading-tight">
                    {(product.quantity ?? 1) > 1 ? (
                      <>
                        <span className="text-[11px] font-medium text-(--text-normal)">
                          الإجمالي · {product.quantity} قطع
                        </span>
                        <span className="text-xl font-black text-(--color-primary)">
                          {formatCurrency(product.price * product.quantity)}
                        </span>
                        {product.oldPrice ? (
                          <span className="text-xs font-medium text-(--text-normal)/60 line-through">
                            {formatCurrency(
                              product.oldPrice * product.quantity,
                            )}
                          </span>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <span className="text-xl font-black text-(--color-primary)">
                          {formatCurrency(product.price)}
                        </span>
                        {product.oldPrice ? (
                          <span className="text-xs font-medium text-(--text-normal)/60 line-through">
                            {formatCurrency(product.oldPrice)}
                          </span>
                        ) : null}
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => deleteProduct(product)}
                    aria-label="إزالة من العربة"
                    className="absolute top-4 left-4 sm:static flex h-10 w-10 items-center justify-center rounded-2xl border border-(--border_card) bg-(--bg-card) text-(--color-sale) shadow-sm transition-all hover:bg-(--color-sale) hover:text-white hover:border-transparent cursor-pointer shrink-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 1 && (
          <button
            onClick={() => clearAll()}
            className="w-full py-3.5 px-6 rounded-2xl bg-(--color-primary) text-(--color-main) font-bold shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.01] cursor-pointer text-center"
          >
            <span>مسح الكل</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default ProductDetailsComponent;
