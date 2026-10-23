import { motion } from "framer-motion";
import { useLogout } from "../../hooks/useLogout";
import { LoaderIcon } from "lucide-react";

export default function LogoutButton() {
  const { logout, isPending } = useLogout();

  const handleLogout = async () => {
    const token = (localStorage.getItem("sb-access-token") as string) || "";
    if (token) logout(token);    
  };
  return (
    <motion.button
      onClick={handleLogout}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
      disabled={isPending} 
      className="px-4 py-2 h-10 bg-(--bg-badge) text-(--color-main) rounded-2xl cursor-pointer flex items-center justify-center shadow-md text-sm md:text-base font-medium whitespace-nowrap disabled:opacity-50"
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