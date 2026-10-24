import { useWishlistStore } from "../store/WishlistStore";
import ProductCard from "../components/features/Products/ProductsCard";
import EmptyList from "../components/common/EmptyList";
import { Heart } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import {motion} from "framer-motion" 
function WishlistPage() {
  const wishlistItem = useWishlistStore((state) => state.Wishlist);
  return (
    <section className="container m-auto">
      <div className="relative text-start mx-4 mb-10">
        <PageHeader numberOfItems={wishlistItem.length} />
        <div className="absolute bottom-0 left-0 w-full border-b border-(--border_card)" />
      </div>
      <div>
        {!wishlistItem.length ? (
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
            {wishlistItem.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05),
                  ease: "easeInOut",
                }}
              >
                <ProductCard key={product.id} item={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WishlistPage;
