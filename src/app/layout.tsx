import { Figtree } from "next/font/google";

import DesktopSideBar from "@/components/desktop-side-bar";
import FloatingButton from "@/components/floating-button";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";

const figTree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="SIEUN PORTFOLIO" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 이시은 포트폴리오"
        />
        <meta property="og:image" content="/images/thumbnail.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sieun-portfolio.netlify.app/"
        />
      </head>
      <body className={`${figTree.className}`}>
        <DesktopSideBar>{children}</DesktopSideBar>
        <FloatingButton />
        <ToastContainer />
      </body>
    </html>
  );
}
