"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SideBarProps {
  children: ReactNode;
}

const menuList = [
  {
    category: "UI-component",
    list: [
      { title: "Alert", link: "/Alert" },
      { title: "Button", link: "/Button" },
      { title: "Card", link: "/Card" },
      { title: "Checkbox", link: "/Checkbox" },
      { title: "Confirm", link: "/Confirm" },
      { title: "Input", link: "/Input" },
      { title: "Modal", link: "/Modal" },
      { title: "Progress", link: "/Progress" },
      { title: "Selector", link: "/Selector" },
    ],
  },
  {
    category: "Side Project",
    list: [
      {
        title: "Purple Place",
        link: "https://purple-place.vercel.app",
      },
      { title: "Jamongda", link: "https://jamongda.netlify.app" },
    ],
  },
  {
    category: "Clone Coding",
    list: [
      {
        title: "Starbucks",
        link: "https://elegant-begonia-dba8ef.netlify.app",
      },
      { title: "Movv", link: "https://unrivaled-longma-60ac49.netlify.app" },
      {
        title: "Nongshim nav",
        link: "https://silver-frangollo-742fe8.netlify.app",
      },
    ],
  },
];

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex h-full">
      <div className="hidden md:flex h-full w-[230px] shadow-md">
        <aside className="h-[100vh] z-10 overflow-y-auto flex flex-col w-full justify-between">
          <div>
            {menuList.map((menu, idx) => (
              <div key={idx} className="border-b border-gray-200 p-5">
                <div className="leading-5">
                  <h2 className="text-[0.75rem] font-medium text-green-500">
                    {menu.category}
                  </h2>
                  <ul className="mt-3 flex flex-col gap-1.5 items-start">
                    {menu.list.map((item, idx) => (
                      <li
                        className="relative group inline cursor-pointer flex-shrink-0 flex-grow-0 basis-auto w-auto transition-transform duration-500 ease-in-out hover:translate-x-[5px]"
                        key={idx}
                      >
                        <h3
                          className="relative z-10 transition-all duration-300 transform hover:font-semibold"
                          onClick={() => {
                            if (menu.category === "UI-component") {
                              router.push(item.link);
                            } else {
                              window.open(item.link, "_blank");
                            }
                          }}
                        >
                          {item.title}
                        </h3>
                        <span className="absolute bottom-[-2px] left-0 w-0 h-[10px] bg-[#A6F0C9] transition-all duration-500 group-hover:w-full"></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <Link href="/" className="block p-3">
            <Image
              src="/icons/home.svg"
              alt="홈"
              width="26"
              height="26"
              className="hover:opacity-60 transition"
            />
          </Link>
        </aside>
      </div>
      <main className="relative h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SideBar;
