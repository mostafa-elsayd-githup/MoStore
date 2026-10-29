import MainButton from "../ui/Link";
import { motion, type Variants } from "framer-motion";
import { slideInRight, slideInLeft } from "../../animations/variants";
function DiscountComponent() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row md:gap-5  bg-(--bg-dis) my-10 py-8">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        variants={slideInRight as Variants}
        viewport={{ once: true }}
        className="text-[25px] sm:text-[2rem] bg-linear-to-r from-(--text-h) to-(--bg-feedback) to-50% bg-clip-text text-transparent! font-bold"
      >
        انضم كعضو واحصل على خصم 10%
      </motion.h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft as Variants}
        viewport={{ once: true }}
      >
        <MainButton
          btnlink="/"
          btntext="سجّل مجاناً"
          coloe="var(--bg-badge)"
          textColor="var( --color-main)"
        />
      </motion.div>
    </div>
  );
}

export default DiscountComponent;
