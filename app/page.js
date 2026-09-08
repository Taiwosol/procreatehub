import HeroCinematic from "./__components/HeroCinematic";
import ScrollReveal from "./__components/ScrollReveal";
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

      <AboutSection />

      <GallerySection />
      {/* <Selection /> */}

      <ScrollReveal>
        <TestimonialsSection limit={1} />
      </ScrollReveal>

      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>
    </>
  );
}
