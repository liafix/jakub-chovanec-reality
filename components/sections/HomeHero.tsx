import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeEuro,
  BarChart3,
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  PlaySquare,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { FloatingElement } from "@/components/motion/effects/FloatingElement";
import { MagneticButton } from "@/components/motion/effects/MagneticButton";

const trustItems = [
  { label: "Instagram audience", value: "placeholder" },
  { label: "Andel&Zachar background", value: "placeholder" },
  { label: "Referencie", value: "placeholder" },
  { label: "Aktivne ponuky", value: "placeholder" }
];

const estimateRows = [
  ["Typ", "3-izbovy byt"],
  ["Lokalita", "Trencin / BA"],
  ["Vymera", "74 m2"],
  ["Stav", "dobry standard"]
];

const dashboardItems = [
  { icon: Users, label: "Seller leads", value: "+24%" },
  { icon: PlaySquare, label: "Video reach", value: "Reels" },
  { icon: Building2, label: "Listings", value: "3" }
];

function MiniMap() {
  return (
    <div className="relative min-h-48 overflow-hidden rounded-lg border border-white/10 bg-[#101821] p-4">
      <div className="absolute inset-0 opacity-45 phase3-map-grid" aria-hidden="true" />
      {[
        "left-[18%] top-[28%]",
        "left-[62%] top-[22%]",
        "left-[42%] top-[58%]",
        "left-[74%] top-[68%]"
      ].map((position, index) => (
        <span
          key={position}
          className={`absolute ${position} grid size-8 place-items-center rounded-full border border-[#87ffd2]/35 bg-[#1be09b]/12 text-[#87ffd2] shadow-[0_0_26px_rgba(27,224,155,0.18)]`}
          aria-hidden="true"
        >
          <MapPin size={15} fill="currentColor" />
          <span className="absolute inline-flex size-8 animate-ping rounded-full bg-[#1be09b]/10" />
          <span className="sr-only">Map pin {index + 1}</span>
        </span>
      ))}
      <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/10 bg-black/38 p-3 backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">Dopyt v lokalite</p>
        <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
          {[38, 62, 44, 76, 54, 88, 70].map((height) => (
            <span key={height} className="w-full rounded-sm bg-[#87ffd2]/70" style={{ height }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[37rem] lg:mx-0 lg:justify-self-end" data-hero-fade>
      <div className="absolute -left-8 top-16 hidden h-44 w-44 rounded-full bg-[#1be09b]/10 blur-3xl lg:block" aria-hidden="true" />
      <div className="absolute -right-8 bottom-10 hidden h-52 w-52 rounded-full bg-[#6aa7ff]/12 blur-3xl lg:block" aria-hidden="true" />

      <div className="relative grid gap-4 rounded-lg border border-white/12 bg-white/[0.055] p-3 shadow-[0_34px_110px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
        <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border border-white/10 bg-[#f7f1e8] p-4 text-[#0a0d10] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a6a2d]">Premium listing</p>
                <h2 className="mt-3 max-w-[12rem] text-2xl font-black leading-tight">Byt s pripravenou strategiou</h2>
              </div>
              <span className="grid size-10 place-items-center rounded-md bg-[#0c1117] text-white">
                <Building2 size={20} aria-hidden="true" />
              </span>
            </div>
            <div className="mt-7 aspect-[4/3] overflow-hidden rounded-md bg-[linear-gradient(135deg,#e8dfd1,#b8c2c9_48%,#27323e)]">
              <div className="h-full w-full bg-[linear-gradient(160deg,transparent_0_52%,rgba(255,255,255,0.5)_52%_53%,transparent_53%),linear-gradient(40deg,rgba(0,0,0,0.22),transparent_42%)]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-bold text-black/60">
              <span>74 m2</span>
              <span>3 izby</span>
              <span>video</span>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="rounded-lg border border-white/10 bg-[#0b1118] p-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d8b76a]">Odhad ceny</p>
                <BadgeEuro size={21} className="text-[#d8b76a]" aria-hidden="true" />
              </div>
              <div className="mt-4 grid gap-2">
                {estimateRows.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-md border border-white/8 bg-white/[0.055] px-3 py-2">
                    <span className="text-xs font-bold text-white/45">{label}</span>
                    <span className="text-sm font-black text-white/86">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md bg-[#1be09b]/12 p-3 text-sm font-bold text-[#b7ffe4]">
                Seller lead pripraveny na Phase 4 formular
              </div>
            </article>

            <div className="grid grid-cols-3 gap-2">
              {dashboardItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className="rounded-lg border border-white/10 bg-white/[0.065] p-3 text-white">
                    <Icon size={18} className="text-[#6aa7ff]" aria-hidden="true" />
                    <p className="mt-3 text-lg font-black">{item.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white/44">{item.label}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_0.72fr]">
          <MiniMap />
          <div className="grid gap-3">
            {["Reel: pricing", "Reel: obhliadka", "Lead preview"].map((item, index) => (
              <article key={item} className="relative min-h-24 overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-3 text-white">
                <div className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-white/10">
                  {index === 2 ? <CheckCircle2 size={15} aria-hidden="true" /> : <PlaySquare size={15} aria-hidden="true" />}
                </div>
                <p className="max-w-[8rem] text-sm font-black">{item}</p>
                <p className="mt-3 text-xs leading-5 text-white/48">Neutralny mockup bez social media assetov.</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section
      data-scene-stage="hero"
      data-scene-intensity="high"
      className="home-hero phase3-hero relative z-10 flex min-h-[100svh] items-center overflow-hidden bg-[#05070a] pb-16 pt-28 text-white"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(106,167,255,0.18),transparent_28rem),radial-gradient(circle_at_82%_22%,rgba(27,224,155,0.13),transparent_24rem),linear-gradient(135deg,#05070a_0%,#0b1118_48%,#030406_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-45 phase3-hero-grid" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#05070a] to-transparent" aria-hidden="true" />

      <div className="container relative z-20 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(28rem,0.9fr)] lg:items-center">
        <div className="hero-content max-w-4xl" data-hero-content>
          <p className="hero-kicker text-xs font-black uppercase tracking-[0.22em] text-[#d8b76a] sm:text-sm" data-hero-kicker>
            Jakub Chovanec / Reality
          </p>

          <h1 className="hero-display-title hero-display-title--light mt-7 max-w-5xl">
            <span data-text-mask-line>Najmladsi realitak na Slovensku.</span>
            <span data-text-mask-line>Moderny predaj nehnutelnosti cez video, strategiu a data.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg" data-hero-fade>
            Osobny realitny lead engine, ktory premieňa pozornost z obsahu na odhady ceny, kvalifikovanych kupujucich,
            obhliadky a konzultacie.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row" data-hero-fade>
            <MagneticButton className="inline-flex">
              <Link href="#odhad-ceny" className="btn-primary hero-primary-cta hero-primary-cta--light">
                Zisti cenu nehnutelnosti zdarma
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </MagneticButton>
            <MagneticButton className="inline-flex">
              <Link href="/booking?service=realitna-konzultacia" className="btn-secondary hero-secondary-cta hero-secondary-cta--light">
                <MessageCircle size={18} aria-hidden="true" />
                Rezervovat konzultaciu
              </Link>
            </MagneticButton>
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4" data-hero-fade>
            {trustItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#d8b76a]/72">{item.value}</p>
                <p className="mt-1 text-sm font-bold text-white/78">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/58" data-hero-fade>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2">
              <ShieldCheck size={16} className="text-[#87ffd2]" aria-hidden="true" />
              bez cudzich fotografii
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2">
              <Sparkles size={16} className="text-[#d8b76a]" aria-hidden="true" />
              realitne UI storytelling
            </span>
          </div>
        </div>

        <HeroVisual />

        <FloatingElement className="hero-scroll-hint hero-scroll-hint--light">
          <a href="#seller-problem" className="hero-scroll-hint__link">
            <span className="grid size-14 place-items-center rounded-full border border-white/24 bg-white/[0.045]">
              <ArrowDown size={22} aria-hidden="true" />
            </span>
            <span>
              <span>Zistit viac</span>
              <small>Prejst na problem predavajuceho</small>
            </span>
          </a>
        </FloatingElement>
      </div>
    </section>
  );
}
