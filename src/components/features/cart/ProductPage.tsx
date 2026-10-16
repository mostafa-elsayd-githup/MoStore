import { useQuery } from "@tanstack/react-query";
import { GetProductsByType } from "../../../services/GetProduct";
import { ErrorMessage } from "../../../components/common/ErrorMessage";
import type { ApiErrorResponse } from "../../../types/ProductsType/Product";
import { useLocation, useParams } from "react-router";
import { ProductSkeleton } from "../../../components/common/Skeletons/ProductSkeleton";
import NoProductsFound from "../../common/NotFoundproduct";
import ProductCard from "../Products/ProductsCard";
function ProductPage() {
  const location = useLocation();
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
    <section className="container m-auto text-start flex flex-col gap-10">
      <h1 className="text-5xl ">
        {location.state} ( {data?.length || 0})
      </h1>
      {isPending && <ProductSkeleton />}
      {data && data?.length === 0 && <NoProductsFound />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-2">
        {data?.map((product) => {
          return <ProductCard key={product.id} item={product} />;
        })}
      </div>
    </section>
  );
}

export default ProductPage;
