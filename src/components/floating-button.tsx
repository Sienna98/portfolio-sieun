"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileSideBar from "./mobile-side-bar";

const FloatingButton = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <div className="flex flex-col gap-2 fixed bottom-[30px] right-[20px] md:hidden z-30">
        <button
          className="p-3 bg-white rounded-full shadow"
          onClick={toggleSidebar}
        >
          <Image src="/icons/menu.svg" alt="메뉴" width="20" height="20" />
        </button>
        <button
          className="p-3 bg-white rounded-full shadow"
          onClick={() => router.push("/")}
        >
          <Image src="/icons/home.svg" alt="홈" width="20" height="20" />
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}

      <MobileSideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default FloatingButton;
