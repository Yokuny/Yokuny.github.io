import "./style/globals.css";

import Body from "@/Layout/Body";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dev web full stack",
  description:
    "Desenvolvedor web full stack apaixonado por construir aplicações completas, fáceis de usar e eficientes.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Body>{children}</Body>
      </body>
    </html>
  );
};

export default RootLayout;
