import type { HomeBannerProp } from "../../../types/HomeTypes/HomeBanner";
import { motion } from "framer-motion";
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative min-h-100 w-full  overflow-hidden flex items-center "
    >
      <section className="relative min-h-200 w-full overflow-hidden flex items-center px-8">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 768px)" srcSet={desktopimg} />

          <img
            src={mobileimg}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div className="flex flex-col gap-7 z-20">
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl  font-bold text-white flex flex-wrap gap-x-3"
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
            className="text-2xl  font-bold text-white flex flex-wrap gap-x-3 leading-16"
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
      </section>
    </motion.section>
  );
}

export default HeroSection;
