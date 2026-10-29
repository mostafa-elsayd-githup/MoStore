import type { HomeBannerProp } from "../../../types/HomeTypes/HomeBanner";
import { motion, type Variants } from "framer-motion";
import { fadeInUp, slideInLeft } from "../../../animations/variants";
import MainButton from "../../ui/Link";
function HeroSection({
  desktopimg,
  mobileimg,
  title,
  subtitle,
  buttontext,
  buttonlink,
  PageTitle,
}: HomeBannerProp) {
  const TitleWords = title.split(" ");
  const SubTitleWords = subtitle.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp as Variants}
      viewport={{ once: true }}
      className="relative min-h-112.5 sm:min-h-137.5 md:min-h-162.5 lg:min-h-175 w-full overflow-hidden flex items-center px-8"
    >
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 768px)" srcSet={desktopimg} />
        <img
          src={mobileimg}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </picture>
      <div className="flex flex-col gap-3 z-20 md:mr-5">
        <motion.p
          variants={slideInLeft as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex flex-wrap gap-x-3"
        >
          {TitleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm leading-10 sm:text-lg md:text-xl font-bold text-white flex flex-wrap gap-x-3 "
        >
          {SubTitleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <MainButton
          title={PageTitle}
          btnlink={buttonlink}
          btntext={buttontext}
          coloe="white"
          z_index="-1"
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;
