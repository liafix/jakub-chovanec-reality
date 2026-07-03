import Link from "next/link";
import { ArrowRight, BarChart3, CalendarCheck, Home, MessageCircle, SearchCheck, Users, type LucideIcon } from "lucide-react";

const proofItems = [
  {
    icon: Home,
    title: "Seller estimate",
    text: "Najdôležitejší funnel zachytáva majiteľov, ktorí zvažujú predaj a potrebujú reálny odhad ceny."
  },
  {
    icon: Users,
    title: "Databáza kupujúcich",
    text: "Vlastný dopyt kupujúcich zvyšuje hodnotu budúcich ponúk a pomáha pri rýchlejšom párovaní."
  },
  {
    icon: SearchCheck,
    title: "Viewing request",
    text: "Obhliadka má byť kvalifikovaná, nie náhodná. Web pripravuje priestor na disciplinované žiadosti."
  },
  {
    icon: BarChart3,
    title: "1:1 konzultácia",
    text: "Platená konzultácia filtruje vážnych ľudí, ale stále ostáva sekundárna voči seller funnelu."
  }
] satisfies Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}>;

const processSteps = ["Odhad ceny", "Kupujúci", "Obhliadka", "Konzultácia"];

export function ProofBeforeContactSection() {
  return (
    <section
      id="kontakt-cta"
      aria-labelledby="kontakt-cta-title"
      data-scene-stage="proof"
      data-scene-intensity="medium"
      className="phase3-section-dark relative z-10 isolate overflow-hidden py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 -z-10 opacity-35 phase3-hero-grid" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-10 xl:grid-cols-[minmax(340px,0.78fr)_minmax(680px,1.22fr)] xl:items-center">
          <div data-motion="reveal" className="max-w-[43rem]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F6C453]">Final CTA</p>
            <h2
              id="kontakt-cta-title"
              className="mt-6 max-w-[12ch] font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl xl:text-[6.2rem]"
            >
              Pozornosť má skončiť v konkrétnej príležitosti.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              Web má premeniť osobnú značku na seller leady, kupujúcich, obhliadky a konzultácie. Najsilnejší ďalší krok
              ostáva bezplatný odhad ceny nehnuteľnosti.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#odhad-ceny" className="btn-primary hero-primary-cta hero-primary-cta--light">
                Zisti cenu nehnuteľnosti zdarma
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/booking?service=realitna-konzultacia" className="btn-secondary hero-secondary-cta hero-secondary-cta--light">
                <CalendarCheck size={18} aria-hidden="true" />
                Rezervovať konzultáciu
              </Link>
            </div>
          </div>

          <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2">
            {proofItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} data-motion-item className="phase3-panel min-h-[238px] p-6">
                  <span className="grid size-12 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[#F6C453]">
                    <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-2xl font-black leading-tight text-white">{item.title}</h3>
                  <div className="mt-5 h-px w-14 bg-[#F6C453]/72" aria-hidden="true" />
                  <p className="mt-6 max-w-[18rem] text-base leading-8 text-white/60">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <ol data-motion="stagger" className="mt-12 grid gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step} data-motion-item className="relative flex items-center gap-4 rounded-md px-3 py-3 sm:px-4 xl:px-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.08] font-serif text-lg font-semibold text-[#F6C453]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="min-w-0 text-base font-bold leading-tight text-white/82">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/56">
          <span className="phase3-pill">
            <MessageCircle size={15} className="text-[#F6C453]" aria-hidden="true" />
            osobný kontakt
          </span>
          <span className="phase3-pill">
            <BarChart3 size={15} className="text-[#F6C453]" aria-hidden="true" />
            dáta + stratégia
          </span>
        </div>
      </div>
    </section>
  );
}
