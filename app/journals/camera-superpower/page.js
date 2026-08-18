"use client";

import Image from "next/image";
import Link from "next/link";
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
              A Camera Is More Than Just Gear — It’s a Superpower for Dynamic
              Creatives
            </h1>
            <div className="flex items-center gap-8">
              <p className="text-sm md:text-base">June 10 2025</p>
              <p className="text-sm md:text-base text-gray-700">Journals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/image-section-03.png"
            fill
            className="object-cover"
            alt="A Camera Is More Than Just Gear"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                The Tool&apos;s Power Lies in Its Visionon
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                It’s easy to be drawn into the allure of the latest cameras,
                lenses, and accessories. But even the most advanced gear cannot
                replace imagination. Vision determines how tools are used — not
                the other way around. A simple frame, seen through a thoughtful
                eye, can be more powerful than an image taken with a $5,000
                setup but no sense of story. The true strength of your camera
                lies in your ability to guide it. Every angle, every lens
                choice, every exposure setting reflects a decision rooted in
                meaning. You don’t just take photos — you compose experiences.
                The lens becomes your way of speaking without words, of
                revealing truths invisible to the naked eye. When you understand
                your camera’s limits, you also discover your own creativity.
                That’s where artistry begins — not in perfect clarity or
                flawless color, but in the connection between what you see and
                what you feel.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                Emotion Over Perfection
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Some of the world’s most timeless photographs are technically
                imperfect — slightly blurred, underexposed, or grainy — yet
                unforgettable. Why? Because emotion always outweighs precision.
                A creative’s true strength is knowing when to let go of
                technicality to embrace authenticity. When you treat your camera
                like an emotional translator, every shot becomes personal. The
                sound of the shutter, the anticipation of light, the
                unpredictability of moments — they all add humanity to your
                work. This is where the distinction between a photographer and a
                storyteller becomes clear: one captures what happens, the other
                captures why it matters. At BraceLend, we encourage artists to
                experiment with imperfection. Let spontaneity guide your
                process. The rawness in a photograph often speaks louder than
                flawless execution — because real emotion doesn’t need
                retouching.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                The Dialogue Between Artist and Machine
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Every photographer develops a rhythm — a silent language between
                human intuition and mechanical precision. Your camera doesn’t
                just record; it responds. The more you shoot, the more that
                dialogue deepens. You begin to anticipate how the camera reacts
                to light, movement, and mood. It becomes part of you. In this
                relationship, trust matters more than control. You learn to
                listen to the device, to feel when it’s time to adjust or when
                it’s time to simply click. This dance between instinct and
                technique defines a mature creative process — one that flows
                naturally and effortlessly. Ultimately, your camera is not just
                a piece of equipment — it’s your voice. It transforms vision
                into visual language, emotion into permanence. Treat it with
                intention, and it will never fail to speak on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Another Image */}
      <section className="pb-16">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/image-section-04.png"
            fill
            className="object-cover"
            alt="Camera and accessories"
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
              A camera is a tool, but what you do with it is magic. It&apos;s
              not about the price tag or the specs — it&apos;s about the courage
              to see the world differently, to capture the moments others miss,
              and to tell stories that matter. Your gear doesn &apos;t make you
              a creative; your vision does. So pick up your camera, trust your
              eye, and let your superpower shine.
            </p>
          </div>
        </div>
      </section>

      {/* Related Post Section */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            Related Post
          </h2>
          <Link href="/journals/portfolio-identity" className="block">
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              <Image
                src="/image-section-05.png"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Related Post"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <p className="text-sm md:text-base font-medium mb-2">
                  May 22 2025
                </p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight max-w-xl">
                  Your Portfolio Is Your Identity — Why Photography Style Sets
                  You Apart
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <FooterDark />
    </main>
  );
}
