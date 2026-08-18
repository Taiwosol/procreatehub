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
              Transform Your Photography Game — Creative Vision Is Key Today
            </h1>
            <div className="flex items-center gap-8">
              <p className="text-sm md:text-base">June 12 2025</p>
              <p className="text-sm md:text-base text-gray-700">Journals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/image-section-01.png"
            fill
            className="object-cover"
            alt="Transform Your Photography Game"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                Beyond the Frame
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Every great photograph begins before the camera is lifted. The
                process starts in your mind, where ideas take shape long before
                they turn into light and pixels. Vision gives your work
                direction — it tells you what to focus on, what to exclude, and
                what emotion you want to evoke. When you shoot with intention,
                every frame has meaning. Thinking beyond the frame means
                understanding what your image contributes to a broader story.
                Whether you’re capturing a portrait, a city street, or a
                landscape, your creative decisions — composition, depth, focus —
                all point toward a message. You’re not just freezing time;
                you’re designing how time is remembered. So before you press the
                shutter, pause and ask yourself: what am I trying to make people
                feel? That single question turns casual documentation into
                visual storytelling. It’s the difference between a technically
                correct photo and one that lingers in memory.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                Crafting Intentional Narratives
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                In every form of art, storytelling sits at the center — and
                photography is no different. A strong creative vision lets you
                design a narrative that flows through your work. Think about how
                light shifts across a subject, how colors set the tone, and how
                framing can change the viewer’s emotional response. Each of
                these elements becomes part of your visual grammar. Intentional
                photography requires awareness and empathy. You’re not just
                showing what’s there; you’re guiding how people interpret it.
                The placement of your subject, the shadows you embrace, even the
                moments you choose not to capture — all of it adds layers to
                your message. This approach is what elevates images from
                beautiful to meaningful. The most powerful photographs don’t
                speak loudly — they whisper truth. They make you look twice,
                think deeper, and feel something you didn’t expect. That’s the
                real craft of visual narrative: building emotion that lasts
                beyond the scroll.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                Evolving Your Eye
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Vision isn’t static — it grows with experience. Every project,
                every experiment, every failed shot expands your understanding
                of how you see the world. To evolve creatively, you must remain
                curious. Step outside your comfort zone — photograph what you
                don’t yet understand. If you mostly shoot weddings, try nature;
                if you’re into cars, try portraits. Each new lens challenges how
                you interpret light and story. Growth also requires reflection.
                Look back on your older work and identify what’s changed — not
                just technically, but emotionally. You’ll notice how your sense
                of timing, patience, and detail deepens over time. This
                evolution is what keeps your art alive. At BraceLend, we see
                vision as a lifelong process — a constant refinement of
                perception. You don’t “find” your creative voice once; you build
                it continuously, with every frame and every story you tell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Another Image */}
      <section className="pb-16">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/image-section-02.png"
            fill
            className="object-cover"
            alt="Photography"
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

      {/* Related Post Section */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            Related Post
          </h2>
          <Link href="/journals/camera-superpower" className="block">
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              <Image
                src="/image-section-03.png"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Related Post"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <p className="text-sm md:text-base font-medium mb-2">
                  June 10 2025
                </p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight max-w-xl">
                  A Camera Is More Than Just Gear — It&apos;s a Superpower for
                  Dynamic Creatives
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
