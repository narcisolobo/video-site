import ThemeSwitcher from "@/ui/theme-switcher";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 right-0 left-0 z-40 shadow-sm">
      <div className="flex w-full items-center md:container md:mx-auto">
        <div className="flex-none">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost drawer-button"
          >
            <HiMenu className="inline-block h-8 w-8 stroke-current" />
          </label>
        </div>
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost font-display text-xl uppercase"
          >
            🚀 mission control
          </Link>
        </div>
        <div className="flex-none">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
