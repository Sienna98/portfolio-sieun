"use client";

import { menuList } from "@/data/sideBarMenuList";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

const DesktopSideBar: React.FC<SideBarProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="flex w-full h-full fixed top-0 left-0">
      <div className="hidden md:flex h-full w-[230px] shadow-md">
        <aside className="h-[100dvh] z-10 overflow-y-auto flex flex-col w-full justify-between">
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
          <div className="flex pl-2">
            <button
              className="block px-1 py-3"
              onClick={() => router.push("/")}
            >
              <Image
                src="/icons/home.svg"
                alt="홈"
                width="26"
                height="26"
                className="hover:opacity-60 transition"
              />
            </button>
            <button
              className="block px-1 py-3"
              onClick={() =>
                window.open("https://github.com/Sienna98", "_blank")
              }
            >
              <Image
                src="/icons/github.svg"
                alt="github"
                width="26"
                height="26"
                className="hover:opacity-60 transition"
              />
            </button>
            <button
              className="block px-1 py-3"
              onClick={() =>
                window.open("https://velog.io/@tldms0827/posts", "_blank")
              }
            >
              <Image
                src="/icons/velog.svg"
                alt="velog"
                width="26"
                height="26"
                className="hover:opacity-60 transition"
              />
            </button>
          </div>
        </aside>
      </div>
      <main className="relative h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default DesktopSideBar;
