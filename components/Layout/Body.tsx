"use client";
import { useState } from "react";
import { IoSunny, IoMoon, IoArrowDown, IoArrowUp } from "react-icons/io5";

import style from "./body.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Body = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const [scroll, setScroll] = useState("down");

  const ToggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  const Scroll = () => {
    if (scroll === "down") {
      setScroll("up");
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      setScroll("down");
      window.scrollTo(0, 0);
    }
  };

  return (
    <main className={`${theme}-theme`}>
      <Header />
      {children}
      <Footer />
      <div className={style.optionsMenu}>
        <ul>
          <li className={style.themeSwitch} onClick={ToggleTheme}>
            {theme === "light" ? <IoSunny /> : <IoMoon />}
          </li>
          <li className={style.backTop} onClick={Scroll}>
            {scroll === "down" ? <IoArrowDown /> : <IoArrowUp />}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Body;
