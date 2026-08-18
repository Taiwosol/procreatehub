import HeroPremium from "./__components/HeroPremium";
import TrustSection from "./__components/TrustSection";
import AboutSection from "./__components/AboutSection";
import GallerySection from "./__components/GallerySection";
import Selection from "./__components/Selection";
// import AwardSection from "./__components/AwardSection";
import TestimonialsSection from "./__components/TestimonialsSection";
import CtaSection from "./__components/CTASection";
import FooterDark from "./__components/FooterDark";
// import JournalImages from "./__components/JournalImages";

export default function Home() {
  return (
    <>
      <HeroPremium />
      <TrustSection />

      <AboutSection />
      <GallerySection />
      <Selection />

      {/* Cool Girl Video */}
      {/* <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/cool-girl.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section> */}

      {/* <AwardSection /> */}
      <TestimonialsSection />
      {/* <JournalImages /> */}
      <CtaSection />
      <FooterDark />
    </>
  );
}
