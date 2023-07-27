import homeStyle from "./style/page.module.css";
import fontStyle from "@/Layout/style/fonts.module.css";

export default function Home() {
  return (
    <main className={homeStyle.main}>
      <div className={homeStyle.grid}>
        <div className={homeStyle.info}>
          <div className={homeStyle.content}>
            <h1>Desenvolvedor Full Stack Web</h1>
            <p>
              Hi I&apos;m Felipe Rangel, a passionate Software Developer & UI/UX Designer based in the Brasil.
            </p>
            <h6>SEE MY WORKS</h6>
          </div>
        </div>
        <div className={homeStyle.art}>
          <div className={homeStyle.content}>
            <h1>Felipe R R</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
