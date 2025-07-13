import Link from "next/link";
import { ReactNode } from "react";
import { navItems } from "@/app/data";

interface MenuDrawerProps {
  children: ReactNode;
}

function MenuDrawer({ children }: MenuDrawerProps) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex min-h-dvh flex-col">{children}</div>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <Link href="/helpful-links">Helpful Links</Link>
          </li>
          <li>
            <h2 className="menu-title uppercase">Videos</h2>
            <ul>
              <li>
                {navItems.map((navItem) => (
                  <details key={navItem.module}>
                    <summary>{navItem.module}</summary>
                    <ul>
                      {navItem.weeks.map((week) => (
                        <li key={week.url}>
                          <Link href={week.url}>{week.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuDrawer;
