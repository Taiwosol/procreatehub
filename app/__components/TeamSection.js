import Image from "next/image";
import joaoPedro from "../../public/joao-pedro.png";
import rachaelCharles from "../../public/rachael-charles.png";
import estevaoWillian from "../../public/estevao-willian.png";
import nimah from "../../public/Nimah.jpeg";
import leadOperation from "../../public/lead-operation-img.jpg";
import officeAssistant from "../../public/office-assistant.jpg";

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
    name: "Nimah Mustapha .I.",
    role: "CEO Founder",
    image: nimah,
  },
  {
    name: "Unknown",
    role: "Lead Operator",
    image: leadOperation,
  },
  {
    name: "Unknown",
    role: "Office Assistant",
    image: officeAssistant,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white text-black pt-4 pb-16 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Leadership Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-12 tracking-tight">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((person, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">
                      {person.name}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Partners Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-12 tracking-tight">
              Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((person, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">
                      {person.name}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
