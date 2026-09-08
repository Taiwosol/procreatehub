import Image from "next/image";

import ScrollReveal from "./ScrollReveal";
import joaoPedro from "../../public/joao-pedro.png";
import rachaelCharles from "../../public/rachael-charles.png";
import estevaoWillian from "../../public/estevao-willian.png";
import nimah from "../../public/Nimah.jpeg";
import leadOperation from "../../public/lead-operation-img.jpg";
import officeAssistant from "../../public/office-assistant.jpg";
import noimotAdepeju from "../../public/noimot-adepeju-balogun.jpg";
import alAmeenOmogbolahan from "../../public/al-ameen-omogbolahan.jpg";

const partners = [
  {
    name: "Joao Pedro",
    role: "Co-Founder",
    image: joaoPedro,
  },
  {
    name: "Rachael Charles",
    role: "Co-Founder",
    image: rachaelCharles,
  },
  {
    name: "Estevao Willian",
    role: "Co-Founder",
    image: estevaoWillian,
  },
];

const leadership = [
  {
    name: "Nimah Mustapha I.",
    role: "CEO, Founder",
    image: nimah,
  },
  {
    name: "Abass Atanda M.",
    role: "Lead Operator",
    image: leadOperation,
  },
  {
    name: "Ibrahim Kayode O.",
    role: "Office Assistant",
    image: officeAssistant,
  },
  {
    name: "Noimot Adepeju B.",
    role: "Admin",
    image: noimotAdepeju,
  },
  {
    name: "Al-Ameen Omogbolahan",
    role: "Production Assistance",
    image: alAmeenOmogbolahan,
  },
];

/* Heading holds the left of the row, the portraits run three across on the
   right, so both groups read as one column of cards down the page. */
function PeopleGroup({ title, people }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
      <ScrollReveal className="lg:w-[38%] xl:w-[40%] shrink-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
          {title}
        </h2>
      </ScrollReveal>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {people.map((person, index) => (
          <ScrollReveal
            key={person.name}
            className="flex flex-col gap-4"
            delay={index * 0.15}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
                /* Portraits frame from the top so no one loses their head to
                   the 3:4 crop */
                className="object-cover object-top"
                placeholder="blur"
              />
            </div>
            <div>
              <p className="font-medium text-sm md:text-base">{person.name}</p>
              <p className="text-gray-500 text-xs md:text-sm">{person.role}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-white text-black pt-4 pb-8 md:pb-10">
      <div className=" mx-auto px-8">
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          <PeopleGroup title="Meet Our Team" people={leadership} />
          {/* <PeopleGroup title="Partners" people={partners} /> */}
        </div>
      </div>
    </section>
  );
}
