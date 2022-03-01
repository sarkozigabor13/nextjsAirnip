import Head from "next/head";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airnip</title>
        <meta name="description" content="Airnip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
    </>
  );
}
