import headers from "./style/header.module.css";
import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className={headers.header}>
      <div className={headers.grid}>
        <div className={headers.logo}>
          <div className={headers.content}>
            <h1>7\</h1>
          </div>
        </div>
        <div className={headers.navLinks}>
          <ul className={headers.content}>
            <li>
              <Link href={"./"}>Início</Link>
            </li>
            <li>
              <Link href={"./"}>Projetos</Link>
            </li>
            <li>
              <Link href={"./"}>Sobre</Link>
            </li>
            <li>
              <Link href={"./"}>Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
