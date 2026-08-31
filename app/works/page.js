import Image from "next/image";
import Link from "next/link";
import FooterDark from "../__components/FooterDark";

export const metadata = {
  title: "Works",
};

export default function Page() {
  const albums = [
    {
      id: 1,
      title: "Printing Production",
      image: "/printing-album-img.jpg",
      href: "/works/album/printing-production",
    },
    {
      id: 2,
      title: "Branding",
      image: "/branding-album-img.jpg",
      href: "/works/album/branding",
    },
    {
      id: 3,
      title: "Packaging",
      image: "/packaging-album-img.jpg",
      href: "/works/album/packaging",
    },
    {
      id: 4,
      title: "Gift Sales & Procurement",
      image: "/gift-album-img.jpg",
      href: "/works/album/gift-sales-procurement",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className=" mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black tracking-tight">
            A curated collection of our services across print, brand, packaging,
            and gifts.
          </h1>
        </div>
      </section>

      {/* Album Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {albums.map((album, index) => (
              <Link href={album.href} key={album.id} className="group">
                <div className="mb-4">
                  <p className="text-lg font-normal text-black mb-2">
                    ({String(index + 1).padStart(2, "0")})
                  </p>
                  <p className="text-2xl font-medium text-black group-hover:opacity-60 transition-opacity mb-4">
                    {album.title}
                  </p>
                </div>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={album.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={album.title}
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterDark />
    </main>
  );
}
