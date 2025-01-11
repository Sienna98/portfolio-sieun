"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

const menuList = [
  {
    category: "About",
    list: [
      { title: "Experience", link: "/Experience", type: "router" },
      { title: "GitHub", link: "https://github.com/Sienna98", type: "window" },
      {
        title: "Velog",
        link: "https://velog.io/@tldms0827/posts",
        type: "window",
      },
    ],
  },
  {
    category: "UI-component",
    list: [
      { title: "Alert", link: "/Alert", type: "router" },
      { title: "Button", link: "/Button", type: "router" },
      { title: "Card", link: "/Card", type: "router" },
      { title: "Checkbox", link: "/Checkbox", type: "router" },
      { title: "Confirm", link: "/Confirm", type: "router" },
      { title: "Input", link: "/Input", type: "router" },
      { title: "Modal", link: "/Modal", type: "router" },
      { title: "Progress", link: "/Progress", type: "router" },
      { title: "Selector", link: "/Selector", type: "router" },
    ],
  },
  {
    category: "Side Project",
    list: [
      {
        title: "Purple Place",
        link: "https://purple-place.vercel.app",
        type: "window",
      },
      {
        title: "Jamongda(Beta)",
        link: "https://jamongda.netlify.app",
        type: "window",
      },
    ],
  },
  {
    category: "Clone Coding",
    list: [
      {
        title: "Starbucks",
        link: "https://elegant-begonia-dba8ef.netlify.app",
        type: "window",
      },
      { title: "Movv", link: "https://unrivaled-longma-60ac49.netlify.app" },
      {
        title: "Nongshim nav",
        link: "https://silver-frangollo-742fe8.netlify.app",
        type: "window",
      },
    ],
  },
];

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="flex w-full h-full fixed top-0 left-0">
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
                        key={idx}
                        className={`relative group inline cursor-pointer flex-shrink-0 flex-grow-0 basis-auto w-auto transition-transform duration-500 ease-in-out hover:translate-x-[5px] hover:font-semibold 
                          ${
                            pathName === item.link &&
                            "translate-x-[5px] font-semibold"
                          }`}
                      >
                        <h3
                          className="relative z-10 transition-all duration-300 transform"
                          onClick={() => {
                            if (item.type === "router") {
                              router.push(item.link);
                            } else {
                              window.open(item.link, "_blank");
                            }
                          }}
                        >
                          {item.title}
                        </h3>
                        <span
                          className={`absolute bottom-[-2px] left-0 w-0 h-[10px] bg-[#A6F0C9] transition-all duration-500 group-hover:w-full`}
                        />
                        {pathName === item.link && (
                          <span
                            className={`absolute bottom-[-2px] left-0 h-[10px] bg-[#A6F0C9] transition-all duration-500 w-full`}
                          />
                        )}
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
