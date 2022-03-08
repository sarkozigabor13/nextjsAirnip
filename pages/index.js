import Head from "next/head";
import Navbar from "../components/navbar";
import FloatingButton from "../components/floatingButton";
import HeroSection from "../components/hero";
import PartnersSection from "../components/partners";
import LayoutGreyBackground from "../components/greyBg";
import ReviewSection from "../components/review";
import BookSection from "../components/book";
import QuestionsSection from "../components/questions";
import FooterSection from "../components/footer";

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
      <LayoutGreyBackground>
        <ReviewSection />
      </LayoutGreyBackground>
      <BookSection />
      <QuestionsSection />
      <FooterSection />
    </>
  );
}
