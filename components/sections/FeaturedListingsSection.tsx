import Image from "next/image";
import { ArrowUpRight, BadgeEuro, Home, MapPin, Ruler, Tag, type LucideIcon } from "lucide-react";

const featuredListings = [
  {
    title: "Samostatná budova s 3 samostatnými jednotkami v Piešťanoch",
    price: "610 000 €",
    type: "predaj",
    location: "Piešťany",
    usableArea: "325 m²",
    rooms: "8 izieb",
    image: "/images/listings/property-610000.webp",
    alt: "Samostatná budova s 3 samostatnými jednotkami v Piešťanoch"
  },
  {
    title: "Zrekonštruovaný rodinný dom so záhradou v Piešťanoch",
    price: "310 000 €",
    type: "predaj",
    location: "Piešťany",
    usableArea: "115 m²",
    rooms: "3 izby",
    image: "/images/listings/property-310000.webp",
    alt: "Zrekonštruovaný rodinný dom so záhradou v Piešťanoch"
  },
  {
    title: "Priestranný 3-izbový byt s dvoma balkónmi v Piešťanoch",
    price: "210 000 €",
    type: "predaj",
    location: "Piešťany",
    usableArea: "100 m²",
    rooms: "3 izby",
    image: "/images/listings/property-210000.webp",
    alt: "Priestranný 3-izbový byt s dvoma balkónmi v Piešťanoch"
  }
];

const metadataIcons: Record<"type" | "location" | "usableArea" | "rooms", LucideIcon> = {
  type: Tag,
  location: MapPin,
  usableArea: Ruler,
  rooms: Home
};

export function FeaturedListingsSection() {
  return (
    <section
      id="vybrane-ponuky"
      data-scene-stage="index"
      data-scene-intensity="rest"
      className="phase3-section-dark relative z-10 overflow-hidden py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 -z-10 opacity-35 phase3-hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div data-motion="reveal" className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F6C453]">Vybraná ponuka</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
              Vybrané nehnuteľnosti
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              Ukážka nehnuteľností, pri ktorých rozhoduje príprava, prezentácia, správna cena a jasná komunikácia so
              záujemcami.
            </p>
          </div>

          <a
            href="https://www.andelzachar.sk/makler/jakub-chovanec/"
            target="_blank"
            rel="noopener noreferrer"
            data-motion="reveal"
            className="btn-primary hero-primary-cta hero-primary-cta--light w-fit"
          >
            Celá ponuka makléra
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div data-motion="stagger" className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.title}
              data-motion-item
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#F6C453]/34 hover:bg-white/[0.075]"
            >
              <div className="relative aspect-[600/338] overflow-hidden bg-[#111111]">
                <Image
                  src={listing.image}
                  alt={listing.alt}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 768px) 33vw, 92vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-white/12 bg-black/46 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/82 backdrop-blur">
                  Aktuálne
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#F6C453]">
                  <BadgeEuro size={17} aria-hidden="true" />
                  {listing.price}
                </p>
                <h3 className="mt-4 min-h-[4.5rem] text-2xl font-black leading-tight text-white">{listing.title}</h3>

                <dl className="mt-6 grid gap-3 text-sm">
                  {([
                    ["Druh", listing.type, metadataIcons.type],
                    ["Lokalita", listing.location, metadataIcons.location],
                    ["Úžitková plocha", listing.usableArea, metadataIcons.usableArea],
                    ["Počet izieb", listing.rooms, metadataIcons.rooms]
                  ] satisfies Array<[string, string, LucideIcon]>).map(([label, value, Icon]) => (
                    <div key={label} className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.055] px-3 py-2">
                      <dt className="inline-flex items-center gap-2 text-white/48">
                        <Icon size={15} className="text-[#F6C453]" aria-hidden="true" />
                        {label}
                      </dt>
                      <dd className="text-right font-black text-white/82">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { featuredListings };
