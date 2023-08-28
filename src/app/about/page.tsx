import about from "./about.module.css";
import font from "@/style/fonts.module.css";
import avatar from "@/yea.webp";

import Link from "next/link";
import Image from "next/image";

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ weight: ["200", "900"], subsets: ["latin"] });

import { Qwigley } from "next/font/google";
const qwigley = Qwigley({ weight: ["400"], subsets: ["latin"] });
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });
// como aplicar diferentes fonts por diferentes tamanhos de tela?
const About = () => {
  return (
    <>
      <div className={`${about.grid} ${about.mobileGrid} ${about.first}`}>
        <div className={about.title}>
          <h1 className={`${font.title} ${urbanist.className}`}>
            Desenvolvedor de inovações, transformando cenários comuns em soluções tecnológicas.
          </h1>
        </div>
        <div className={about.avatar}>
          <Image src={avatar} height={350} alt="emoji" />
        </div>
      </div>
      {/*  */}
      <div className={`${about.grid} ${about.typh}`}>
        <p className={`${font.infoDetail} ${about.infoDetail}`}>
          /01
          <span className={`${poppins.className} ${`${poppins.className} ${qwigley.className}`}`}>
            {" "}
            HISTORY
          </span>
        </p>
        <div className={`${about.infoContent} ${font.description}`}>
          <h2>Uma história sobre trabalho e perseverança.</h2>
          <p className={about.info}>
            Hi! I&#39;m Julius Guevarra. I have a strong passion for design and technology. I specialize in
            Fullstack Development and UI/UX Design and my passion is all about building elegant and
            professional user interfaces and web applications. I also do branding and identity design such as
            logo design, letterhead and business card, along with photo editing, image cropping and other
            graphic design services.
          </p>
          <p>
            I live in the Philippines. I am a graduate of Information Technology from Don Honorio Ventura
            State University. I started drawing and designing from a young age and most of my design skills
            and knowledge are self-taught. I got into programming when I was introduced to web programming
            during high school. It fascinated me and it hooked me on, so I decided to pursue this career. Even
            though I took the path of becoming a programmer, my strong and innate talent in arts and design
            persisted. Consequently, I taught myself about multimedia design. Combining the state of the art
            and my programming knowledge, I am able to build a professional and interactive websites.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={about.imageBanner}>
        <div className={about.image}></div>
      </div>
      {/*  */}
      <div className={`${about.grid} ${about.typh}`}>
        <p className={`${font.infoDetail} ${about.infoDetail}`}>
          /02<span className={`${poppins.className} ${qwigley.className}`}> THE PROCESS</span>
        </p>
        <div className={`${about.infoContent} ${font.description}`}>
          <h2>How i work.</h2>
          <p className={about.info}>
            When I start working on a project, I try to get all the information and data from my client that
            are relevant to the project such as goals, demographics and preferred aesthetics. After this, I
            start doing the research about the industry, competition, trends and other factors that are
            necessary for the development of the project. After I have all the data that I need, my next step
            is to work on the wireframe and prototype using tools such as Adobe XD and Figma. After the
            prototype is finished and the wireframes are finalized and approved, this is where I start doing
            the visual designs using various tools such as Adobe Photoshop for processing images, Adobe
            Illustrator for creating vector graphics, and Adobe XD for building the actual visual design.
            After the visual designs are approved, I start on coding and transforming the designs into actual
            code using a wide range of technologies such as HTML, CSS and JavaScript with best practices in
            mind.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={`${about.grid} ${about.typh}`}>
        <p className={`${font.infoDetail} ${about.infoDetail}`}>
          /03<span className={`${poppins.className} ${qwigley.className}`}> TOOLS</span>
        </p>
        <div className={`${about.infoContent} ${font.description}`}>
          <div className={about.infoContent}>
            <h2>What i use.</h2>
            <p className={about.info}>
              What i use. I use a number of tools that make design and development much easier. I usually use
              Adobe XD or Figma interchangeably for doing all the process that includes wireframing,
              prototyping and visual design. For wireframing alone, any graphic design tool can make the job
              done either it is low fidelity or high fidelity wireframe. For development/coding, I use
              different tools specific to the development of the application or website. Listed below are the
              tools and technologies that I use and I&#39;m knowledgeable with.
            </p>
          </div>
          <div className={about.columns}>
            <div className={`${about.column1} ${about.infoContent}`}>
              <h2>Creative Design</h2>
              <ul className={about.info}>
                <li>Adobe Photoshop</li>
                <li>Figma</li>
                <li>Adobe InDesign</li>
                <li>Adobe XD</li>
                <li>Adobe After Effects</li>
              </ul>
            </div>
            <div className={`${about.column2} ${about.infoContent}`}>
              <h2>Web Development</h2>
              <ul className={about.info}>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React JS</li>
                <li>Next JS</li>
                <li>Node JS</li>
                <li>Nest JS</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Prisma</li>
                <li>Redis</li>
                <li>MySQL</li>
                <li>Webpack</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={`${about.grid} ${about.typh}`}>
        <p className={`${font.infoDetail} ${about.infoDetail}`}>
          /04<span className={`${poppins.className} ${qwigley.className}`}> CONTACT</span>
        </p>
        <div className={`${about.infoContent} ${font.description}`}>
          <div className={about.infoContent}>
            <h2>Social.</h2>
            <ul className={about.social}>
              <li>
                <Link href={"https://linkedin.com/in/yokuny/"}>Linkedin</Link>
              </li>
              /
              <li>
                <Link href={"https://github.com/Yokuny"}>GitHub</Link>
              </li>
              /
              <li>
                <Link href={"https://wa.me/5528999848929"}>WhatsApp</Link>
              </li>
            </ul>
          </div>
          <div className={about.infoContent}>
            <h2>Email.</h2>
            <ul className={about.social}>
              <li>
                <Link href={"mailto:Felipe.vni@hotmail.com"}>Felipe.vni@hotmail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={about.typh}>
        <div className={about.reference}>
          <div>
            <h1>“Escolha um trabalho que você ame e não terá que trabalhar um único dia em sua vida.”</h1>
            <p>— Confucius</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
