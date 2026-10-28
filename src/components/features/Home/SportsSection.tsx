import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { NavLink } from "react-router";
import { motion, type Variants } from "framer-motion";
import type { SportSectionProp } from "../../../types/HomeTypes/HomeBanner";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { fadeInUp, slideInRight } from "../../../animations/variants";

function SportsSection({
  sportList,
  sportSectionHeader,
}: {
  sportList: SportSectionProp[];
  sportSectionHeader: string[];
}) {
  return (
    <section className="p-2 mt-5">
      <motion.h1
        variants={slideInRight as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-start text-4xl font-bold text-(--text-h) mb-10  mr-4! hover:underline"
      >
        {sportSectionHeader.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-2"
          >
            {word}
          </span>
        ))}
      </motion.h1>
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp as Variants}
              style={{ backgroundImage: `url(${item.image})` }}
              className="relative w-70 sm:w-84 md:w-91 min-h-157 shrink-0 bg-cover bg-center rounded-3xl shadow-md hover:scale-[1.02] transition-transform duration-300 select-none"
            >
              <span className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent rounded-3xl pointer-events-none" />
              <NavLink
                to={item.pathLink}
                state={item.PageTitle}
                className="absolute bottom-6 right-6 z-10 text-white font-bold text-lg hover:underline flex items-center gap-2"
              >
                {item.SetionName}
              </NavLink>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SportsSection;
