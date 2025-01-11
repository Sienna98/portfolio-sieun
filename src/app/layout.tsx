import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "../styles/globals.css";
import FloatingButton from "@/components/플로팅버튼";
import DesktopSideBar from "@/components/사이드바";

const figTree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIEUN PORTFOLIO",
  description: "", // TODO: description 추가하기
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
      </body>
    </html>
  );
}
