import Head from "next/head";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import FloatingButton from "../components/floatingButton";
import PartnersSection from "../components/partners";
import FooterSection from "../components/footer";
import QuestionsSection from "../components/questions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airnip</title>
        <meta name="description" content="Airnip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FloatingButton />
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <QuestionsSection />
      <FooterSection />
    </>
  );
}
