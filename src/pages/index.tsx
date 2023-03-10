import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/modules/Navbar'
import { inter } from "../utils/fonts";
import { MainContent } from '@/modules/MainContent';
import { Footer } from '@/modules/Footer';
import { Planets } from '@/modules/Planets';
import { Shining } from '@/modules/Shining';


export default function Home() {
  return (
    <>
      <Head>
        <title>Welbex</title>
        <meta name="description" content="крупный интегратор CRM в Росcии и ещё 8 странах" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.className} ${styles.container}`}>
        <Navbar />
        <MainContent />
        <Footer />
        <Planets />
        <Shining />
      </main>
    </>
  );
}
