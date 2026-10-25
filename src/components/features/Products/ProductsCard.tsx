import { DiscountCalc, formatCurrency } from "../../../utils/formatters";
import { Eye, Heart, Star, X } from "lucide-react";
import { useState } from "react";
import type {
  BaseProduct,
  ProductCardItem,
} from "../../../types/ProductsType/Product";
import { Link } from "react-router";
import { useWishlistStore } from "../../../store/WishlistStore";
import {
  errorToastMessage,
  successToastMessage,
} from "../../../utils/ShowToastMessage";

function ProductCard({ item }: { item: ProductCardItem }) {
  const product: BaseProduct = {
    brand: "MOstore",
    id: item?.id,
    type: item.type,
    title: item?.title,
    price: item?.price,
    oldprice: item?.oldprice,
    rating: item?.rating,
    reviews: item?.reviews,
    image: item?.image,
    category: item.category ?? "",
    image_Hover: item.image_Hover ?? item.image,
    image3: item.image3 ?? "",
    image4: item.image4 ?? "",
    video: "",
  };
  const [selectedImg, setSelectedImg] = useState<string>(product.image);
  const AddToWishlistItrem = useWishlistStore((state) => state.ToggleWishlist);
  const wishlistItems = useWishlistStore((state) => state.Wishlist);
  const isLiked = wishlistItems.some((product) => product.id === item.id);
  const handleAdd = () => {
    const result = AddToWishlistItrem(product);
    if (result === "added") {
      successToastMessage(
        `تمت إضافه إلى المفضلة`,
        <Heart size={20} className="text-red-500 fill-red-500" />,
      );
    } else if (result === "removed") {
      errorToastMessage(
        `تمت إزالة  من المفضلة `,
        <X size={20} />,
      );
    }
  };
  return (
    <div
      className="group relative bg-(--bg-card) rounded-3xl border border-(--border_card) overflow-hidden hover:shadow-(--shadow)  transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setSelectedImg(product.image_Hover)}
      onMouseLeave={() => setSelectedImg(product.image)}
    >
      <div className="relative p-2 aspect-square">
        {item?.oldprice && (
          <span className="absolute top-6 left-6 z-20 bg-(--bg-badge) text-(--color-main) text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {DiscountCalc(item.price, item.oldprice)}
          </span>
        )}
        <button
          onClick={() => handleAdd()}
          className="absolute cursor-pointer top-6 right-6 z-20 w-9 h-9 bg-(--bg-card) border border-(--border_card) rounded-full flex items-center justify-center text-(--text-h) hover:scale-110 transition-transform shadow-sm"
        >
          <Heart
            size={18}
            className={
              isLiked
                ? "fill-(--color-sale) text-(--color-sale)"
                : "text-(--text-h)"
            }
          />
        </button>

        <img
          className="w-full h-full object-cover rounded-2xl transition-all duration-500"
          src={selectedImg}
          alt={item.title}
        />
      </div>

      <div className="px-3 pb-5 pt-2 flex flex-col grow justify-between text-start gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-(--color-secondary) tracking-wider uppercase">
              {item.type}
            </span>
            <span className="text-xs text-(--text-normal)/70">
              {item.product_type}
              {item.made && <span> • {item.made}</span>}
            </span>
          </div>

          <h4 className="text-(--text-h) text-lg font-bold leading-snug hover:underline cursor-pointer line-clamp-1">
            {item.title}
          </h4>

          {item?.rating !== 0 ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= Math.round(item.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-(--text-normal)/30"
                    }
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-(--text-normal)">
                {item.rating}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= Math.round(item.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-(--text-normal)/30"
                    }
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-(--text-normal)">
                {item.rating}
              </span>
            </div>
          )}
        </div>

        {item?.oldprice ? (
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-black text-(--text-h)">
              {formatCurrency(item.price)}
            </span>
            <span className="text-sm font-medium text-(--text-normal)/50 line-through">
              {formatCurrency(item?.oldprice)}
            </span>
            <span className="text-sm font-bold px-2 py-0.5 rounded-lg bg-(--color-sale)/15 text-(--color-sale)">
              {DiscountCalc(item.price, item.oldprice)}
            </span>
          </div>
        ) : (
          <span className="text-2xl font-black text-(--text-h) block">
            {formatCurrency(item.price)}
          </span>
        )}
        {item.url && item.url.length > 0 && (
          <div className="flex items-center gap-2">
            {item.url.map((subItem) => (
              <div
                key={subItem.id}
                className={`cursor-pointer rounded-[5px]  transition-all duration-200 ${
                  selectedImg === subItem.img_url
                    ? "border-(--color-primary) shadow-md"
                    : "border-transparent hover:border-(--border_card)"
                }`}
                onMouseEnter={() => setSelectedImg(subItem.img_url)}
                onMouseLeave={() => setSelectedImg(item.image)}
              >
                <img
                  className="w-8 rounded-[5px] object-cover bg-(--bg-little)"
                  src={subItem.img_url}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}
        <div className="">
          <Link
            to={`/productdetails/${item.id}`}
            className="flex items-center justify-center gap-0.5 bg-transparent border border-(--border_card) text-(--text-h) text-xs font-semibold py-3 px-2 rounded-full hover:bg-(--text-h) hover:text-(--bg-card) transition-all cursor-pointer"
          >
            <Eye size={15} />
            نظرة سريعة
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
