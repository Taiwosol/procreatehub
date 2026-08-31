import Image from "next/image";
import nimah from "../../public/Nimah.jpeg";
import leadOperation from "../../public/lead-operation-img.jpg";
import officeAssistant from "../../public/office-assistant.jpg";

const testimonials = [
  {
    quote:
      "ProCr8Hub is efficient in top notch quality branding. The process was smooth from start to finish, and every delivery came in with a strong attention to detail. If you're looking for a team that can translate ideas into a clean, premium brand presence, they're the right choice.",
    name: "Tina Obiora",
    role: "Founder, CEO of Sprout Media",
    image: nimah,
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

export default function TestimonialsSection() {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div
              className={`${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              } space-y-2`}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                "
              </div>
              <p className="text-xl md:text-2xl lg:text-[32px] xl:text-[38px] 2xl:text-[44px] font-medium leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="pt-2">
                <p className="font-medium text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm md:text-base lg:text-lg">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
