"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import MobileSideBar from "./mobile-side-bar";
import { handleCopyEmail } from "@/utils/copyEmail";
import { EMAIL } from "@/constants/contact";
import { useHandleNavigation } from "@/utils/handleNavigation";

const FloatingButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleNavigation = useHandleNavigation();
  const currentLang = searchParams.get("lang") || "ko";
  const newLang = currentLang === "en" ? "ko" : "en";

  const toggleLanguage = () => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", newLang);
    router.push(`?${params.toString()}`, { scroll: false });
  };

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
              <img
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
              <img src="/icons/velog.svg" alt="velog" width="20" height="20" />
            </button>
            <button
              className="p-3 bg-white rounded-full shadow"
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
              className="p-3 bg-white rounded-full shadow"
              onClick={() => handleCopyEmail(EMAIL)}
            >
              <img src="/icons/email.svg" alt="email" width="20" height="20" />
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2 fixed bottom-[30px] right-[20px] z-30 cursor-pointer">
          <button
            className="p-3 bg-white rounded-full shadow md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <img src="/icons/menu.svg" alt="메뉴" width="20" height="20" />
          </button>
          <button
            className=" bg-white rounded-full shadow"
            onClick={toggleLanguage}
          >
            <span className="flex justify-center items-center w-11 h-11 hover:opacity-60 transition font-semibold">
              {newLang.toUpperCase()}
            </span>
          </button>
          <button
            className=" bg-white rounded-full shadow"
            onClick={() => {
              handleNavigation("/");
              setIsSidebarOpen(false);
            }}
          >
            <img
              src="/icons/home.svg"
              alt="홈"
              width="20"
              height="20"
              className="block p-3 w-11 h-11 hover:opacity-60 transition"
            />
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
