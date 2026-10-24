import MainButton from "../ui/Link";
import { motion, type Variants } from "framer-motion";
import { slideInRight, slideInLeft } from "../../animations/variants";
function DiscountComponent() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center md:flex-row md:gap-25  bg-(--bg-dis) my-10 py-8">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={slideInRight as Variants}
        viewport={{ once: true }}
        className="text-5xl font-bold  "
      >
        انضم كعضو واحصل على خصم 10%
      </motion.h1>
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
