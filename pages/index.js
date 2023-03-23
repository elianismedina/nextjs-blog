import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import useDownloader from "react-use-downloader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Elianis Medina | Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <a
            download="public/addRequestMeta.pdf"
            href="public/resume.pdf"
            alt="resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Get started by checking&nbsp;
              <code className={styles.code}>my resume</code>
            </p>
          </a>
          
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={200}
                height={48}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.png"
            alt="Next.js Logo"
            width={350}
            height={350}
            priority
          />

          <div className={styles.thirteen}>
            <Image
              src="/thirteen.jpg"
              alt="13"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="/contact"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check my number, email adress and other contact information.
            </p>
          </Link>
          <Link
            href="/education"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Education <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check my studies and educational background.
            </p>
          </Link>
          <Link
            href="/work"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Work experience <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check the companies I have worked for in the past and my job
              positions.
            </p>
          </Link>

          <Link
            href="/skills"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Skills <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check the skills I have adquired during my work life.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
