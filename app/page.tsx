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
  "Typ nehnutelnosti",
  "Lokalita",
  "Vymera",
  "Stav",
  "Planovany predaj",
  "Kontakt"
];

const buyerSignals = [
  { icon: Users, title: "Rozpocet", text: "Kolko vie kupujuci realne financovat." },
  { icon: Home, title: "Typ", text: "Byt, dom, pozemok alebo investicia." },
  { icon: BadgeEuro, title: "Financovanie", text: "Hotovost, hypo alebo kombinacia." },
  { icon: CalendarCheck, title: "Timeframe", text: "Kedy chce kupujuci rozhodnut." }
];

const listingPlaceholders = [
  { title: "Mestsky byt", location: "Lokalita placeholder", price: "Cena na poziadanie", tag: "video ready" },
  { title: "Rodinny dom", location: "Lokalita placeholder", price: "Pripravuje sa", tag: "seller lead" },
  { title: "Stavebny pozemok", location: "Lokalita placeholder", price: "Placeholder", tag: "map view" }
];

export default function HomePage() {
  return (
    <HomePageMotion>
      <main data-story-root className="relative isolate overflow-hidden bg-[#05070a]">
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
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#257a57]">Hlavny money engine</p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-[#0a0d10] sm:text-6xl lg:text-[5.2rem]">
                Zisti cenu nehnutelnosti zdarma.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">
                Bezplatny odhad ceny zachytava majitelov este pred rozhodnutim predavat. Z jednoduchych udajov vznikne
                prvy obchodny rozhovor o cene, prezentacii a realnom potenciale predaja.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/sluzby/odhad-ceny-nehnutelnosti" className="btn-primary">
                  Zisti cenu nehnutelnosti zdarma
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/booking?service=realitna-konzultacia" className="btn-secondary">
                  Rezervovat konzultaciu
                </Link>
              </div>
            </div>

            <div data-motion="stagger" className="rounded-lg border border-black/10 bg-white/82 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between gap-4 rounded-lg bg-[#0b1118] p-4 text-white">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d8b76a]">Estimate widget</p>
                  <h3 className="mt-2 text-2xl font-black">Seller lead preview</h3>
                </div>
                <BadgeEuro size={32} className="text-[#d8b76a]" aria-hidden="true" />
              </div>
              <div className="mt-4 grid gap-3">
                {estimateFields.map((item) => (
                  <div key={item} data-motion-item className="flex items-center justify-between rounded-md border border-black/8 bg-[#f6f8f8] px-4 py-3">
                    <span className="text-sm font-bold text-black/58">{item}</span>
                    <span className="h-2 w-20 rounded-full bg-[#0b1118]/12" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md border border-[#257a57]/20 bg-[#257a57]/10 p-4">
                <p className="text-sm font-black text-[#134c35]">Phase 4 pripravi realny formular a emailovy tok.</p>
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
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6aa7ff]">Buyer database</p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Dopyt kupujucich ako obchodna vyhoda.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Vlastna databaza ludi, ktori hladaju byt, dom alebo pozemok, zvysuje hodnotu buducich predajov a skracuje
                cestu medzi ponukou a serioznym zaujemcom.
              </p>
              <Link href="/sluzby/databaza-kupujucich" className="btn-primary hero-primary-cta hero-primary-cta--light mt-8">
                Hladam nehnutelnost
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2">
              {buyerSignals.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} data-motion-item className="phase3-panel min-h-[190px] p-6">
                    <Icon className="text-[#6aa7ff]" size={28} aria-hidden="true" />
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
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#257a57]">Vybrane ponuky</p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Property cards bez cudzich fotografii.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">
                Realne listingy pridu az po schvalenych podkladoch. Zatial sekcia ukazuje miesto pre buduce property
                landing pages, mapu, video a ziadost o obhliadku.
              </p>
            </div>
            <div data-motion="stagger" className="mt-10 grid gap-4 md:grid-cols-3">
              {listingPlaceholders.map((item) => (
                <article key={item.title} data-motion-item className="overflow-hidden rounded-lg border border-black/10 bg-white/82 shadow-[0_24px_74px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                  <div className="relative aspect-[1.18/1] bg-[#0b1118] p-4 text-white">
                    <div className="absolute inset-0 opacity-55 phase3-map-grid" aria-hidden="true" />
                    <span className="relative inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/68">
                      <MapPin size={14} className="text-[#87ffd2]" aria-hidden="true" />
                      {item.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/10 bg-black/34 p-4 backdrop-blur">
                      <Building2 className="text-[#d8b76a]" size={24} aria-hidden="true" />
                      <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                      <p className="mt-2 text-sm font-bold text-white/50">{item.location}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-black">{item.price}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-black/54">
                      <CheckCircle2 size={17} className="text-[#257a57]" aria-hidden="true" />
                      priprava na viewing request
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
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d8b76a]">Sekundarny produkt</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Konzultacia zaraba, ale neprebija seller funnel.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Platena 1:1 realitna konzultacia filtruje vaznych ludi pred predajom, kupou alebo investiciou. Mentoring
                zostava iba maly teaser pre neskorsiu monetizaciu osobnej znacky.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/booking?service=realitna-konzultacia" className="btn-primary hero-primary-cta hero-primary-cta--light">
                  Rezervovat konzultaciu
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/sluzby/realitny-start" className="btn-secondary hero-secondary-cta hero-secondary-cta--light">
                  Mentoring teaser
                </Link>
              </div>
            </div>

            <div data-motion="stagger" className="grid gap-4">
              {[
                { icon: CalendarCheck, title: "Realitna konzultacia 1:1", text: "Sekundarny prijem a kvalifikacia vaznych klientov." },
                { icon: PlaySquare, title: "Realitny start 1:1", text: "Maly mentoringovy teaser, nie hlavny produkt webu." },
                { icon: ShieldCheck, title: "Primary CTA ostava odhad", text: "Majitelia nehnutelnosti maju najvyssiu obchodnu hodnotu." }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} data-motion-item className="phase3-panel p-6">
                    <Icon size={28} className="text-[#d8b76a]" aria-hidden="true" />
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
