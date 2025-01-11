import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import FloatingButton from "@/components/Floating-button";
import SideBar from "@/components/Side-bar";
import "../styles/globals.css";

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
        <SideBar>{children}</SideBar>
        <FloatingButton />
      </body>
    </html>
  );
}
