import { NavLink } from "react-router";
import { motion, type Variants } from "framer-motion";
import { scaleUp } from "../../animations/variants";
export default function NotFound() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={scaleUp as Variants}
      viewport={{ once: true }}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest opacity-20">
        404
      </h1>
      <div className="bg-primary text-(--color-primary) px-3 py-1 text-sm rounded rotate-12 absolute">
        الصفحة غير موجودة
      </div>

      <p className="text-(--color-secondary) text-lg mt-5 mb-8">
        عذراً، الرابط الذي تحاول الوصول إليه غير موجود أو تم تحريكه.
      </p>
      <NavLink
        to="/"
        className="bg-(--bg-searchinput) text-(--text-h) font-semibold mt-3 px-6 py-2 rounded-xl hover:opacity-90 transition-all shadow-lg"
      >
        العودة للرئيسية
      </NavLink>
    </motion.div>
  );
}
