import { useMatches } from "react-router";

export const usePageTitle = () => {
  const match = useMatches();

  const pageName = match.find(
    (item) => item.handle && (item.handle as { title: string }).title,
  );
  const pageTitle =
    (pageName?.handle as { title?: string })?.title || "MoStore";
  return { pageTitle };
};
