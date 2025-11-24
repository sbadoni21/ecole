import NewsData from "../components/NewsData";
import Faq from "../components/Faq";
import Whyus from "@/components/Whyus";
import Activities from "@/components/Activities";
import Sports from "@/components/Sports";
import Life from "@/components/Life";
import ImageCarousel from "@/components/ImageCarousel";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div>
      <ImageCarousel />
      <AboutSection />
      <Whyus />
      <Activities />
      <Sports />
      <Life />
      <Faq />
    </div>
  );
}
