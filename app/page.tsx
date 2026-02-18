import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BottomMenu from "@/components/BottomMenu";
import Information from "@/components/Information";
import ImageSlider from "@/components/ImageSlider";
import Overview from "@/components/Overview";
import HistorySection from "@/components/HistorySection";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />
      <BottomMenu />

      {/* INFO */}
      <Information />

      <ImageSlider />

      {/* OVERVIEW */}
      <Overview />
      <HistorySection />

      {/* ROOMS */}
      <Rooms />

      {/* FULL IMAGE */}
      <Gallery />

      {/* QUOTE */}
      <QuoteSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
