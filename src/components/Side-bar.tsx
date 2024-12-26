"use client";

import { ReactNode } from "react";
import Box from "./Box";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SideBarProps {
  children: ReactNode;
}

const menuList = [
  {
    category: "UI-component",
    list: [
      "Alert",
      "Button",
      "Card",
      "Checkbox",
      "Confirm",
      "Input",
      "Modal",
      "Progress",
      "Selector",
      "Table",
    ],
  },
  { category: "Clone Coding", list: ["Starbucks", "Movv", "농심 nav"] },
  {
    category: "Portfolio",
    list: ["Login Page", "Tiffany & Co.", "BARBOUR", "NARS", "SHAFT FINDER"],
  },
];

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex h-full">
      <div className="hidden md:flex h-full w-[230px] shadow-md">
        <aside className="h-[100vh] z-10 overflow-y-auto flex flex-col w-full justify-between">
          <Box>
            {menuList.map((menu, idx) => (
              <div key={idx} className="border-b border-gray-200 p-5">
                <div className="leading-5">
                  <h2 className="text-[0.75rem] font-medium text-green-500">
                    {menu.category}
                  </h2>
                  <ul className="mt-2">
                    {menu.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="transition-all duration-400 cursor-pointer pt-1.5 duration-300 transform hover:translate-x-1.5 hover:font-semibold"
                        data-cont="alert.html"
                      >
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Box>
          <button className="p-4" onClick={() => router.push("/")}>
            <Image
              src="/icons/home.svg"
              alt="홈"
              width="24"
              height="24"
              className="hover:opacity-60 transition"
            />
          </button>
        </aside>
      </div>
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SideBar;
