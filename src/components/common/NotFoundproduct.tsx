import { NavLink } from "react-router";

export default function NoProductsFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="w-20 h-20 bg-(--bg-card) border border-(--border_card) rounded-full flex items-center justify-center text-3xl mb-4 shadow-sm">
        🔍
      </div>

      <h3 className="text-2xl font-bold text-(--text-h) mb-2">
        لا توجد منتجات متاحة حالياً
      </h3>

      <p className="text-(--color-secondary) max-w-md text-sm mb-6 leading-relaxed">
        عذراً، لم نتمكن من العثور على أي منتجات تطابق بحثك أو في هذا القسم. جرب تغيير خيارات البحث أو تصفح أقسام أخرى.
      </p>

      <div className="flex items-center gap-3 mt-4">
        <NavLink
          to="/"
          className="bg-(--color-primary) text-(--color-main) font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-md text-sm"
        >
          تصفح كل المنتجات
        </NavLink>
      </div>
    </div>
  );
}