import home from "./style/page.module.css";
import font from "@/Layout/style/fonts.module.css";

import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
const souceSans = Source_Sans_3({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={home.main}>
      <div className={home.grid}>
        <div className={home.info}>
          <div className={home.content}>
            <h1 className={`${font.title} ${souceSans.className}`}>desenvolvedor full stack web</h1>
            <p className={home.description}>
              Hi I&apos;m Felipe Rangel, a passionate Software Developer & UI/UX Designer based in the Brasil.
            </p>
            <div className={home.btnWorks}>
              <Link href={"./"}>
                <span className={home.myWorks}>SEE MY WORKS</span>
                <span className={home.worksArrow}></span>
              </Link>
            </div>
            <ul className={home.social}>
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
        <div className={home.art}>
          <div className={home.content}>
            <h1>Felipe R R</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
