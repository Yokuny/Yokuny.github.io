import "./style/globals.css";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev web full stack",
  description:
    "Desenvolvedor web full stack apaixonado por construir aplicações completas, fáceis de usar e eficientes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
