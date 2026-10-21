import { useMatches } from "react-router";

function PageHeader({ numberOfItems }: { numberOfItems: number }) {
  const matches = useMatches();
  const currentMatch = matches.find(
    (item) => item.handle && (item.handle as { title?: string }).title,
  );
  const pageTitle =
    (currentMatch?.handle as { title?: string })?.title || "MoStore";

  return (
    <div className="flex items-baseline gap-3">
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-(--text-h)">
        {pageTitle}
      </h1>
      <span className="text-sm font-medium text-(--color-secondary) bg-(--border_card)/50 px-3 py-1 rounded-full">
        {numberOfItems} {numberOfItems === 1 ? "عنصر" : "عناصر"}
      </span>
    </div>
  );
}

export default PageHeader;
