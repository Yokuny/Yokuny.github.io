import works from "./works.module.css";
import font from "@/style/fonts.module.css";

const Works = () => {
  return (
    <div className={works.block}>
      <div className={works.intro}>
        <h2 className={font.subtitle}>Criado com carinho</h2>
        <p>Esta é uma seleção dos meus trabalhos recentes.</p>
      </div>
      <div className={works.list}>
        <div className={works.content}></div>
      </div>
    </div>
  );
};

export default Works;
