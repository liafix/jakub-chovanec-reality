import Link from "next/link";
import {
  ArrowUpRight,
  BadgeEuro,
  BarChart3,
  CalendarCheck,
  Home,
  PlaySquare,
  SearchCheck,
  Users,
  type LucideIcon
} from "lucide-react";
import { services } from "@/lib/content/services";
import type { ServiceSlug } from "@/lib/contracts";

const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  "odhad-ceny-nehnutelnosti": BadgeEuro,
  "predaj-nehnutelnosti": BarChart3,
  "databaza-kupujucich": Users,
  "vybrane-ponuky": Home,
  "rezervacia-obhliadky": SearchCheck,
  "realitna-konzultacia": CalendarCheck,
  "realitny-start": PlaySquare
};

export function CoreServicesSection() {
  return (
    <section
      id="realitne-funnely"
      aria-labelledby="core-services-title"
      data-scene-stage="services"
      data-scene-intensity="high"
      className="relative z-10 overflow-hidden bg-[#eef2f4] py-20 text-[#0a0d10] md:py-28"
    >
      <div className="absolute inset-0 -z-10 opacity-60 phase3-map-grid" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div data-motion="reveal" className="max-w-[760px]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#257a57] sm:text-sm">Realitny rastovy system</p>
            <h2
              id="core-services-title"
              className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.96] tracking-normal text-[#080a0d] sm:text-6xl lg:text-[5.2rem]"
            >
              Kazda sekcia ma obchodny ucel.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-black/68 sm:text-lg">
              Homepage nie je brozura. Vedie majitela k odhadu ceny, kupujuceho do databazy, zaujemcu k obhliadke a
              vazneho klienta ku konzultacii. Mentoring ostava iba sekundarny teaser.
            </p>
          </div>

          <div data-motion="reveal" className="flex flex-wrap items-center gap-4 lg:block lg:min-w-48 lg:pt-10">
            <div className="grid size-20 place-items-center rounded-lg border border-black/10 bg-[#0b1118] font-serif text-4xl font-semibold text-[#d8b76a] shadow-[0_20px_54px_rgba(15,23,42,0.18)] lg:ml-auto lg:size-24 lg:text-5xl">
              07
            </div>
            <Link
              href="#odhad-ceny"
              className="btn-primary mt-0 min-h-12 border-[#0b1118] bg-[#0b1118] px-5 text-white shadow-[0_18px_42px_rgba(15,23,42,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1118] lg:mt-16"
            >
              Zisti cenu zdarma
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div data-motion="assemble" className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            const isPrimary = service.slug === "odhad-ceny-nehnutelnosti";

            return (
              <div key={service.slug} data-motion-item>
                <Link
                  href={`/sluzby/${service.slug}`}
                  className={`group relative grid min-h-[246px] overflow-hidden rounded-lg border p-5 shadow-[0_22px_58px_rgba(15,23,42,0.11)] transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1118] ${
                    isPrimary
                      ? "border-[#257a57]/28 bg-[#0b1118] text-white hover:shadow-[0_30px_80px_rgba(15,23,42,0.24)]"
                      : "border-black/10 bg-white/82 text-[#0a0d10] hover:bg-white hover:shadow-[0_30px_72px_rgba(15,23,42,0.16)]"
                  }`}
                >
                  <span className="absolute inset-0 opacity-45 phase3-map-grid" aria-hidden="true" />
                  <span className="relative flex items-start justify-between gap-4">
                    <span className={`text-xs font-black ${isPrimary ? "text-[#87ffd2]" : "text-black/42"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      className={`transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isPrimary ? "text-[#d8b76a]" : "text-[#257a57]"
                      }`}
                      size={19}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="relative mt-8 block">
                    <span className={`grid size-12 place-items-center rounded-md border ${isPrimary ? "border-white/10 bg-white/[0.08] text-[#d8b76a]" : "border-black/10 bg-[#0b1118] text-[#d8b76a]"}`}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </span>

                  <span className="relative mt-9 block self-end">
                    <span className="block text-2xl font-black leading-tight">{service.label}</span>
                    <span className={`line-clamp-3 mt-3 block text-sm leading-6 ${isPrimary ? "text-white/62" : "text-black/62"}`}>
                      {service.cardPreview ?? service.intro}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
