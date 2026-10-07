import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
function ThemeButton() {
  const [dark, setDark] = useState<boolean>(() => {
    const dark = localStorage.getItem("Theme");
    return dark === "dark";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("Theme", dark ? "dark" : "light");
  }, [dark]);
  const ChangeTheme = () => {
    setDark((t) => !t);
  };
  return (
    <button onClick={ChangeTheme} className="cursor-pointer">
      {dark ? <Sun size={22} className="text-[#f7ba21]" /> : <Moon size={22} />}
    </button>
  );
}

export default ThemeButton;
