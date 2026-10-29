import { motion } from "framer-motion";
import { useLogout } from "../../hooks/useLogout";
import { LoaderIcon } from "lucide-react";
import { hoverScale } from "../../animations/variants";

export default function LogoutButton() {
  const { logout, isPending } = useLogout();

  const handleLogout = async () => {
    const token = (localStorage.getItem("sb-access-token") as string) || "";
    if (token) logout(token);
  };
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      whileTap="top"
      variants={hoverScale}
      onClick={handleLogout}
      disabled={isPending}
      className="px-4 py-2 h-10 bg-(--bg-feedback) text-white rounded-2xl cursor-pointer flex items-center justify-center shadow-md text-sm md:text-base font-medium whitespace-nowrap disabled:opacity-50"
    >
      {isPending ? (
        <span className="animate-spin flex items-center justify-center">
          <LoaderIcon size={20} />
        </span>
      ) : (
        "تسجيل خروج"
      )}
    </motion.button>
  );
}
