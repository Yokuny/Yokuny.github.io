import contact from "./contact.module.css";
import font from "@/style/fonts.module.css";
import { FaTelegramPlane, FaRegPaperPlane } from "react-icons/fa";

import { Source_Sans_3 } from "next/font/google";
const souceSans = Source_Sans_3({ weight: "900", subsets: ["latin"] });

const Contact = () => {
  return (
    <div className={contact.grid}>
      <div className={contact.container}>
        <div className={font.title}>
          <h1 className={souceSans.className}>Get in touch.</h1>
          <p>
            Do you fancy saying hi to me or you want to get started with your project and you need my help?
            Feel free to contact me.
          </p>
        </div>
        <form className={`${font.title} ${contact.form}`}>
          <input type="text" name="name" id="" placeholder={"Your name"} />
          <input type="email" name="email" id="" placeholder={"Your email"} />
          <input type="text" name="subject" id="" placeholder={"Assunto"} />
          <textarea name="message" id="" cols={30} rows={4} placeholder={"Message"}></textarea>
          <button>
            SEND MESSAGE
            <FaTelegramPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
