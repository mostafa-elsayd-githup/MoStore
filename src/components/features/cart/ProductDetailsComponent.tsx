import { Link } from "react-router";
import { useCartStore } from "../../../store/cardStore";
import { DiscountCalc, formatCurrency } from "../../../utils/formatters";
import { ShoppingBag, Trash2 } from "lucide-react";
import EmptyList from "../../common/EmptyList";
import { usePageTitle } from "../../../hooks/usePageTitle";

function ProductDetailsComponent() {
  const { pageTitle } = usePageTitle();
  const { cart, clearAll, deleteProduct } = useCartStore();
  return (
<div className="bg-linear-to-br from-(--bg-card) to-(--bg-primary) rounded-3xl border border-(--border_card) shadow-(--shadow) p-6 flex flex-col min-h-100 max-h-132 overflow-hidden">       <div className={`flex flex-col gap-4 flex-1 ${!cart.length ? "justify-center" : "overflow-y-auto pe-2"}`}>
          {!cart.length && (
            <EmptyList
              namePage={pageTitle}
              pageIcon={
                <ShoppingBag className="text-white w-25 h-25 p-2 rounded-full bg-linear-to-r from-(--color-main) via-( --bg-searchinput) to-(--text-footer) to-60% animate-pulse" />
              }
            />
          )}
          {cart.map((product) => {
            const imageUrl = Array.isArray(product.image)
              ? product.image[0]
              : product.image;
            return (
             <div
          key={`${product.id}-${product.sizes || ""}-${product.colors?.name || ""}`}
          className="relative group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 p-4 rounded-3xl border border-(--border_card) bg-linear-to-br from-(--bg-card) to-(--bg-primary) shadow-(--shadow-navbar) transition-all duration-300 hover:shadow-(--shadow) overflow-hidden shrink-0"
        >
                <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-(--bg-feedback)/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-2xl bg-(--bg-primary) border border-(--border_card)">
                  <img
                    src={imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.oldPrice && (
                    <span className="absolute top-2 right-2 rounded-md bg-(--bg-feedback) px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                      {DiscountCalc(product.price, product.oldPrice)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 gap-2.5 text-start w-full">
                  <Link
                    to={`/productdetails/${product.id}`}
                    className="text-sm md:text-md lg:text-lg font-bold leading-snug text-(--text-h) line-clamp-1 hover:text-(--bg-feedback) transition-colors"
                  >
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
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-(--bg-feedback)/30 bg-(--bg-feedback)/5 text-(--bg-feedback) font-medium">
                      الكمية
                      <strong className="font-bold">
                        {product.quantity ?? 1}
                      </strong>
                    </span>
                  </div>

                  {(product.quantity ?? 1) > 1 && (
                    <div className="flex items-baseline gap-2 text-xs text-(--text-normal)">
                      <span>سعر القطعة:</span>
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
                        <span className="text-xl font-black text-(--bg-feedback)">
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
                        <span className="text-xl font-black text-(--bg-feedback)">
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
                    className="absolute top-4 left-4 sm:static flex h-10 w-10 items-center justify-center rounded-2xl border border-(--border_card) bg-(--bg-card) text-(--color-sale) shadow-sm transition-all hover:bg-(--bg-feedback) hover:text-white hover:border-transparent cursor-pointer shrink-0"
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
              className="w-full py-3.5 px-6 rounded-2xl bg-(--bg-feedback) text-white font-bold shadow-lg shadow-orange-500/20 transition-all duration-300 hover:opacity-95 hover:scale-[1.01] cursor-pointer text-center mt-4"
            >
              <span>مسح الكل</span>
            </button>
          )}
      </div>
 
  );
}

export default ProductDetailsComponent;
