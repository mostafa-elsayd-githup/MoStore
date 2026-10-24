import { useMatches } from "react-router";
import { motion ,type Variants } from "framer-motion";
import { slideInRight } from "../../animations/variants";
function PageHeader({ numberOfItems }: { numberOfItems: number }) {
  const matches = useMatches().find((item)=> item.handle && (item.handle as { title?: string }).title,);
  const pageTitle =
    (matches?.handle as { title?: string })?.title || "MoStore";
  const title = pageTitle.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideInRight as Variants}
      viewport={{ once: true }}
      className="flex items-baseline gap-3"
    >
      {title.map((item, index) => (
        <h1
          key={index}
          className="text-3xl sm:text-4xl font-black tracking-tight text-(--text-h)"
        >
          {item}
        </h1>
      ))}
      <span className="text-sm font-medium text-(--color-secondary) bg-(--border_card)/50 px-3 py-1 rounded-full">
        {numberOfItems} {numberOfItems === 1 ? "عنصر" : "عناصر"}
      </span>
    </motion.div>
  );
}

export default PageHeader;
