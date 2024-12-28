import type { Metadata } from "next";
import { Figtree, Noto_Sans_KR } from "next/font/google";

import "../styles/globals.css";
import SideBar from "@/components/Side-bar";
import FloatingButton from "@/components/Floating-button";

const figtree = Figtree({ subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin", "latin-ext"],
});

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
      <body className={`${figtree.className} ${notoSansKr.className}`}>
        <SideBar>{children}</SideBar>
        <FloatingButton />
      </body>
    </html>
  );
}
