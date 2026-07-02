import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BadgeEuro, Building2, CalendarCheck, Home, Users } from "lucide-react";
import { HomePageMotion } from "@/components/motion/HomePageMotion";
import { CoreServicesSection } from "@/components/sections/CoreServicesSection";
import { DetailCraftSection } from "@/components/sections/DetailCraftSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { InteriorProcessSection } from "@/components/sections/InteriorProcessSection";
import { ProofBeforeContactSection } from "@/components/sections/ProofBeforeContactSection";
import { buildPageMetadata, localBusinessJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Jakub Chovanec | Reality",
  description:
    "Premium real estate lead engine for property owners, buyers, viewing requests and paid 1:1 real estate consultations.",
  path: "/"
});

const listingPlaceholders = [
  { title: "2-izbový byt", location: "Lokalita placeholder", price: "Cena na vyžiadanie" },
  { title: "Rodinný dom", location: "Lokalita placeholder", price: "Pripravuje sa" },
  { title: "Pozemok", location: "Lokalita placeholder", price: "Placeholder" }
];

export default function HomePage() {
  return (
    <HomePageMotion>
      <main data-story-root className="relative isolate overflow-hidden">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />

        <HomeHero />

        <InteriorProcessSection />

        <DetailCraftSection />

        <section
          id="odhad-ceny"
          data-scene-stage="index"
          data-scene-intensity="rest"
          className="relative isolate z-10 overflow-hidden bg-[#f4ede2] py-20 text-[#17130f] md:py-28"
        >
          <div
            className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,250,240,0.92),rgba(255,250,240,0.68)_48%,rgba(245,235,220,0.8))]"
            aria-hidden="true"
          />

          <div className="container grid gap-8 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div data-motion="reveal" className="max-w-[44rem]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b85d3d]">
                Hlavný money engine
              </p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.96] tracking-normal text-[#14110d] sm:text-6xl lg:text-[4.85rem]">
                Zisti cenu nehnuteľnosti zdarma.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">
                Bezplatný odhad ceny je hlavný seller funnel. Zachytáva majiteľov, ktorí ešte len zvažujú predaj, a
                vytvára priestor pre cenovú stratégiu, osobný kontakt a budúcu spoluprácu.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/sluzby/odhad-ceny-nehnutelnosti" className="btn-primary">
                  Zisti cenu nehnuteľnosti zdarma
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/booking?service=realitna-konzultacia" className="btn-secondary">
                  Rezervovať konzultáciu
                </Link>
              </div>
            </div>

            <div data-motion="stagger" className="grid gap-3 rounded-[1.45rem] border border-white/72 bg-[#fffaf0]/84 p-5 shadow-[0_24px_70px_rgba(62,48,31,0.13)] backdrop-blur-sm">
              {[
                "Typ nehnuteľnosti",
                "Lokalita",
                "Výmera",
                "Stav",
                "Plánovaný predaj",
                "Kontakt"
              ].map((item) => (
                <div key={item} data-motion-item className="flex items-center justify-between rounded-md border border-black/10 bg-white/68 px-4 py-3">
                  <span className="text-sm font-bold text-black/66">{item}</span>
                  <span className="h-2 w-20 rounded-full bg-black/10" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="databaza-kupujucich"
          data-scene-stage="services"
          data-scene-intensity="medium"
          className="relative z-10 bg-[#11100e] py-20 text-[#fffaf0] md:py-28"
        >
          <div className="container grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div data-motion="reveal">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e9a86d]">
                Buyer database
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Ľudia hľadajúci byt, dom alebo pozemok.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Dopyt kupujúcich zvyšuje hodnotu webu aj pri budúcich predajoch. Jakub si buduje vlastný zoznam ľudí
                podľa lokality, rozpočtu, financovania a časového horizontu.
              </p>
              <Link href="/sluzby/databaza-kupujucich" className="btn-primary mt-8 bg-white text-[#11100e]">
                Hľadám nehnuteľnosť
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, title: "Rozpočet" },
                { icon: Home, title: "Typ nehnuteľnosti" },
                { icon: BadgeEuro, title: "Financovanie" },
                { icon: CalendarCheck, title: "Timeframe" }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} data-motion-item className="rounded-[1.2rem] border border-white/12 bg-white/8 p-6">
                    <Icon className="text-[#e9a86d]" size={28} aria-hidden="true" />
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">Pripravené ako obsahový funnel pre Phase 4 formulár.</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="vybrane-ponuky"
          data-scene-stage="index"
          data-scene-intensity="rest"
          className="relative z-10 bg-[#f8f1e6] py-20 text-[#17130f] md:py-28"
        >
          <div className="container">
            <div data-motion="reveal" className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b85d3d]">Vybrané ponuky</p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Placeholder property cards bez cudzích fotiek.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">
                Reálne listingy prídu až po schválených podkladoch. Teraz sekcia ukazuje obchodné miesto pre budúce
                property landing pages a žiadosti o obhliadku.
              </p>
            </div>
            <div data-motion="stagger" className="mt-10 grid gap-4 md:grid-cols-3">
              {listingPlaceholders.map((item) => (
                <article key={item.title} data-motion-item className="rounded-[1.2rem] border border-black/10 bg-white/70 p-6 shadow-[0_20px_54px_rgba(48,39,26,0.10)]">
                  <Building2 className="text-[#b85d3d]" size={28} aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm font-bold text-black/46">{item.location}</p>
                  <p className="mt-5 text-lg font-black">{item.price}</p>
                  <Link href="/sluzby/vybrane-ponuky" className="btn-secondary mt-7 w-full">
                    Detail placeholder
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CoreServicesSection />

        <ProofBeforeContactSection />
      </main>
    </HomePageMotion>
  );
}
