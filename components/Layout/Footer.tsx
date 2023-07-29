import footers from "./footer.module.css";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className={footers.footer}>
      <div className={footers.grid}>
        <div className={footers.rights}>
          <div className={footers.content}>
            <p>@ 2023</p>
            <Link href={"./"}>Yokuny</Link>
          </div>
        </div>
        <div className={footers.social}>
          <div className={footers.content}>
            <Link href={"./"}>inicio</Link>
            <Link href={"./"}>Sobre</Link>
            <Link href={"./"}>Projetos</Link>
            <Link href={"./"}>Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
