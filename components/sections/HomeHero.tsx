import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BarChart3, Building2, MessageCircle, PlaySquare, Users } from "lucide-react";
import { FloatingElement } from "@/components/motion/effects/FloatingElement";
import { MagneticButton } from "@/components/motion/effects/MagneticButton";

const trustItems = [
  { label: "Instagram audience", value: "placeholder" },
  { label: "Andel&Zachar background", value: "placeholder" },
  { label: "Referencie", value: "placeholder" },
  { label: "Aktivne ponuky", value: "placeholder" }
];

export function HomeHero() {
  return (
    <section
      data-scene-stage="hero"
      data-scene-intensity="high"
      className="home-hero home-hero--cinematic relative z-10 flex min-h-[100svh] items-end overflow-hidden pt-28"
    >
      <div className="hero-bg-stack" data-hero-bg aria-hidden="true">
        <Image
          src="/hero/background-interior.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          data-hero-image
          sizes="100vw"
          className="hero-bg-image object-cover object-[62%_center]"
        />
        <div className="hero-grain" />
        <div className="hero-vignette" />
        <div className="hero-scrim" />
        <div className="hero-glow-cursor" data-hero-glow aria-hidden="true" />
      </div>

      <div className="container relative z-20 pb-14 lg:pb-20">
        <div className="hero-content max-w-4xl" data-hero-content>
          <p className="hero-kicker gradient-text text-xs font-black uppercase sm:text-sm" data-hero-kicker>
            Jakub Chovanec / Reality
          </p>

          <h1 className="hero-display-title hero-display-title--light mt-8 max-w-5xl uppercase">
            <span data-text-mask-line>Najmladší</span>
            <span data-text-mask-line>realiťák</span>
            <span data-text-mask-line>na Slovensku</span>
          </h1>

          <p className="hero-lede hero-lede--light mt-7 max-w-2xl font-serif text-xl leading-9 sm:text-2xl" data-hero-fade>
            Moderný predaj nehnuteľností cez video, stratégiu a dáta.
          </p>

          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2" data-hero-fade>
            {trustItems.map((item) => (
              <div key={item.label} className="rounded-md border border-white/18 bg-white/10 px-4 py-3 text-white/82 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/42">{item.value}</p>
                <p className="mt-1 text-sm font-bold">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-hero-fade>
            <MagneticButton className="inline-flex">
              <Link href="#odhad-ceny" className="btn-primary hero-primary-cta hero-primary-cta--light">
                Zisti cenu nehnuteľnosti zdarma
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </MagneticButton>
            <MagneticButton className="inline-flex">
              <Link href="/booking?service=realitna-konzultacia" className="btn-secondary hero-secondary-cta hero-secondary-cta--light">
                <MessageCircle size={18} aria-hidden="true" />
                Rezervovať konzultáciu
              </Link>
            </MagneticButton>
          </div>
        </div>

        <aside className="hero-process-card hero-process-card--floating mt-10 lg:absolute lg:bottom-20 lg:right-8 lg:mt-0" data-parallax="18">
          <p className="text-xs font-black uppercase text-[#d65a2a]">Lead engine</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#151311] sm:text-4xl">
            Pozornosť z obsahu
            <br />
            meníme na dopyty.
          </h2>
          <div className="mt-5 h-px w-12 bg-[#d65a2a]" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-black/62">
            Web má zachytiť majiteľov pred predajom, kupujúcich v dopyte a ľudí pripravených zaplatiť za konkrétnu radu.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-black/10 pt-5">
            {[
              { icon: Building2, label: "Seller leads" },
              { icon: Users, label: "Kupujúci" },
              { icon: BarChart3, label: "Dáta" },
              { icon: PlaySquare, label: "Video" }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span data-stroke-icon className="mx-auto block w-fit">
                  <item.icon className="text-[#161412]" size={22} aria-hidden="true" strokeWidth={1.6} />
                </span>
                <p className="mt-3 text-[10px] font-black uppercase text-black/48">{item.label}</p>
              </div>
            ))}
          </div>
        </aside>

        <FloatingElement className="hero-scroll-hint hero-scroll-hint--light">
          <a href="#seller-problem" className="hero-scroll-hint__link">
            <span className="grid size-14 place-items-center rounded-full border border-white/32">
              <ArrowDown size={22} aria-hidden="true" />
            </span>
            <span>
              <span>Zistiť viac</span>
              <small>Posúvajte nižšie</small>
            </span>
          </a>
        </FloatingElement>
      </div>
    </section>
  );
}
