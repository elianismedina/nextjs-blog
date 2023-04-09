import Link from "next/link";
import styles from "../styles/Contact.module.css";
import Image from "next/image";

import {
  Alumni_Sans_Collegiate_One,
  Inter,
  Nanum_Pen_Script,
  Noto_Sans_Psalter_Pahlavi,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <h1 className={styles.title}>My contact information</h1>
      <br />

      <div className={styles.grid}>
        <div className={styles.card}>
          <p>
            Phone number:{" "}
            <a href="https://wa.me/573008828214" target="_blank">
              300-882-8214
            </a>{" "}
          </p>
          <br />
          <Link href="https://wa.me/573008828214">
          <Image
            
            src="/whatsapp.png"
            alt="Whatsapp Logo"
            width={50}
            height={50}
            priority
          />
          </Link>
          
        </div>
        <br />

        <div className={styles.card}>
          <p>
            Email:<a href="mailto:elianismedina05@outlook.com">{" "} elianismedina05@outlook.com{" "}
            </a>
          </p>
          <Link href="mailto:elianismedina05@outlook.com">
          <Image
            
            src="/email.png"
            alt="Email Logo"
            width={50}
            height={50}
            priority
          />
          </Link>
        </div>
        <br />

        <div className={styles.card}>
          <p>
            Address: Calle 77 B # 129-70 Bloque 2 Apto 906. Gran granada.
            Engativá.{" "}
          </p>
          <br />
          <Image
            src="/address.png"
            alt="Address Logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <br />

        <div className={styles.card}>
          <a href="https://www.linkedin.com/in/elianis-medina/" target="_blank">
            Linkedin profile
          </a>
          <br />
          <Link href="https://www.linkedin.com/in/elianis-medina/" target="_blank">
          <Image
            
            src="/linkedin.png"
            alt="LinkedIn Logo"
            width={50}
            height={50}
            priority
          />
          </Link>
        </div>
        <br />
      </div>
      <br />
        <button className={styles.backbutton}>
        <Link href="/">Back to home</Link>
        </button>

    

      
    </>
  );
}
