"use client";

import { EMAIL } from "@/constants/contact";
import { menuList } from "@/data/sideBarMenuList";
import { handleCopyEmail } from "@/utils/copyEmail";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

const DesktopSideBar: React.FC<SideBarProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="flex w-full h-full fixed top-0 left-0 gap-1">
      <div className="hidden md:flex h-full md:w-[160px] lg:w-[230px]  shadow-md">
        <aside className="h-[100dvh] z-10 overflow-y-auto flex flex-col w-full justify-between">
          <div>
            {menuList.map((menu, idx) => (
              <div
                key={idx}
                className={`p-5 ${
                  idx !== menuList.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
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
          <div className="flex gap-[2px] pl-4">
            <button
              className="block px-1 py-5 hover:opacity-60 transition"
              onClick={() =>
                window.open("https://github.com/Sienna98", "_blank")
              }
            >
              <img
                src="/icons/github.svg"
                alt="github"
                width="20"
                height="20"
              />
            </button>
            <button
              className="block px-1 py-5 hover:opacity-60 transition"
              onClick={() =>
                window.open("https://velog.io/@tldms0827/posts", "_blank")
              }
            >
              <img src="/icons/velog.svg" alt="velog" width="20" height="20" />
            </button>
            <button
              className="block px-[5px] py-5 hover:opacity-60 transition"
              onClick={() =>
                window.open("https://www.linkedin.com/in/sieunlee98", "_blank")
              }
            >
              <img
                src="/icons/linkedin.svg"
                alt="linkedin"
                width="20"
                height="20"
              />
            </button>
            <button
              className="block px-[5px] py-5 hover:opacity-60 transition"
              onClick={() => handleCopyEmail(EMAIL)}
            >
              <img src="/icons/email.svg" alt="email" width="22" height="22" />
            </button>
          </div>
        </aside>
      </div>
      <main className="relative h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default DesktopSideBar;
