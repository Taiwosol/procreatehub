"use client";

import Image from "next/image";
import FooterDark from "../../__components/FooterDark";
import Navigation from "../../__components/Navigation";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navigation textColor="text-black" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black tracking-tight">
              Your Portfolio Is Your Identity — Why Photography Style Sets You
              Apart
            </h1>
            <div className="flex items-center gap-8">
              <p className="text-sm md:text-base">May 22 2025</p>
              <p className="text-sm md:text-base text-gray-700">Journals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/image-section-05.png"
            fill
            className="object-cover"
            alt="Your Portfolio Is Your Identity"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                Defining Your Visual DNA
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Every photographer has a fingerprint — that subtle, unique
                rhythm in how they compose, light, and capture emotion. The
                sooner you identify that rhythm, the more distinct your
                portfolio becomes. It’s not about doing everything; it’s about
                doing something with intention. To define your visual DNA, look
                inward. What themes do you naturally gravitate toward? What
                subjects make you lose track of time? What colors feel like you?
                The answers form the foundation of your identity. From there,
                your portfolio should reflect cohesion — not sameness, but
                clarity. Audiences remember voices that sound consistent. When
                your portfolio carries a recognizable tone — whether moody,
                minimalist, cinematic, or experimental — it builds credibility.
                Your work starts to speak before you even introduce yourself.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                Curation Over Collection
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                A strong portfolio isn’t about how much you show; it’s about
                what you choose to show. Every piece of work should earn its
                place. Curation is an art form — the act of editing your own
                story so that every image contributes to a bigger narrative.
                When someone browses your portfolio, they should sense flow —
                not randomness. Organize your work by themes, emotions, or
                journeys rather than genres alone. For example, group images by
                how they feel: serene, dynamic, intimate, vast. This emotional
                logic gives your portfolio soul and helps audiences connect more
                deeply. At BraceLend, we always remind creators that restraint
                is powerful. Showing less but saying more creates intrigue,
                focus, and memorability — the three pillars of timeless design.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                Evolving Without Losing Yourself
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                As you grow, your style will naturally evolve — but your
                identity should stay intact. Change is essential, but direction
                is what keeps evolution authentic. The key is to adapt with
                purpose, not abandon your roots for trends. Your visual identity
                should feel like a conversation between past and present. Let
                older projects remind you where you started, but allow new ideas
                to redefine your boundaries. That’s how your work stays fresh
                without losing coherence. Remember: your portfolio is not a
                final statement; it’s a living expression. Update it with
                intention, refine it often, and let it age gracefully with your
                creative journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Another Image */}
      <section className="pb-16">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/image-section-06.png"
            fill
            className="object-cover"
            alt="Photography portfolio"
          />
        </div>
      </section>

      {/* Closing Thought */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium">
              Closing Thought
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Your portfolio is more than a showcase — it&apos;s your identity.
              It tells the world who you are as an artist and what you stand
              for. So curate it with intention. Let your style shine through in
              every image. And remember, the goal isn&apos;t to please everyone
              — it&apos;s to attract the people who connect with your vision.
              Those are the clients who will value your work and give you the
              freedom to create your best art.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterDark />
    </main>
  );
}
