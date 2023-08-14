"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

const HeaderLinks = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <ul>
      {!isHomePage && (
        <li>
          <Link href={"/"}>Inicio</Link>
        </li>
      )}
      <li>
        <Link href={"/"}>Projetos</Link>
      </li>
      <li>
        <Link href={"/about"}>Sobre</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contato</Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
