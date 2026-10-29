import { useQuery } from "@tanstack/react-query";
import { GetProductsByType } from "../../../services/GetProduct";
import { ErrorMessage } from "../../../components/common/ErrorMessage";
import type { ApiErrorResponse } from "../../../types/ProductsType/Product";
import { useLocation, useParams } from "react-router";
import { ProductSkeleton } from "../../../components/common/Skeletons/ProductSkeleton";
import NoProductsFound from "../../common/NotFoundproduct";
import ProductCard from "../Products/ProductsCard";
import { motion, type Variants } from "framer-motion";
import { slideInRight } from "../../../animations/variants";
function ProductPage() {
  const pageTitle = useLocation().state.split(" ");
  const { category } = useParams<{ category?: string }>();
  const safeCategory = category ?? "";
  const { data, error, isPending, refetch } = useQuery({
    queryKey: ["productData", safeCategory],
    queryFn: async ({ signal }) => {
      if (!safeCategory) {
        throw new Error("Category is required");
      }
      return await GetProductsByType({ category: safeCategory, signal });
    },
    enabled: !!safeCategory,
  });

  if (error) {
    const errorStatus = (error as ApiErrorResponse)?.response?.status;
    const errMsg = (error as ApiErrorResponse)?.message;
    return (
      <div className="container m-auto">
        <ErrorMessage
          status={errorStatus}
          message={errMsg}
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <section className="container m-auto text-start flex flex-col gap-10 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInRight as Variants}
        viewport={{ once: true }}
        className=" items-end justify-center text-sm lg:text-3xl sm:justify-start mr-4 "
      >
        <h1 className="m-0! mt-10! font-black tracking-tight text-(--text-h)">
          {pageTitle.join(" ")}
          <span className="text-sm inline-block font-semibold text-white bg-(--bg-feedback) px-3 py-0.5 mr-1 rounded-2xl" dir="ltr">( {data?.length || 0}  )</span>
        </h1>
      </motion.div>
      {isPending && <ProductSkeleton />}
      {data && data?.length === 0 && <NoProductsFound />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-2 m-auto">
        {data?.map((product, index) => {
          return (
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
              viewport={{ once: true }}
            >
              <ProductCard item={product} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductPage;
