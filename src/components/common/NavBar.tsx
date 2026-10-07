import { NavLink } from "react-router";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import Logo from "../ui/logo";
import ThemeButton from "../features/Theme/ThemeButton";
import type { RoutsList } from "../../types/NavBarType/RoutsNavType";
import { useState } from "react";

function NavBar() {
  const Route: RoutsList[] = [
    { id: 1, pageName: "الرئيسية", path: "/" },
    { id: 2, pageName: "الرجال", path: "/man" },
    { id: 3, pageName: "من نحن", path: "/about" },
  ];

  const [isOpen, setisOPen] = useState<boolean>(false);
  const ToggleMenu = () => setisOPen(!isOpen);

  return (
    <>
      <section className="hidden md:flex items-center justify-between px-6 py-2.5 bg-(--bg-navbar) backdrop-blur-md shadow-(--shadow-navbar) rounded-4xl w-full  border border-(--border-color)">
        <div className="flex-1 ">
          <Logo />
        </div>

        <ul className="flex-1 flex items-center justify-center gap-2 text-[17px] text-(--text-h)">
          {Route.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full transition-all duration-300
                  hover:bg-(--bg-searchinput) hover:text-(--text-h)
                  ${isActive ? "bg-(--bg-searchinput) font-bold text-(--text-h)" : "text-(--text-normal)"}`
                }
              >
                {item.pageName}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center justify-center gap-3">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className=" outline-0 bg-(--bg-searchinput) py-1.5 pr-9 pl-3 text-sm text-(--color-secondary) rounded-2xl focus:shadow-(--shadow) transition-all placeholder:tracking-[1px] w-50 focus:w-60"
            />
            <Search
              size={18}
              className="absolute right-3 text-(--color-secondary)"
            />
          </div>

          <div className="flex items-center gap-3 text-(--color-primary) mr-1">
            <NavLink to="/cart" className="hover:opacity-80 transition-opacity">
              <ShoppingBag size={20} />
            </NavLink>
            <NavLink
              to="/wishlist"
              className="hover:opacity-80 transition-opacity"
            >
              <Heart size={20} />
            </NavLink>
            <ThemeButton />
          </div>
        </div>
      </section>

      <section className="flex md:hidden relative items-center justify-between px-5 py-3 bg-(--bg-navbar) backdrop-blur-md rounded-2xl shadow-md w-full border border-white/10">
        <div>
          <Logo />
        </div>
        <div
          className={`p-4 w-full absolute left-0 top-full mt-2 rounded-2xl text-[18px] text-(--text-h) bg-(--bg-navbar) transition-all duration-200 ease-in-out origin-top overflow-hidden z-50 shadow-xl border border-white/10 ${
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

          <div className="relative flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-0 w-full bg-(--bg-searchinput) py-1.5 pr-9 pl-3 text-sm text-(--color-secondary) rounded-2xl focus:shadow-(--shadow) transition-all"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-secondary)"
              />
            </div>
            <div className="flex items-center gap-3 text-(--color-primary)">
              <NavLink to="/cart">
                <ShoppingBag size={20} />
              </NavLink>
              <NavLink to="/wishlist">
                <Heart size={20} />
              </NavLink>
              <ThemeButton />
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
