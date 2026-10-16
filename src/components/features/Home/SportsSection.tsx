import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import type { SportSectionProp } from "../../../types/HomeTypes/HomeBanner";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

function SportsSection({
  sportList,
  sportSectionHeader,
}: {
  sportList: SportSectionProp[];
  sportSectionHeader: string[];
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <section className="p-2 mt-5">
        <motion.p
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-white flex flex-wrap gap-x-3 hover:underline"
        >
          {sportSectionHeader.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block text-start text-4xl mb-3 text-(--text-h)"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={16}
          slidesPerView="auto"
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="py-4 px-2 cursor-grab active:cursor-grabbing"
        >
          {sportList.map((item, index: number) => (
            <SwiperSlide key={index} className="w-auto!">
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="relative w-70 sm:w-84 md:w-91 min-h-157 bg-cover bg-center rounded-3xl shadow-md hover:scale-[1.02] transition-transform duration-300 select-none"
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent rounded-3xl pointer-events-none" />

                <NavLink
                  to={item.pathLink}
                  state={item.PageTitle}
                  className="absolute bottom-6 right-6 z-10 text-white font-bold text-lg hover:underline flex items-center gap-2"
                >
                  {item.SetionName}
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </motion.section>
  );
}

export default SportsSection;
