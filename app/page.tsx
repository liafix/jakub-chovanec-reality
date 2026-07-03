import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeEuro,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Home,
  MapPin,
  PlaySquare,
  ShieldCheck,
  Users
} from "lucide-react";
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

const estimateFields = [
  "Typ nehnuteľnosti",
  "Lokalita",
  "Výmera",
  "Stav",
  "Plánovaný predaj",
  "Kontakt"
];

const buyerSignals = [
  { icon: Users, title: "Rozpočet", text: "Koľko vie kupujúci reálne financovať." },
  { icon: Home, title: "Typ", text: "Byt, dom, pozemok alebo investícia." },
  { icon: BadgeEuro, title: "Financovanie", text: "Hotovosť, hypo alebo kombinácia." },
  { icon: CalendarCheck, title: "Timeframe", text: "Kedy chce kupujúci rozhodnúť." }
];

const listingPlaceholders = [
  { title: "Mestský byt", location: "Lokalita placeholder", price: "Cena na požiadanie", tag: "video ready" },
  { title: "Rodinný dom", location: "Lokalita placeholder", price: "Pripravuje sa", tag: "seller lead" },
  { title: "Stavebný pozemok", location: "Lokalita placeholder", price: "Placeholder", tag: "map view" }
];

export default function HomePage() {
  return (
    <HomePageMotion>
      <main data-story-root className="relative isolate overflow-hidden bg-[#050505]">
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
          className="relative isolate z-10 overflow-hidden bg-[#f2f5f5] py-20 text-[#0a0d10] md:py-28"
        >
          <div className="absolute inset-0 -z-10 opacity-70 phase3-map-grid" aria-hidden="true" />
          <div className="container grid gap-10 lg:grid-cols-[0.92fr_0.88fr] lg:items-center">
            <div data-motion="reveal" className="max-w-[44rem]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D99A2B]">Hlavný money engine</p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-[#0a0d10] sm:text-6xl lg:text-[5.2rem]">
                Zisti cenu nehnuteľnosti zdarma.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">
                Bezplatný odhad ceny zachytáva majiteľov ešte pred rozhodnutím predávať. Z jednoduchých údajov vznikne
                prvý obchodný rozhovor o cene, prezentácii a reálnom potenciáli predaja.
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

            <div data-motion="stagger" className="rounded-lg border border-black/10 bg-white/82 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between gap-4 rounded-lg bg-[#111111] p-4 text-white">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F6C453]">Estimate widget</p>
                  <h3 className="mt-2 text-2xl font-black">Seller lead preview</h3>
                </div>
                <BadgeEuro size={32} className="text-[#F6C453]" aria-hidden="true" />
              </div>
              <div className="mt-4 grid gap-3">
                {estimateFields.map((item) => (
                  <div key={item} data-motion-item className="flex items-center justify-between rounded-md border border-black/8 bg-[#f6f8f8] px-4 py-3">
                    <span className="text-sm font-bold text-black/58">{item}</span>
                    <span className="h-2 w-20 rounded-full bg-[#111111]/12" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md border border-[#D99A2B]/24 bg-[#F6C453]/10 p-4">
                <p className="text-sm font-black text-[#6f4108]">Phase 4 pripraví reálny formulár a emailový tok.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="databaza-kupujucich"
          data-scene-stage="services"
          data-scene-intensity="medium"
          className="phase3-section-dark relative z-10 overflow-hidden py-20 text-white md:py-28"
        >
          <div className="absolute inset-0 -z-10 opacity-35 phase3-hero-grid" aria-hidden="true" />
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div data-motion="reveal">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F6C453]">Buyer database</p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Dopyt kupujúcich ako obchodná výhoda.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Vlastná databáza ľudí, ktorí hľadajú byt, dom alebo pozemok, zvyšuje hodnotu budúcich predajov a skracuje
                cestu medzi ponukou a serióznym záujemcom.
              </p>
              <Link href="/sluzby/databaza-kupujucich" className="btn-primary hero-primary-cta hero-primary-cta--light mt-8">
                Hľadám nehnuteľnosť
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2">
              {buyerSignals.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} data-motion-item className="phase3-panel min-h-[190px] p-6">
                    <Icon className="text-[#F6C453]" size={28} aria-hidden="true" />
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">{item.text}</p>
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
          className="relative z-10 overflow-hidden bg-[#f2f5f5] py-20 text-[#0a0d10] md:py-28"
        >
          <div className="absolute inset-0 -z-10 opacity-60 phase3-map-grid" aria-hidden="true" />
          <div className="container">
            <div data-motion="reveal" className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D99A2B]">Vybrané ponuky</p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Property cards bez cudzích fotografií.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">
                Reálne listingy prídu až po schválených podkladoch. Zatiaľ sekcia ukazuje miesto pre budúce property
                landing pages, mapu, video a žiadosť o obhliadku.
              </p>
            </div>
            <div data-motion="stagger" className="mt-10 grid gap-4 md:grid-cols-3">
              {listingPlaceholders.map((item) => (
                <article key={item.title} data-motion-item className="overflow-hidden rounded-lg border border-black/10 bg-white/82 shadow-[0_24px_74px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                  <div className="relative aspect-[1.18/1] bg-[#111111] p-4 text-white">
                    <div className="absolute inset-0 opacity-55 phase3-map-grid" aria-hidden="true" />
                    <span className="relative inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/68">
                      <MapPin size={14} className="text-[#F6C453]" aria-hidden="true" />
                      {item.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/10 bg-black/34 p-4 backdrop-blur">
                      <Building2 className="text-[#F6C453]" size={24} aria-hidden="true" />
                      <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                      <p className="mt-2 text-sm font-bold text-white/50">{item.location}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-black">{item.price}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-black/54">
                      <CheckCircle2 size={17} className="text-[#D99A2B]" aria-hidden="true" />
                      príprava na viewing request
                    </div>
                    <Link href="/sluzby/vybrane-ponuky" className="btn-secondary mt-6 w-full">
                      Detail placeholder
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CoreServicesSection />

        <section
          id="realitna-konzultacia"
          data-scene-stage="booking"
          data-scene-intensity="medium"
          className="phase3-section-dark relative z-10 overflow-hidden py-20 text-white md:py-28"
        >
          <div className="container grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div data-motion="reveal">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F6C453]">Sekundárny produkt</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Konzultácia zarába, ale neprebíja seller funnel.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Platená 1:1 realitná konzultácia filtruje vážnych ľudí pred predajom, kúpou alebo investíciou. Mentoring
                zostáva iba malý teaser pre neskoršiu monetizáciu osobnej značky.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/booking?service=realitna-konzultacia" className="btn-primary hero-primary-cta hero-primary-cta--light">
                  Rezervovať konzultáciu
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/sluzby/realitny-start" className="btn-secondary hero-secondary-cta hero-secondary-cta--light">
                  Mentoring teaser
                </Link>
              </div>
            </div>

            <div data-motion="stagger" className="grid gap-4">
              {[
                { icon: CalendarCheck, title: "Realitná konzultácia 1:1", text: "Sekundárny príjem a kvalifikácia vážnych klientov." },
                { icon: PlaySquare, title: "Realitný štart 1:1", text: "Malý mentoringový teaser, nie hlavný produkt webu." },
                { icon: ShieldCheck, title: "Primary CTA ostáva odhad", text: "Majitelia nehnuteľností majú najvyššiu obchodnú hodnotu." }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} data-motion-item className="phase3-panel p-6">
                    <Icon size={28} className="text-[#F6C453]" aria-hidden="true" />
                    <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/60">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <ProofBeforeContactSection />
      </main>
    </HomePageMotion>
  );
}
