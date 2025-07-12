import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  {
    module: "Programming Fundamentals",
    weeks: [
      {
        url: "/modules/programming-fundamentals/week/1",
        label: "Week 1",
      },
    ],
  },
  {
    module: "Web Fundamentals",
    weeks: [
      {
        url: "/modules/web-fundamentals/week/2",
        label: "Week 2",
      },
      { url: "/modules/web-fundamentals/week/3", label: "Week 3" },
    ],
  },
  {
    module: "SQL Fundamentals",
    weeks: [
      {
        url: "/modules/sql-fundamentals/week/4",
        label: "Week 4",
      },
    ],
  },
  {
    module: "Intro to React",
    weeks: [
      {
        url: "/modules/intro-to-react/week/5",
        label: "Week 5",
      },
      { url: "/modules/intro-to-react/week/6", label: "Week 6" },
    ],
  },
  {
    module: ".NET Web Development",
    weeks: [
      {
        url: "/modules/.net-web-development/week/7",
        label: "Week 7",
      },
      { url: "/modules/.net-web-development/week/8", label: "Week 8" },
      { url: "/modules/.net-web-development/week/9", label: "Week 9" },
      { url: "/modules/.net-web-development/week/10", label: "Week 10" },
      { url: "/modules/.net-web-development/week/11", label: "Week 11" },
      { url: "/modules/.net-web-development/week/12", label: "Week 12" },
    ],
  },
  {
    module: "Intro to Data Engineering",
    weeks: [
      {
        url: "/modules/intro-to-data-engineering/week/13",
        label: "Week 13",
      },
      { url: "/modules/intro-to-data-engineering/week/14", label: "Week 14" },
    ],
  },
];

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
