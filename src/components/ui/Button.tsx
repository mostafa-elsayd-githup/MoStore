import { NavLink } from "react-router";
import type { ButtonType } from "../../types/HomeTypes/HmeBanner";

function MainButton({
  btnlink,
  btntext,
  coloe,
  z_index,
  textColor,
  title,
}: ButtonType) {
  return (
    <NavLink
      to={btnlink || "/"}
      state={title}
      style={{ background: coloe, color: textColor }}
      className={`flex relative text-black hover:bg-[#eeeeee] py-2 px-10 text-4xl cursor-pointer mt-4 w-fit transition-all`}
    >
      <span
        style={{ zIndex: z_index, borderColor: coloe }}
        className={`absolute border-2  w-full h-full left-1.5`}
      ></span>
      {btntext}
    </NavLink>
  );
}

export default MainButton;
