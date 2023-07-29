import home from "./style/page.module.css";
import First from "@/home/first";
import Works from "@/home/works";

export default function Home() {
  return (
    <main className={home.main}>
      <First />
      <Works />
    </main>
  );
}
