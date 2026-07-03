import Link from "next/link";
import { AlertTriangle, ArrowUpRight, Camera, Handshake, LineChart, ShieldAlert, Users } from "lucide-react";

const sellerProblems = [
  {
    icon: Camera,
    title: "Slabá prezentácia",
    text: "Prvý dojem rozhoduje skôr, než záujemca zavolá. Slabé fotky, text a staging znižujú dôveru aj cenu."
  },
  {
    icon: LineChart,
    title: "Zlá cena",
    text: "Príliš vysoká cena spáli dopyt. Príliš nízka pripraví majiteľa o hodnotu, ktorú už ťažko získa späť."
  },
  {
    icon: Users,
    title: "Slabé obhliadky",
    text: "Bez kvalifikácie chodia ľudia bez rozpočtu, financovania alebo reálnej motivácie kúpiť."
  },
  {
    icon: Handshake,
    title: "Tlak pri vyjednávaní",
    text: "Majiteľ ustupuje rýchlejšie, keď nemá dáta, argumenty a jasný postup predaja."
  }
];

const lossSignals = ["nesprávna cena", "slabý inzerát", "chaos v obhliadkach", "predaj pod hodnotou"];

export function InteriorProcessSection() {
  return (
    <section
      id="seller-problem"
      data-scene-stage="value"
      data-scene-intensity="rest"
      className="phase3-section-dark relative isolate z-10 overflow-hidden py-20 text-white md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 opacity-40 phase3-hero-grid" aria-hidden="true" />
      <div className="container relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div data-motion="reveal" className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F6C453]">Problém predávajúceho</p>
          <h2 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-[5.2rem]">
            Peniaze sa strácajú skôr, než príde prvá obhliadka.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
            Predaj nehnuteľnosti nie je iba portálový inzerát. Cena, dôvera, video, distribúcia a kvalifikácia záujemcov
            rozhodujú o tom, či majiteľ predáva strategicky alebo iba reaguje na chaos.
          </p>

          <div className="mt-8 grid max-w-xl gap-2">
            {lossSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3">
                <ShieldAlert size={18} className="text-[#F97316]" aria-hidden="true" />
                <span className="text-sm font-bold text-white/72">{signal}</span>
              </div>
            ))}
          </div>

          <Link href="#odhad-ceny" className="btn-primary hero-primary-cta hero-primary-cta--light mt-9">
            Zisti cenu nehnuteľnosti zdarma
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2">
          {sellerProblems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} data-motion-item className="phase3-panel min-h-[230px] p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[#F6C453]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-serif text-lg font-semibold text-white/26">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight text-white">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-white/60">{item.text}</p>
              </article>
            );
          })}

          <article data-motion-item className="rounded-lg border border-[#F6C453]/24 bg-[#F6C453]/10 p-6 text-white sm:col-span-2">
            <AlertTriangle className="text-[#F6C453]" size={28} aria-hidden="true" />
            <p className="mt-5 text-2xl font-black">Preto je hlavný funnel odhad ceny, nie mentoring.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
              Jeden seriózny seller lead môže mať väčší obchodný potenciál než desiatky malých sekundárnych produktov.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
