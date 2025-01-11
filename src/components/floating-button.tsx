"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileSideBar from "./mobile-side-bar";
import { handleCopyEmail } from "@/utils/copyEmail";
import { EMAIL } from "@/constants/contact";

const FloatingButton = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {isSidebarOpen ? (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="flex flex-col gap-2 fixed bottom-[30px] right-[20px] md:hidden z-30">
            <button
              className="p-3 bg-white rounded-full shadow"
              onClick={() =>
                window.open("https://github.com/Sienna98", "_blank")
              }
            >
              <Image
                src="/icons/github.svg"
                alt="github"
                width="20"
                height="20"
              />
            </button>
            <button
              className="p-3 bg-white rounded-full shadow"
              onClick={() =>
                window.open("https://velog.io/@tldms0827/posts", "_blank")
              }
            >
              <Image
                src="/icons/velog.svg"
                alt="velog"
                width="20"
                height="20"
              />
            </button>
            <button
              className="p-3 bg-white rounded-full shadow"
              onClick={() => handleCopyEmail(EMAIL)}
            >
              <Image
                src="/icons/email.svg"
                alt="email"
                width="20"
                height="20"
              />
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2 fixed bottom-[30px] right-[20px] z-30 cursor-pointer">
          <button
            className="p-3 bg-white rounded-full shadow md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Image src="/icons/menu.svg" alt="메뉴" width="20" height="20" />
          </button>
          <button
            className="p-3 bg-white rounded-full shadow"
            onClick={() => {
              router.push("/");
              setIsSidebarOpen(false);
            }}
          >
            <Image src="/icons/home.svg" alt="홈" width="20" height="20" />
          </button>
        </div>
      )}

      <MobileSideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default FloatingButton;
