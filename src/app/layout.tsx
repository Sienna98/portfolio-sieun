import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "../styles/globals.css";
import SideBar from "@/components/SideBar/side-bar";

const font = Figtree({ subsets: ["latin"] });

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
      <body className={font.className}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
