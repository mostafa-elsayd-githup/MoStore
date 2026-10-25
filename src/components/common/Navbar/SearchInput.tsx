import { Search, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { SearchProduct } from "../../../services/SearchProduct";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import type { BaseProduct } from "../../../types/ProductsType/Product";

function SearchInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>("");
  useEffect(() => {
    const handleRequest = setTimeout(() => {
      setDebouncedSearchText(inputValue);
      return () => {
        clearTimeout(handleRequest);
      };
    }, 400);
  }, [inputValue]);
  const { data, isPending, isError } = useQuery({
    queryKey: ["searchProduct", debouncedSearchText],
    queryFn: () => SearchProduct(debouncedSearchText),
    enabled: !!debouncedSearchText && debouncedSearchText.trim().length > 0,
  });
  return (
    <div className="relative">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="بحث عن منتج ......"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="outline-0 bg-(--bg-searchinput) py-1.5 pr-9 pl-3 text-sm text-(--color-secondary) rounded-2xl focus:shadow-(--shadow) transition-all placeholder:tracking-[1px] md:w-40 focus:w-56"
        />
        <Search
          size={18}
          className="absolute right-3 text-(--color-secondary)"
        />
      </div>
      {debouncedSearchText && debouncedSearchText.trim().length > 0 && (
        <div className="absolute top-full right-0 left-0 mt-2 bg-(--bg-card) border border-(--border-color) rounded-2xl shadow-(--shadow) overflow-hidden z-50 max-h-80 overflow-y-auto">
          {isPending && (
            <div className="flex items-center justify-center py-6 text-(--color-secondary) gap-2">
              <Loader2 className="animate-spin" size={20} />
              <span className="text-xs font-medium">
                جاري البحث عن المنتجات...
              </span>
            </div>
          )}
          {isError && (
            <div className="py-4 text-center text-red-500 text-xs">
              حدث خطأ أثناء البحث، حاول مرة أخرى.
            </div>
          )}
          {!isPending && !isError && data && data.length === 0 && (
            <div className="py-6 text-center text-(--color-secondary) text-xs">
              لا توجد منتجات مطابقة لـ "
              <span className="font-semibold text-(--color-primary)">
                {debouncedSearchText}
              </span>
              "
            </div>
          )}

          {!isPending && !isError && data && data.length > 0 && (
            <div className="divide-y divide-(--border-color)">
              {data.map((product: BaseProduct) => (
                <Link
                  key={product.id}
                  to={`/productdetails/${product.id}`}
                  onClick={() => setDebouncedSearchText("")}
                  className="flex items-center gap-3 p-3 hover:bg-(--bg-primary) transition-colors group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-11 h-11 object-cover rounded-xl bg-(--bg-searchinput) shrink-0 border border-(--border-color)"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-(--color-primary) truncate group-hover:opacity-80 transition-opacity">
                      {product.title}
                    </h4>
                    <span className="text-xs font-bold text-(--color-secondary) mt-1 block">
                      {product.price} ج.م
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
