import { NavLink } from "react-router";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";
import Logo from "../../ui/logo";
import ThemeButton from "../../features/Theme/ThemeButton";
import type { RoutsList } from "../../../types/NavBarType/RoutsNavType";
import { useState } from "react";
import { useWishlistStore } from "../../../store/WishlistStore";
import { useCartStore } from "../../../store/cardStore";
import LogoutButton from "../../ui/logoutButton";
import { motion } from "framer-motion";
import SearchInput from "./SearchInput";

function NavBar() {
  const Route: RoutsList[] = [
    { id: 1, pageName: "الرئيسية", path: "/" },
    { id: 2, pageName: "الرجال", path: "/man" },
    { id: 3, pageName: "من نحن", path: "/about" },
  ];
  const WishlistLength = useWishlistStore((state) => state.Wishlist);
  const CartLength = useCartStore((state) => state.cart);
  const [isOpen, setisOPen] = useState<boolean>(false);
  const ToggleMenu = () => setisOPen(!isOpen);
  const isLogin = localStorage.getItem("sb-access-token");

  return (
    <>
      <section className="hidden md:flex items-center justify-between px-6 py-2.5 bg-(--bg-navbar) backdrop-blur-md shadow-(--shadow-navbar) rounded-4xl w-full  border border-(--border-color)">
        <div className="lg:flex-1 md:mx-2">
          <Logo />
        </div>

        <ul className="lg:flex-1 flex items-center justify-around gap-2 text-[17px] text-(--text-h)">
          {Route.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2.5 py-1 rounded-full transition-all   duration-300 ${
                    isActive && "text-(--color-main)  font-bold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.pageName}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                        className="absolute inset-0 bg-(--bg-badge) rounded-full z-0 shadow-sm"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center justify-center gap-3">
          <SearchInput />

          <div className="flex items-center gap-2 text-(--color-primary) mr-1">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative hover:opacity-80 transition-opacity ${isActive ? "bg-(--bg-searchinput) font-bold text-(--text-h)" : "text-(--text-normal)"}`
              }
            >
              {CartLength.length > 0 ? (
                <span className="absolute flex items-center justify-center bg-(--bg-badge)  text-(--color-main) w-4 h-4 rounded-full  text-sm -right-2 -top-2 animate-bounce">
                  {CartLength.length}
                </span>
              ) : null}

              <ShoppingBag size={20} />
            </NavLink>
            <div className="relative">
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `relative hover:opacity-80 transition-opacity ${isActive ? "bg-(--bg-searchinput) font-bold text-(--text-h) " : "text-(--text-normal)"}`
                }
              >
                {WishlistLength.length > 0 ? (
                  <span className="absolute flex  items-center justify-center bg-(--bg-badge)  text-(--color-main) w-4 h-4 rounded-full  text-sm -right-4 -top-2 animate-bounce z-10">
                    {WishlistLength.length}
                  </span>
                ) : null}

                <Heart size={20} />
              </NavLink>
            </div>
            <ThemeButton />
            {isLogin && <LogoutButton />}
          </div>
        </div>
      </section>

      <section className="flex md:hidden relative items-center justify-between px-5 py-3 bg-(--bg-navbar) backdrop-blur-md rounded-2xl shadow-md w-full border border-white/10">
          <Logo />
        <div
          className={`p-4 w-full absolute left-0 top-full mt-2 rounded-2xl text-[18px] text-(--text-h) bg-(--bg-navbar) transition-all duration-200 ease-in-out origin-top  z-50 shadow-xl border border-white/10 ${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0 pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="text-start p-2">
            {Route.map((item) => (
              <li
                onClick={() => setisOPen(false)}
                className="mb-2 px-3 py-1.5 rounded-xl hover:bg-(--bg-searchinput) hover:text-(--text-h) transition-all cursor-pointer"
                key={item.id}
              >
                <NavLink className="w-full block" to={item.path}>
                  {item.pageName}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="relative flex items-center flex-wrap sm:flex-nowrap gap-3 mt-3 pt-3 border-t border-white/10">
            <SearchInput />

            <div className="flex flex-1 items-center gap-3 text-(--color-primary)">
              <NavLink
                className={({ isActive }) =>
                  `relative hover:opacity-80 transition-opacity ${isActive ? "bg-(--bg-searchinput) font-bold text-(--text-h)" : "text-(--text-normal)"}`
                }
                to="/cart"
                onClick={ToggleMenu}
              >
                {CartLength.length > 0 ? (
                  <span className="absolute flex items-center justify-center bg-(--bg-badge)  text-(--color-main) w-4 h-4 rounded-full  text-sm -right-2 -top-2 animate-bounce">
                    {CartLength.length}
                  </span>
                ) : null}
                <ShoppingBag size={20} />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `relative hover:opacity-80 transition-opacity ${isActive ? "bg-(--bg-searchinput) font-bold text-(--text-h)" : "text-(--text-normal)"}`
                }
                to="/wishlist"
                onClick={ToggleMenu}
              >
                {WishlistLength.length > 0 ? (
                  <span className="absolute flex  items-center justify-center bg-(--bg-badge)  text-(--color-main) w-4 h-4 rounded-full  text-sm -right-2 -top-2 animate-bounce z-10">
                    {WishlistLength.length}
                  </span>
                ) : null}

                <Heart size={20} />
              </NavLink>
              <ThemeButton />
              {isLogin && <LogoutButton />}
            </div>
          </div>
        </div>

        <button
          onClick={ToggleMenu}
          className="cursor-pointer text-(--color-secondary) p-1"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </section>
    </>
  );
}

export default NavBar;
