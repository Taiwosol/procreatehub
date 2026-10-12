import Image from "next/image";
import tinaObiora from "../../public/tina-obiora.jpg";
import everythingZee from "../../public/everything-zee.jpg";
import habitualOrganics from "../../public/habitual-organics.jpeg";

const testimonials = [
  {
    quote:
      "Working with ProCr8Hub was the best thing that happened to us in 2020. Thank you for the quality services and awesome deliveries.",
    name: "Temitope Ijeh",
    role: "Founder/CEO Habitual Organics",
    image: habitualOrganics,
  },
  {
    quote:
      "ProCr8Hub is efficient in top notch quality branding. The process was smooth from start to finish, and every delivery came in with a strong attention to detail. If you're looking for a team that can translate ideas into a clean, premium brand presence, they're the right choice.",
    name: "Zainab Elegushi",
    role: "Founder/CEO Everything by Zee",
    image: everythingZee,
  },
  {
    quote:
      "A print partner I can always count on. I’ve been using Procr8Hub for years, and they’ve been such a reliable part of my business journey. They’ve always delivered quality work with great attention to detail and professionalism. I know I can count on them to get the job done right, and that means a lot when you’re running a business.",
    name: "Tina Obiora",
    role: "Founder, CEO of Sprout Media",
    image: tinaObiora,
  },
  {
    quote:
      "You can always trust ProCr8Hub with excellent customer service. I did, and I've never been disappointed. They are always willing to go the extra mile to ensure that their clients are satisfied. I highly recommend them for anyone looking for a reliable and professional service.",
    name: "Bukola Lawal",
    role: "Founder, CEO of Crispy Corner Grills",
    image: tinaObiora,
  },
];

export default function TestimonialsSection({ limit }) {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="bg-white text-black py-8 md:py-10">
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
