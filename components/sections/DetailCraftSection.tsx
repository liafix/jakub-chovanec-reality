import Link from "next/link";
import { ArrowUpRight, BadgeCheck, BarChart3, Camera, Handshake, Megaphone, PlaySquare, Route } from "lucide-react";

const methodFeatures = [
  {
    icon: BarChart3,
    title: "Cenová stratégia",
    text: "Cena sa nastavuje podľa trhu, dopytu, konkurencie a reálnej pozície nehnuteľnosti."
  },
  {
    icon: Camera,
    title: "Premium prezentácia",
    text: "Nehnuteľnosť potrebuje jasný príbeh, dobré záberové uhly, text a argumenty pre kupujúceho."
  },
  {
    icon: PlaySquare,
    title: "Video a social",
    text: "Obsah dáva ponuke pozornosť mimo portálov a buduje dôveru ešte pred obhliadkou."
  },
  {
    icon: Megaphone,
    title: "Distribúcia",
    text: "Portál, osobná značka a databáza kupujúcich majú spolu vytvoriť silnejší dopyt."
  },
  {
    icon: Handshake,
    title: "Vyjednávanie",
    text: "Dáta a proces pomáhajú majiteľovi neustupovať bez dôvodu pod hodnotu."
  },
  {
    icon: Route,
    title: "Transakčné vedenie",
    text: "Cieľom je jasný postup od prvej ceny až po rezerváciu, zmluvy a odovzdanie."
  }
];

const funnelSteps = ["Cena", "Prezentácia", "Dopyt", "Obhliadka", "Vyjednávanie", "Transakcia"];

export function DetailCraftSection() {
  return (
    <section
      id="jakubova-metoda"
      data-scene-stage="craft"
      data-scene-intensity="medium"
      className="relative z-10 overflow-hidden bg-[#FFF8EA] py-20 text-[#111111] md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,248,234,0.86),rgba(255,255,255,0.25)_44%,rgba(246,196,83,0.16))]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 opacity-50 phase3-map-grid" aria-hidden="true" />

      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <article data-motion="reveal" className="sticky top-28 rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#D99A2B]">Jakubova metóda</p>
            <h2 className="mt-6 max-w-[12ch] font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-[#0a0d10] sm:text-6xl lg:text-[5rem]">
              Predaj ako riadený realitný systém.
            </h2>
            <p className="mt-7 max-w-[37rem] text-base leading-8 text-black/64 sm:text-lg">
              Moderný predaj spája cenu, obsah, dáta a disciplínu obhliadok. Web má túto metódu ukázať ešte pred tým,
              než majiteľ vyplní odhad ceny.
            </p>

            <ol className="mt-8 grid gap-2">
              {funnelSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-md border border-black/8 bg-[#f6f8f8]/84 px-3 py-2">
                  <span className="grid size-7 place-items-center rounded-md bg-[#111111] text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-black text-black/68">{step}</span>
                </li>
              ))}
            </ol>

            <Link href="#odhad-ceny" className="btn-primary mt-8">
              Spustiť odhad ceny
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </article>

          <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2">
            {methodFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  data-motion-item
                  className="group min-h-[236px] rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_24px_74px_rgba(15,23,42,0.11)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-md border border-black/8 bg-[#111111] text-[#F6C453]">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-serif text-lg font-semibold text-black/24">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-7 text-2xl font-black leading-tight text-[#0a0d10]">{feature.title}</h3>
                  <p className="mt-5 text-base leading-8 text-black/58">{feature.text}</p>
                </article>
              );
            })}

            <article data-motion-item className="rounded-lg border border-[#F6C453]/24 bg-[#111111] p-6 text-white sm:col-span-2">
              <BadgeCheck className="text-[#F6C453]" size={28} aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black">Metóda musí smerovať ku kontaktu s majiteľom.</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/64">
                Preto sa každý dôkaz, karta a CTA vracia k odhadu ceny nehnuteľnosti zdarma ako primárnemu obchodnému kroku.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
