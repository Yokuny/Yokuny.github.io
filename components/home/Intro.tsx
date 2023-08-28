import intro from "./intro.module.css";
import font from "@/style/fonts.module.css";
import ceasar from "@/ceasar.png";

import Link from "next/link";
import Image from "next/image";

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ weight: "900", subsets: ["latin"] });

const Intro = () => {
  return (
    <div className={intro.grid}>
      <div className={intro.info}>
        <div className={`${intro.content} ${font.title}`}>
          <h1 className={urbanist.className}>desenvolvedor full stack</h1>
          <p>
            Hi I&apos;m Felipe Rangel, a passionate Software Developer & UI/UX Designer based in the Brasil.
          </p>
          <div className={intro.btnWorks}>
            <Link href={"./"}>
              <span className={`${intro.myWorks} ${font.infoDetail}`}>SEE MY WORKS</span>
              <span className={intro.worksArrow}></span>
            </Link>
          </div>
          <ul className={`${font.infoDetail} ${intro.social}`}>
            <li>
              <Link href={"https://linkedin.com/in/yokuny/"}>Linkedin</Link>
            </li>
            /
            <li>
              <Link href={"https://github.com/Yokuny"}>GitHub</Link>
            </li>
            /
            <li>
              <Link href={"/"}>Download CV</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={intro.art}>
        <div className={intro.content}>
          <h3 className={intro.bolinha}></h3>
          <h5 className={intro.xis}></h5>
          <Image src={ceasar} width={0} height={400} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
