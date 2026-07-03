import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, CalendarCheck, PlaySquare, ShieldCheck } from "lucide-react";
import { BuyerDatabaseForm } from "@/components/forms/BuyerDatabaseForm";
import { SellerEstimateForm } from "@/components/forms/SellerEstimateForm";
import { HomePageMotion } from "@/components/motion/HomePageMotion";
import { AboutJakubSection } from "@/components/sections/AboutJakubSection";
import { CoreServicesSection } from "@/components/sections/CoreServicesSection";
import { DetailCraftSection } from "@/components/sections/DetailCraftSection";
import { FeaturedListingsSection } from "@/components/sections/FeaturedListingsSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProofBeforeContactSection } from "@/components/sections/ProofBeforeContactSection";
import { SellerProblemSection } from "@/components/sections/SellerProblemSection";
import { buildPageMetadata, localBusinessJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Jakub Chovanec | Reality",
  description:
    "Premium real estate lead engine for property owners, buyers, viewing requests and paid 1:1 real estate consultations.",
  path: "/"
});

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

        <SellerProblemSection />

        <DetailCraftSection />

        <AboutJakubSection />

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
                Bezplatný odhad ceny zachytáva majiteľov ešte pred rozhodnutím predávať. Z konkrétnych údajov vznikne prvý
                obchodný rozhovor o cene, prezentácii a reálnom potenciáli predaja.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#seller-estimate-form" className="btn-primary">
                  Zisti cenu nehnuteľnosti zdarma
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <Link href="/booking?service=realitna-konzultacia" className="btn-secondary">
                  Rezervovať konzultáciu
                </Link>
              </div>
            </div>

            <div id="seller-estimate-form" data-motion="reveal">
              <SellerEstimateForm />
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
          <div className="container grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
            <div data-motion="reveal">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F6C453]">Buyer database</p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Dopyt kupujúcich ako obchodná výhoda.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Vlastná databáza ľudí, ktorí hľadajú byt, dom alebo pozemok, zvyšuje hodnotu budúcich predajov a skracuje
                cestu medzi ponukou a serióznym záujemcom.
              </p>
              <a href="#buyer-database-form" className="btn-primary hero-primary-cta hero-primary-cta--light mt-8">
                Hľadám nehnuteľnosť
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <div className="mt-8 grid gap-3 text-sm font-bold text-white/62 sm:grid-cols-2">
                {["Lokalita", "Rozpočet", "Typ", "Financovanie"].map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/[0.055] px-4 py-3">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div id="buyer-database-form" data-motion="reveal">
              <BuyerDatabaseForm />
            </div>
          </div>
        </section>

        <FeaturedListingsSection />

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
                zostáva iba malý teaser pre budúcu monetizáciu osobnej značky.
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
