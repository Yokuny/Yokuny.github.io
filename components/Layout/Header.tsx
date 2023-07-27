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
          <div className={headers.content}>
            <Link href={"./"}>Começo</Link>
            <Link href={"./"}>Sobre</Link>
            <Link href={"./"}>Projetos</Link>
            <Link href={"./"}>Contato</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
