import { useWishlistStore } from "../store/WishlistStore";
import ProductCard from "../components/features/Products/ProductsCard";
import EmptyList from "../components/common/EmptyList";
import { Heart } from "lucide-react";

function WishlistPage() {
  const WishlistItem = useWishlistStore((state) => state.Wishlist);
  return (
    <section className="container m-auto">
      <div className="relative text-start mx-4 mb-10 pb-4">
        <div className="flex items-baseline gap-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-(--text-h)">
            المفضلة
          </h1>
          <span className="text-sm font-medium text-(--color-secondary) bg-(--border_card)/50 px-3 py-1 rounded-full">
            {WishlistItem.length} {WishlistItem.length === 1 ? "عنصر" : "عناصر"}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-(--border_card)" />
      </div>
      <div>
        {!WishlistItem.length ? (
          <EmptyList
            namePage="المفضله"
            pageIcon={
              <Heart
                size={45}
                className="text-white w-25 h-25 p-2 rounded-full bg-linear-to-r from-(--color-main) via-( --bg-searchinput) to-(--text-footer) to-60% animate-pulse"
              />
            }
          />
        ) : (
          <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-2">
            {WishlistItem.map((product) => (
              <>
                <ProductCard key={product.id} item={product} />
              </>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WishlistPage;
