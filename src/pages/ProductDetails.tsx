import { useState } from "react";
import {
  Heart,
  Star,
  Truck,
  Banknote,
  RotateCcw,
  Minus,
  Plus,
  ArrowRight,
  ChevronDown,
  Share2,
  Check,
  ShoppingBag,
  X,
} from "lucide-react";
import { DiscountCalc, formatCurrency } from "../utils/formatters";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GetProductById_productDetils } from "../services/GetProduct";
import { useWishlistStore } from "../store/WishlistStore";
import type { AddToWishlist } from "../types/storeType/WishlistType";
import ProductSkeleton from "../components/common/Skeletons/DynamicFile";
import { useCartStore } from "../store/cardStore";
import type { cartType } from "../types/storeType/CardType";
import { toast } from "sonner";
import type { ProductDetailsType } from "../types/ProductsType/productDetails";
import NoFoundProducts from "../components/common/NotFoundproduct";
const perks = [
  { icon: Truck, title: "Free Delivery", text: "On orders over EGP 999" },
  {
    icon: Banknote,
    title: "Cash On Delivery",
    text: "Standard courier, 4 to 5 days",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    text: "Hassle free within 30 days",
  },
];

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isPending } = useQuery({
    queryKey: [`produstdetails`, id],
    queryFn: async ({ signal }) => {
      if (!id) {
        throw new Error("Product Not Found");
      }
      return await GetProductById_productDetils({ productId: id, signal });
    },
  });

  const wishlistItems = useWishlistStore((state) => state.Wishlist);
  const addToCard = useCartStore((state) => state.toggleCart);
  const toggleWishlist = useWishlistStore((state) => state.ToggleWishlist);

  const product: ProductDetailsType = {
    brand: "MOstore",
    id: data?.id ?? 0,
    type: data?.type ?? "",
    category: data?.category ?? "",
    title: data?.title ?? "",
    price: data?.price ?? 0,
    oldPrice: data?.oldprice ?? 0,
    rating: data?.rating ?? 0,
    reviews: data?.reviews ?? 0,
    description: data?.description ?? "",
    colors:
      (data &&
        data?.colors.map((item) => ({
          id: item.id,
          name: item.name,
          hex: item.hex,
        }))) ||
      [],
    sizes:
      (data &&
        data?.sizes.map((item) => ({
          label: item.label,
          available: item.available,
        }))) ||
      [],
    image: [
      data?.image ?? "",
      data?.image_Hover ?? "",
      data?.image3 || data?.video || "",
      data?.image4 || "",
    ].filter(Boolean),
    details: (data && data.details.map((item) => item)) || [],
  };
  const isLiked = wishlistItems.some((item) => item.id === product.id);
  const discount = DiscountCalc(product.price, product.oldPrice);

  const [activeImg, setActiveImg] = useState(1);
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState({ id: 0, name: "", hex: "" });
  const [qty, setQty] = useState(1);
  const [openAcc, setOpenAcc] = useState<string | null>("description");
  const [showError, setShowError] = useState(false);

  const CardProduct: cartType = {
    ...product,
    colors: { ...color },
    sizes: size ?? "",
    quantity: qty,
  };
  const handleAdd = () => {
    if (!size || !color.hex) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const result = addToCard(CardProduct);

    if (result === "added") {
      toast.success(
        `تمت اضافه ( ${product.title} ) بنجاح إلى حقيبة التسوق ! 🛍️`,
        {
          icon: <ShoppingBag size={20} />,
          duration: 4000,
        },
      );
    } else if (result === "incremented") {
      toast.info("المنتج موجود مسبقاً بالسلة، وتم زيادة الكميه ( +1 )", {
        duration: 4000,
      });
    }
  };
  const ToggleSize = ({ label }: { label: string }) => {
    if (size === label) {
      setSize("");
      return;
    }
    setSize(label);
    setShowError(false);
  };
  const handleAddtoWishlist = (product: AddToWishlist) => {
    const result = toggleWishlist(product);
    if (result === "added") {
      toast.success(
        `تمت الإضافة ( ${product.title} ) بنجاح إلى قائمه المفضله !`,
        {
          icon: <ShoppingBag size={20} />,
          duration: 5000,
        },
      );
    } else if (result === "removed") {
      toast.info(`تمت ازاله ( ${product.title} ) من قائمه المفضله !`, {
        icon: <X size={20} />,
        duration: 5000,
      });
    }
  };
  const wishlistProduct: AddToWishlist = {
    ...product,
    image: product.image[0] ?? "",
    image_Hover: product.image[1] ?? "",
    image3: product.image[2] ?? "",
    image4: product.image[3] ?? "",
    oldprice: product.oldPrice,
    video: "",
  };
  if (!data) {
    return <NoFoundProducts />;
  }
  return (
    <section className="relative isolate overflow-hidden bg-(--bg-main) text-(--text-h)">
      {isPending && <ProductSkeleton />}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-40 -inset-s-40 -z-10 h-130 w-130 rounded-full blur-3xl `}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute top-1/3 -inset-e-48 -z-10 h-120 w-120 rounded-full blur-3xl  duration-400 transition-all
          ${
            isLiked
              ? `bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-sale)_22%,transparent),transparent_70%)]`
              : `bg-[radial-gradient(circle,color-mix(in_srgb,var(--nav-line-glow)_35%,transparent),transparent_70%)]`
          }`}
      />

      <div className="container mx-auto px-4 py-8 pb-28 lg:pb-12">
        <nav className="mb-6 flex items-center gap-2 text-xs text-(--text-normal)">
          <span className="hover:text-(--text-h) cursor-pointer transition-colors">
            Home
          </span>
          <span>/</span>
          <span className="hover:text-(--text-h) cursor-pointer transition-colors">
            {product.type}
          </span>
          <span>/</span>
          <span className="text-(--text-h) font-medium line-clamp-1">
            {product.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start">
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex sm:flex-col gap-3 sm:w-20 shrink-0">
              {product.image.map((src, i) => {
                const isVideo = src?.endsWith(".mp4") || src?.endsWith("video");
                return (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative aspect-square w-20 sm:w-full overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      activeImg === i
                        ? "border-(--color-primary) shadow-md scale-[1.03]"
                        : "border-(--border_card) opacity-70 hover:opacity-100"
                    }`}
                  >
                    {isVideo ? (
                      <video
                        src={src}
                        className="h-full w-full object-cover pointer-events-none"
                      />
                    ) : (
                      <img
                        src={src}
                        alt={`View ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="group relative flex-1 overflow-hidden rounded-4xl border border-(--border_card) bg-linear-to-b from-(--bg-card) to-(--bg-primary) p-2 shadow-(--shadow-navbar)">
              {product.oldPrice ? (
                <span className="absolute top-7 inset-s-7 z-10 rounded-full bg-(--bg-badge) px-3.5 py-1.5 text-xs font-bold text-(--color-main) shadow-md">
                  {discount}
                </span>
              ) : null}

              <div className="absolute top-7 inset-e-7 z-10 flex flex-col gap-2">
                <button
                  onClick={() => handleAddtoWishlist(wishlistProduct)}
                  aria-label="Add to wishlist"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border_card) bg-(--bg-card)/80 backdrop-blur-md shadow-sm transition-transform cursor-pointer"
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
                <button
                  aria-label="Share"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border_card) bg-(--bg-card)/80 backdrop-blur-md shadow-sm transition-transform  cursor-pointer text-(--text-h)"
                >
                  <Share2 size={17} />
                </button>
              </div>
              {product.image[activeImg]?.endsWith(".mp4") ||
              product.image[activeImg]?.includes("video") ? (
                <video
                  src={product.image[activeImg]}
                  className="h-full w-full object-cover rounded-3xl"
                  loop
                  autoPlay
                />
              ) : (
                <img
                  src={product.image[activeImg]}
                  alt="Main product view"
                  className="h-full w-full object-cover rounded-3xl"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 text-start">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-(--border_card) bg-(--bg-card) px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-(--color-secondary)">
                  {product.brand}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-secondary)">
                  {product.type}
                </span>
              </div>

              <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight tracking-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={15}
                      className={
                        s <= Math.round(product.rating)
                          ? "fill-(--rating-color) text-(--rating-color)"
                          : "text-(--border-color)"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">{product.rating}</span>
                <span className="text-xs text-(--text-normal)">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-(--border_card) bg-linear-to-br from-(--bg-card) via-(--bg-card) to-(--bg-primary) p-5">
              <div
                aria-hidden
                className={`absolute -top-10 -inset-e-10 h-32 w-32 rounded-full blur-2xl duration-400 transition-all
                  ${
                    isLiked
                      ? `bg-[color-mix(in_srgb,var(--color-sale)_25%,transparent)]`
                      : `bg-[radial-gradient(circle,color-mix(in_srgb,var(--nav-line-glow)_35%,transparent),transparent_70%)]`
                  }`}
              />
              <div className="relative flex flex-wrap items-end gap-3">
                {product.oldPrice !== 0 ? (
                  <>
                    <span className="text-3xl font-black bg-linear-to-r from-(--color-sale) to-[color-mix(in_srgb,var(--color-sale)_55%,var(--text-h))] bg-clip-text text-transparent">
                      {formatCurrency(product.price)}
                    </span>
                    <span className="pb-1 text-sm font-medium text-(--text-normal)/60 line-through">
                      {formatCurrency(product.oldPrice)}
                    </span>
                    <span className="mb-1 rounded-full bg-linear-to-r from-(--color-sale) to-[color-mix(in_srgb,var(--color-sale)_60%,#000)] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-sm">
                      {discount}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-black bg-linear-to-r from-(--color-secondary) to-(--rating-color) bg-clip-text text-transparent">
                    {formatCurrency(product.price)}
                  </span>
                )}
              </div>
              {product.oldPrice ? (
                <p className="relative mt-3 text-xs text-(--text-normal)">
                  You save {formatCurrency(product.oldPrice - product.price)} ·
                  Tax included
                </p>
              ) : null}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Colour</span>
                <span className="text-(--text-normal)">
                  {product.colors.find((c) => c.id === color.id)?.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c)}
                    aria-label={c.name}
                    className={`relative h-9 w-9 rounded-full border-2 p-0.5 transition-all cursor-pointer ${
                      color.id === c.id
                        ? "border-(--color-primary)"
                        : "border-(--border_card)"
                    }`}
                  >
                    <span
                      className="block h-full w-full rounded-full"
                      style={{ backgroundColor: c.hex }}
                    />
                    {color.id === c.id && (
                      <Check
                        size={14}
                        className="absolute inset-0 m-auto text-white drop-shadow"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Select size</span>
                <button className="text-xs text-(--text-normal) underline underline-offset-4 hover:text-(--text-h) transition-colors cursor-pointer">
                  Size guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map(({ label, available }) => (
                  <button
                    key={label}
                    disabled={!available}
                    onClick={() => ToggleSize({ label })}
                    className={`relative h-12 min-w-14 rounded-2xl border px-4 text-sm font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed ${
                      size === label
                        ? "border-transparent bg-linear-to-br from-(--text-h) to-(--color-secondary) text-(--color-main) shadow-lg scale-105"
                        : available
                          ? "border-(--border-color) bg-(--bg-card) hover:border-(--text-h) hover:-translate-y-0.5"
                          : "border-(--border-dis) bg-(--bg-dis) text-(--text-normal)/40 overflow-hidden"
                    }`}
                  >
                    {label}
                    {!available && (
                      <span className="absolute inset-0 m-auto h-px w-[140%] translate-x-[-15%] rotate-[-35deg] bg-(--text-normal)/40" />
                    )}
                  </button>
                ))}
              </div>
              {showError && (
                <p className="text-xs font-medium text-(--color-sale)">
                  Please select a size first and Color
                </p>
              )}
            </div>
            <div className="flex items-stretch gap-3">
              <div className="flex items-center rounded-2xl border border-(--border-color) bg-(--bg-card)">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-14 w-11 items-center justify-center text-(--text-normal) hover:text-(--text-h) transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center text-sm font-bold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-14 w-11 items-center justify-center text-(--text-normal) hover:text-(--text-h) transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={() => handleAdd()}
                className="group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-linear-to-br from-(--text-h) via-(--text-h) to-(--color-secondary) px-6 text-sm font-bold uppercase tracking-wider text-(--color-main) shadow-(--shado) transition-all hover:-translate-y-0.5 hover:shadow-(--shadow) active:translate-y-0 cursor-pointer"
              >
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                <span className="relative">Add to bag</span>
                <ArrowRight
                  size={18}
                  className="relative transition-transform group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1"
                />
              </button>

              <button
                onClick={() => handleAddtoWishlist(wishlistProduct)}
                aria-label="Wishlist"
                className="flex w-14 items-center justify-center rounded-2xl border border-(--border-color) bg-(--bg-card) transition-all hover:border-(--color-sale) hover:-translate-y-0.5 cursor-pointer"
              >
                <Heart
                  size={20}
                  className={
                    isLiked
                      ? "fill-(--color-sale) text-(--color-sale)"
                      : "text-(--text-h)"
                  }
                />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {perks.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-(--border_card) bg-linear-to-b from-(--bg-card) to-(--bg-primary) p-4 transition-transform hover:-translate-y-1"
                >
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-(--bg-main) border border-(--border_card)">
                    <Icon size={17} className="text-(--text-h)" />
                  </span>
                  <p className="text-xs font-bold">{title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-(--text-normal)">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="divide-y divide-(--border-color) overflow-hidden rounded-3xl border border-(--border_card) bg-(--bg-card)">
              {[
                {
                  id: "description",
                  label: "Description",
                  body: <p>{product.description}</p>,
                },
                {
                  id: "details",
                  label: "Details",
                  body: (
                    <ul className="space-y-2">
                      {product.details.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-(--rating-color)" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  ),
                },
              ].map(({ id, label, body }) => (
                <div key={id}>
                  <button
                    onClick={() => setOpenAcc(openAcc === id ? null : id)}
                    className="flex w-full items-center justify-between px-5 py-4 text-sm font-semibold cursor-pointer"
                  >
                    {label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openAcc === id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openAcc === id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-sm leading-relaxed text-(--text-normal)">
                        {body}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-(--border_card) bg-(--bg-navbar)/90 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="leading-tight">
          {product.oldPrice !== 0 ? (
            <>
              <p className="text-lg font-black text-(--color-sale)">
                {formatCurrency(product.price)}
              </p>
              <p className="text-[11px] text-(--text-normal) line-through">
                {formatCurrency(product.oldPrice)}
              </p>
            </>
          ) : (
            <p className="text-lg  bg-linear-to-r from-(--color-secondary) to-(--rating-color) bg-clip-text text-transparent">
              {formatCurrency(product.price)}
            </p>
          )}
        </div>
        <button
          onClick={() => addToCard(CardProduct)}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-linear-to-br from-(--text-h) to-(--color-secondary) py-3.5 text-sm font-bold uppercase tracking-wider text-(--color-main) shadow-lg cursor-pointer"
        >
          Add to bag
          <ArrowRight size={16} className="rtl:rotate-180" />
        </button>
      </div>
    </section>
  );
}
