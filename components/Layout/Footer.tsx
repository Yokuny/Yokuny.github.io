import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import font from "@/style/fonts.module.css";
import footers from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={footers.footer}>
      <div className={`${footers.float} ${font.infoDetail}`}>
        <div className={footers.rights}>
          <div className={footers.content}>
            <span>@ 2023</span>
            <Link href={"https://github.com/Yokuny"}>Yokuny</Link>
          </div>
        </div>
        <div className={footers.social}>
          <div className={footers.content}>
            <Link href={"./"}>
              <BsGithub />
            </Link>
            <Link href={"./"}>
              <BsLinkedin />
            </Link>
            <Link href={"./"}></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
