import Image from "next/image";
import tinaObiora from "../../public/tina-obiora.jpeg";
import leadOperation from "../../public/lead-operation-img.jpg";
import officeAssistant from "../../public/office-assistant.jpg";

const testimonials = [
  {
    quote:
      "ProCr8Hub is efficient in top notch quality branding. The process was smooth from start to finish, and every delivery came in with a strong attention to detail. If you're looking for a team that can translate ideas into a clean, premium brand presence, they're the right choice.",
    name: "Tina Obiora",
    role: "Founder, CEO of Habitual Organics",
    image: tinaObiora,
  },
  {
    quote:
      "Working with ProCr8Hub on our packaging redesign was a game-changer. They understood our brand vision immediately and delivered packaging that not only looks stunning on shelves but also tells our story perfectly. Truly exceptional craftsmanship.",
    name: "Marcus Chen",
    role: "Creative Director, Lumina Cosmetics",
    image: leadOperation,
  },
  {
    quote:
      "From signage to corporate gifting, ProCr8Hub handled every aspect of our nationwide rebrand flawlessly. Their logistics team ensured timely delivery across multiple states, and the quality was consistent everywhere. Highly recommended for large-scale projects.",
    name: "Sarah Wellington",
    role: "Head of Marketing, Northwind Retail Group",
    image: officeAssistant,
  },
];

export default function TestimonialsSection({ limit }) {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="bg-white text-black py-16">
      <div className="mx-auto px-6 sm:px-8 lg:px-10 space-y-24 md:space-y-32">
        {shown.map((testimonial, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-8 md:gap-12 lg:gap-16 items-stretch"
          >
            {/* Portrait */}
            <div className="order-2 md:order-1">
              <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-sm">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            {/* Quote — sits flush with the top of the portrait, attribution with its bottom */}
            <div className="order-1 md:order-2 flex flex-col justify-between gap-8">
              <div className="space-y-1 lg:space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl leading-none">
                  "
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-[26px] xl:text-[30px] 2xl:text-[34px] font-medium leading-snug">
                  {testimonial.quote}
                </p>
              </div>
              <div>
                <p className="font-medium text-base md:text-lg lg:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-xs md:text-sm lg:text-base">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
