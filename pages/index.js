import Head from "next/head";
import Navbar from "../components/navbar";
import FloatingButton from "../components/floatingButton";
import HeroSection from "../components/hero";
import PartnersSection from "../components/partners";
import MapSection from "../components/map";
import VideoSection from "../components/video";
import LayoutGreyBackground from "../components/greyBg";
import FeaturesSection from "../components/features";
import IntegratedSection from "../components/integrate";
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
      <MapSection />
      <VideoSection />
      <LayoutGreyBackground>
        <FeaturesSection />
        <IntegratedSection />
        <ReviewSection />
      </LayoutGreyBackground>
      <BookSection />
      <QuestionsSection />
      <FooterSection />
    </>
  );
}
