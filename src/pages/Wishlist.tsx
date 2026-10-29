import { useWishlistStore } from "../store/WishlistStore";
import ProductCard from "../components/features/Products/ProductsCard";
import EmptyList from "../components/common/EmptyList";
import { Heart } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "../animations/variants";
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
                className=" w-25 h-20 p-2 rounded-3xl text-(--bg-feedback)"
              />
            }
          />
        ) : (
          <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-2">
            {wishlistItem.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                variants={fadeInUp as Variants}
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
