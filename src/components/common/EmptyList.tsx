import MainButton from "../ui/Link";
import type { EmptyListProps } from "../../types/ProductsType/Product";
import { motion, type Variants } from "framer-motion";
import { slideInRight, slideInLeft, fadeInUp } from "../../animations/variants";
function EmptyList({ namePage, pageIcon }: EmptyListProps) {

  return (
    <div className="relative items-center w-fit m-auto my-30">
      <motion.span
        initial="hidden"
        whileInView="visible"
        variants={slideInRight as Variants}
        className="absolute -top-10 -right-2 w-40 h-10 lg:w-56 lg:h-14 lg:-top-14 border-t-2 border-r-2 rounded-tr-[10px] border-(--text-fetch)"
      />
      <motion.span
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft as Variants}
        className="absolute -bottom-14 -left-2 w-40 h-10 lg:w-56 lg:h-14 lg:-bottom-20 border-b-2 border-l-2 rounded-bl-[10px] border-(--text-fetch)"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp as Variants}
        className="flex flex-col items-center  gap-3 md:gap-4"
      >
        <span>{pageIcon}</span>

        <span className="text-(--text-h) font-extrabold text-base md:text-lg lg:text-2xl">
          {namePage}
        </span>

        <p className="text-(--color-secondary) text-center text-sm md:text-base lg:text-xl leading-relaxed lg:leading-loose">
          لا توجد عناصر حتى الان
          <br />
          احفظ قطعك المفضلة وعد عندما تكون مستعدًا
        </p>

        <MainButton
          title="تسوق الان"
          btnlink="/"
          btntext="تسوق الان"
          coloe="var(--text-h)"
          textColor="var(--color-main)"
          z_index="1"
        />
      </motion.div>
    </div>
  );
}

export default EmptyList;
