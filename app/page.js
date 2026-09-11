import HeroCinematic from "./__components/HeroCinematic";
import LogoMarquee from "./__components/LogoMarquee";
import AboutSection from "./__components/AboutSection";
import GallerySection from "./__components/GallerySection";
// import Selection from "./__components/Selection";
import TestimonialsSection from "./__components/TestimonialsSection";
import FAQSection from "./__components/FAQSection";
import CtaSection from "./__components/CTASection";
import Footer from "./__components/Footer";

export default function Home() {
  return (
    <>
      <HeroCinematic />

      <LogoMarquee />

      <AboutSection />

      <GallerySection />
      {/* <Selection /> */}

      <TestimonialsSection limit={1} />

      <FAQSection />

      <CtaSection />

      <Footer />
    </>
  );
}
