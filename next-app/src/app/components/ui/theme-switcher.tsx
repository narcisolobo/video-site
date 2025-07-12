import { HiOutlineMoon, HiSun } from "react-icons/hi";

function ThemeSwitcher() {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" className="theme-controller" value="acid" />
      <HiSun className="swap-on h-8 w-8 fill-current" />
      <HiOutlineMoon className="swap-off h-8 w-8 fill-current" />
    </label>
  );
}

export default ThemeSwitcher;
