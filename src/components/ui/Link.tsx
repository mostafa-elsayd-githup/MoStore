import { NavLink } from "react-router";
import type { ButtonType } from "../../types/HomeTypes/HomeBanner";
import { motion } from "framer-motion";
import { hoverScale } from "../../animations/variants";
function MainLink({
  btnlink,
  btntext,
  coloe,
  z_index,
  textColor,
  title,
}: ButtonType) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="top"
      variants={hoverScale}
    >
      <NavLink
        to={btnlink || "/"}
        state={title}
        style={{ background: coloe, color: textColor }}
        className={`flex relative text-black p-2 text-3xl sm:px-10 sm:text-4xl  cursor-pointer mt-4 w-fit transition-all`}
      >
        <span
          style={{ zIndex: z_index, borderColor: coloe }}
          className={`absolute border-2 w-full h-full left-1.5`}
        ></span>
        {btntext}
      </NavLink>
    </motion.div>
  );
}

export default MainLink;
