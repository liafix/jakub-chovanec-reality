import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Mail, Phone, ShieldCheck } from "lucide-react";
import { company } from "@/lib/content/services";

const credibilityPoints = [
  "Realitný maklér Trnava",
  "Moderný a profesionálny prístup",
  "Kvalitná prezentácia nehnuteľnosti",
  "Precíznosť a dôraz na detail",
  "Férová komunikácia",
  "Kompletný servis pri predaji"
];

export function AboutJakubSection() {
  return (
    <section
      id="o-mne"
      data-scene-stage="craft"
      data-scene-intensity="rest"
      className="relative isolate z-10 overflow-hidden bg-[#050505] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(246,196,83,0.18),transparent_26rem),radial-gradient(circle_at_84%_66%,rgba(249,115,22,0.13),transparent_28rem),linear-gradient(135deg,#050505,#111111_48%,#030303)]" />
      <div className="absolute inset-0 -z-10 opacity-40 phase3-hero-grid" aria-hidden="true" />

      <div className="container grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <div data-motion="reveal" className="relative mx-auto w-full max-w-[31rem] lg:mx-0">
          <div className="absolute -left-5 top-8 h-32 w-32 rounded-full bg-[#F6C453]/14 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] p-3 shadow-[0_34px_110px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#111111]">
              <Image
                src="/images/jakub.webp"
                alt="Jakub Chovanec, realitný maklér Trnava"
                fill
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 70vw, 92vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>
            <div className="mt-3 rounded-md border border-white/10 bg-black/36 p-4 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F6C453]">Jakub Chovanec</p>
              <p className="mt-2 text-lg font-black text-white">Realitný maklér Trnava</p>
            </div>
          </div>
        </div>

        <div data-motion="stagger" className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#F6C453]">O mne</p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-[5.2rem]">
            Moderný realitný maklér z Trnavy.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
            Som Jakub Chovanec a pri každom predaji staviam na dôkladnej príprave, kvalitnej prezentácii a jasnej
            komunikácii. Mojím cieľom je, aby majiteľ nehnuteľnosti nemusel hádať cenu, riešiť zbytočný chaos ani
            strácať čas s neserióznymi záujemcami. Predaj má mať stratégiu, dáta a proces, ktorý dáva klientovi istotu.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {credibilityPoints.map((point) => (
              <div key={point} data-motion-item className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3">
                <BadgeCheck size={18} className="shrink-0 text-[#F6C453]" aria-hidden="true" />
                <span className="text-sm font-bold text-white/76">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#odhad-ceny" className="btn-primary hero-primary-cta hero-primary-cta--light">
              Zisti cenu nehnuteľnosti zdarma
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a href={company.phoneHref} className="btn-secondary hero-secondary-cta hero-secondary-cta--light">
              <Phone size={18} aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-white/58">
            <span className="phase3-pill">
              <ShieldCheck size={15} className="text-[#F6C453]" aria-hidden="true" />
              príprava + prezentácia
            </span>
            <a href={company.emailHref} className="phase3-pill transition hover:text-white">
              <Mail size={15} className="text-[#F6C453]" aria-hidden="true" />
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
