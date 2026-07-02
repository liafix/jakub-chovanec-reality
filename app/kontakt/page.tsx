import Image from "next/image";
import type { Metadata } from "next";
import { BadgeCheck, Mail, MessageCircle, Phone, UserRound } from "lucide-react";
import { company } from "@/lib/content/services";
import { buildPageMetadata, localBusinessJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt | Jakub Chovanec Reality",
  description:
    "Kontakt pre odhad ceny nehnuteľnosti, realitnú konzultáciu, databázu kupujúcich alebo rezerváciu obhliadky.",
  path: "/kontakt"
});

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e44f22]";

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#f8f1e6] pt-28">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />

      <section className="relative isolate overflow-hidden py-16 md:py-24 lg:py-28">
        <Image
          src="/images/contact/contact-background.webp"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        <div
          className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(251,248,240,0.96)_0%,rgba(251,248,240,0.82)_43%,rgba(251,248,240,0.48)_100%)]"
          aria-hidden="true"
        />

        <div className="container relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div data-motion="reveal" className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#e44f22]">
              Kontakt
            </p>
            <div className="mt-4 h-px w-14 bg-[#e44f22]/80" aria-hidden="true" />
            <h1 className="mt-6 max-w-2xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#11100e] sm:text-6xl lg:text-[5rem]">
              Napíšte k predaju, kúpe alebo konzultácii.
            </h1>

            <div className="mt-8 max-w-2xl rounded-[1.7rem] border border-white/60 bg-[#fbf8f0]/64 p-5 shadow-[0_24px_90px_rgba(42,35,24,0.11),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-md sm:p-6">
              <p className="text-base leading-8 text-black/70 sm:text-lg">
                Najrýchlejší ďalší krok je bezplatný odhad ceny alebo krátka správa s tým, či chcete predávať, kupovať,
                rezervovať obhliadku alebo riešiť platenú 1:1 konzultáciu.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={company.phoneHref}
                  aria-label={`Zavolať na číslo ${company.phoneDisplay}`}
                  className={`btn-primary border-[#11100e] bg-[#11100e] text-white shadow-[0_20px_50px_rgba(17,16,14,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-[#e44f22] hover:bg-[#e44f22] ${focusClass}`}
                >
                  <Phone size={18} aria-hidden="true" />
                  {company.phoneDisplay}
                </a>
                <a href={company.emailHref} className={`btn-secondary border-white/70 bg-white/78 text-[#11100e] ${focusClass}`}>
                  <Mail size={18} aria-hidden="true" />
                  E-mail
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn-secondary border-white/70 bg-white/78 text-[#11100e] ${focusClass}`}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div data-motion="stagger" className="relative grid gap-4">
            {[
              ["Hlavný funnel", "Odhad ceny nehnuteľnosti zdarma"],
              ["Kupujúci", "Databáza pre ľudí, ktorí hľadajú byt, dom alebo pozemok"],
              ["Konzultácia", "Platená 1:1 realitná konzultácia ako sekundárny produkt"]
            ].map(([label, text]) => (
              <article
                key={label}
                data-motion-item
                className="rounded-[1.35rem] border border-white/65 bg-white/74 p-6 shadow-[0_22px_70px_rgba(42,35,24,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#ead9c7] bg-[#fff6e8] text-[#e44f22]">
                    <UserRound size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-black/42">{label}</p>
                    <p className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#11100e]">{text}</p>
                  </div>
                </div>
              </article>
            ))}

            <article data-motion-item className="rounded-[1.35rem] border border-[#e44f22]/18 bg-[#11100e]/88 p-5 text-[#fffaf0]">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-white/12 bg-white/8 text-[#e44f22]">
                  <BadgeCheck size={18} aria-hidden="true" />
                </span>
                <p className="text-sm leading-7 text-white/68">
                  Reálne fotky, Instagram obsah a listingové podklady sa doplnia až po schválení klientom.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
