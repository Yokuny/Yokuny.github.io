import first from "./first.module.css";
import font from "@/style/fonts.module.css";
import ceasar from "@/ceasar.png";

import Link from "next/link";
import Image from "next/image";

import { Source_Sans_3 } from "next/font/google";
const souceSans = Source_Sans_3({ weight: "700", subsets: ["latin"] });

const First = () => {
  return (
    <div className={first.grid}>
      <div className={first.info}>
        <div className={first.content}>
          <h1 className={`${font.title} ${souceSans.className}`}>desenvolvedor full stack web</h1>
          <p className={first.description}>
            Hi I&apos;m Felipe Rangel, a passionate Software Developer & UI/UX Designer based in the Brasil.
          </p>
          <div className={first.btnWorks}>
            <Link href={"./"}>
              <span className={first.myWorks}>SEE MY WORKS</span>
              <span className={first.worksArrow}></span>
            </Link>
          </div>
          <ul className={first.social}>
            <li>
              <Link href={"./"}>Linkedin</Link>
            </li>
            /
            <li>
              <Link href={"./"}>GitHub</Link>
            </li>
            /
            <li>
              <Link href={"/"}>Download CV</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={first.art}>
        <div className={first.content}>
          <h3 className={first.bolinha}></h3>
          <h5 className={first.xis}></h5>
          <Image src={ceasar} width={0} height={400} alt="" />
        </div>
      </div>
    </div>
  );
};

export default First;
