"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const FloatingButton = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 fixed bottom-[30px] right-[20px] md:hidden">
      <button
        className="p-3 bg-white rounded-full shadow"
        onClick={() => router.push("/")}
      >
        <Image src="/icons/menu.svg" alt="홈" width="20" height="20" />
      </button>
      <button
        className="p-3 bg-white rounded-full shadow"
        onClick={() => router.push("/")}
      >
        <Image src="/icons/home.svg" alt="홈" width="20" height="20" />
      </button>
    </div>
  );
};

export default FloatingButton;
