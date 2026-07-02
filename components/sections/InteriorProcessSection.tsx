import Image from "next/image";
import { AlertTriangle, Camera, Handshake, LineChart, Users } from "lucide-react";

const sellerProblems = [
  {
    icon: Camera,
    title: "Slabá prezentácia",
    text: "Fotky, text a prvý dojem často znižujú dôveru ešte pred obhliadkou."
  },
  {
    icon: LineChart,
    title: "Zlá cenová stratégia",
    text: "Príliš vysoká cena spáli dopyt, príliš nízka cena oberá majiteľa o peniaze."
  },
  {
    icon: Users,
    title: "Nekvalifikované obhliadky",
    text: "Bez filtra chodia ľudia, ktorí nemajú rozpočet, financovanie alebo reálny záujem."
  },
  {
    icon: Handshake,
    title: "Slabé vyjednávanie",
    text: "Majiteľ môže ustúpiť pod hodnotu, keď nemá dáta, argumenty a proces."
  }
];

export function InteriorProcessSection() {
  return (
    <section
      id="seller-problem"
      data-scene-stage="value"
      data-scene-intensity="rest"
      className="relative isolate z-10 overflow-hidden bg-[#f8f1e6] py-20 md:py-28 lg:py-32"
    >
      <Image
        src="/images/interior-process/interior-process-background.webp"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(251,248,240,0.96)_0%,rgba(251,248,240,0.82)_42%,rgba(251,248,240,0.46)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_46%,rgba(255,255,255,0.52),transparent_35%),radial-gradient(circle_at_16%_18%,rgba(228,79,34,0.11),transparent_32%),radial-gradient(circle_at_88%_82%,rgba(184,93,61,0.10),transparent_30%)]" />

      <div className="container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div data-motion="reveal" className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b85d3d]">
            Problém predávajúceho
          </p>
          <div className="mt-4 h-px w-16 bg-[#b85d3d]/70" />
          <h2 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#11100e] sm:text-6xl lg:text-[5rem]">
            Majitelia často prichádzajú o peniaze ešte pred prvou obhliadkou.
          </h2>
          <div className="mt-8 max-w-2xl rounded-[1.6rem] border border-white/55 bg-[#fbf8f0]/58 p-5 shadow-[0_24px_80px_rgba(42,35,24,0.08)] backdrop-blur-md sm:p-6">
            <p className="text-base leading-8 text-black/70 sm:text-lg">
              Predaj nehnuteľnosti nie je iba inzerát. Slabé fotky, nesprávna cena, nevýrazná prezentácia, slabá
              distribúcia a nejasné vyjednávanie môžu spôsobiť, že majiteľ predá pomalšie alebo pod trhovou hodnotou.
            </p>
          </div>
        </div>

        <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2">
          {sellerProblems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                data-motion-item
                className="rounded-[1.35rem] border border-white/65 bg-white/74 p-6 shadow-[0_22px_70px_rgba(42,35,24,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-full border border-[#ead9c7] bg-[#fff6e8] text-[#e44f22]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-serif text-lg font-semibold text-black/28">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight text-[#17120e]">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-[#3f372f]">{item.text}</p>
              </article>
            );
          })}

          <article
            data-motion-item
            className="rounded-[1.35rem] border border-[#e44f22]/20 bg-[#11100e] p-6 text-[#fffaf0] shadow-[0_28px_90px_rgba(17,16,14,0.22)] sm:col-span-2"
          >
            <AlertTriangle className="text-[#e44f22]" size={28} aria-hidden="true" />
            <p className="mt-5 text-2xl font-black">Preto je hlavným CTA bezplatný odhad ceny, nie kurz.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
              Jeden kvalitný seller lead môže mať násobne vyššiu hodnotu než malý digitálny produkt.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
