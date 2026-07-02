import Link from "next/link";
import { ArrowUpRight, BadgeCheck, BarChart3, Camera, Handshake, Megaphone, PlaySquare, Route } from "lucide-react";

const methodFeatures = [
  {
    icon: BarChart3,
    title: "Cenova strategia",
    text: "Cena sa nastavuje podla trhu, dopytu, konkurencie a realnej pozicie nehnutelnosti."
  },
  {
    icon: Camera,
    title: "Premium prezentacia",
    text: "Nehnutelnost potrebuje jasny pribeh, dobre zaberove uhly, text a argumenty pre kupujuceho."
  },
  {
    icon: PlaySquare,
    title: "Video a social",
    text: "Obsah dava ponuke pozornost mimo portalov a buduje doveru este pred obhliadkou."
  },
  {
    icon: Megaphone,
    title: "Distribucia",
    text: "Portal, osobna znacka a databaza kupujucich maju spolu vytvorit silnejsi dopyt."
  },
  {
    icon: Handshake,
    title: "Vyjednavanie",
    text: "Data a proces pomahaju majitelovi neustupovat bez dovodu pod hodnotu."
  },
  {
    icon: Route,
    title: "Transakcne vedenie",
    text: "Cielom je jasny postup od prvej ceny az po rezervaciu, zmluvy a odovzdanie."
  }
];

const funnelSteps = ["Cena", "Prezentacia", "Dopyt", "Obhliadka", "Vyjednavanie", "Transakcia"];

export function DetailCraftSection() {
  return (
    <section
      id="jakubova-metoda"
      data-scene-stage="craft"
      data-scene-intensity="medium"
      className="relative z-10 overflow-hidden bg-[#eef2f4] py-20 text-[#0a0d10] md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.84),rgba(255,255,255,0.25)_44%,rgba(106,167,255,0.12))]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 opacity-50 phase3-map-grid" aria-hidden="true" />

      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <article data-motion="reveal" className="sticky top-28 rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#257a57]">Jakubova metoda</p>
            <h2 className="mt-6 max-w-[12ch] font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-[#0a0d10] sm:text-6xl lg:text-[5rem]">
              Predaj ako riadeny realitny system.
            </h2>
            <p className="mt-7 max-w-[37rem] text-base leading-8 text-black/64 sm:text-lg">
              Moderny predaj spaja cenu, obsah, data a disciplinu obhliadok. Web ma tuto metodu ukazat este pred tym,
              nez majitel vyplni odhad ceny.
            </p>

            <ol className="mt-8 grid gap-2">
              {funnelSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-md border border-black/8 bg-[#f6f8f8]/84 px-3 py-2">
                  <span className="grid size-7 place-items-center rounded-md bg-[#0a0d10] text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-black text-black/68">{step}</span>
                </li>
              ))}
            </ol>

            <Link href="#odhad-ceny" className="btn-primary mt-8">
              Spustit odhad ceny
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
                    <span className="grid size-12 place-items-center rounded-md border border-black/8 bg-[#0b1118] text-[#d8b76a]">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-serif text-lg font-semibold text-black/24">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-7 text-2xl font-black leading-tight text-[#0a0d10]">{feature.title}</h3>
                  <p className="mt-5 text-base leading-8 text-black/58">{feature.text}</p>
                </article>
              );
            })}

            <article data-motion-item className="rounded-lg border border-[#257a57]/22 bg-[#0b1118] p-6 text-white sm:col-span-2">
              <BadgeCheck className="text-[#87ffd2]" size={28} aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black">Metoda musi smerovat ku kontaktu s majitelom.</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/64">
                Preto sa kazdy dokaz, karta a CTA vracia k odhadu ceny nehnutelnosti zdarma ako primarnemu obchodnemu kroku.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
