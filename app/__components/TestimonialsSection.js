import Image from "next/image";
import nimah from "../../public/Nimah.jpeg";

const testimonials = [
  {
    quote:
      "Procr8 Hub is efficient in top notch quality branding. The process was smooth from start to finish, and every delivery came in with a strong attention to detail. If you're looking for a team that can translate ideas into a clean, premium brand presence, they're the right choice.",
    name: "Tina Obiora",
    role: "Founder, CEO of Sprout Media",
    image: nimah,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white text-black py-16 px-10">
      <div className="max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="md:order-2 space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl">“</div>
              <p className="text-xl md:text-2xl lg:text-[32px] font-medium leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="pt-2">
                <p className="font-medium text-lg md:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <div className="md:order-1">
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
