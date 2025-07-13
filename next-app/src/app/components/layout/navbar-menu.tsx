import Link from "next/link";
import { navItems } from "@/app/data";

function NavbarMenu() {
  return (
    <ul className="menu menu-horizontal hidden font-sans font-semibold md:flex">
      <li>
        <Link href="/helpful-links">Helpful Links</Link>
      </li>
      <li>
        <details>
          <summary>Video Recordings</summary>
          <ul className="p-2">
            <li>
              {navItems.map((navItem) => (
                <details
                  key={navItem.module}
                  className="bg-base-200 min-w-[12rem] p-2"
                >
                  <summary className="cursor-pointer py-1 whitespace-nowrap">
                    {navItem.module}
                  </summary>
                  <ul className="space-y-1 pl-2">
                    {navItem.weeks.map((week) => (
                      <li key={week.url}>
                        <Link
                          href={week.url}
                          className="hover:bg-base-300 block rounded px-2 py-1"
                        >
                          {week.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}

export default NavbarMenu;
