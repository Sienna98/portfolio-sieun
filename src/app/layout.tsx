import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "../styles/globals.css";
import FloatingButton from "@/components/floating-button";
import DesktopSideBar from "@/components/desktop-side-bar";
import { ToastContainer } from "react-toastify";

const figTree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIEUN PORTFOLIO",
  description: "프론트엔드 개발자 이시은 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figTree.className}`}>
        <DesktopSideBar>{children}</DesktopSideBar>
        <FloatingButton />
        <ToastContainer />
      </body>
    </html>
  );
}
