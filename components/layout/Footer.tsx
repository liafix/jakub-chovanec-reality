import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, CalendarDays, Home, MessageCircle, Phone, Users } from "lucide-react";
import { Logo } from "@/components/Logo";
import { company } from "@/lib/content/services";

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6aa7ff]";

const footerLinks = [
  { href: "/#odhad-ceny", label: "Odhad ceny zdarma" },
  { href: "/sluzby/databaza-kupujucich", label: "Databáza kupujúcich" },
  { href: "/sluzby/vybrane-ponuky", label: "Vybrané ponuky" },
  { href: "/booking?service=realitna-konzultacia", label: "Realitná konzultácia" }
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#050608] pb-28 pt-10 text-white md:pb-14 md:pt-16">
      <Image
        src="/images/footer/footer-background.webp"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-[0.36] saturate-[0.92]"
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_8%_36%,rgba(0,92,190,0.36),transparent_34rem),radial-gradient(circle_at_92%_32%,rgba(232,35,42,0.3),transparent_32rem),linear-gradient(180deg,rgba(5,6,8,0.72),rgba(5,6,8,0.9)_42%,rgba(5,6,8,0.98))]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-black via-black/72 to-transparent" aria-hidden="true" />

      <div className="container relative z-10">
        <section
          aria-labelledby="footer-cta-title"
          className="relative overflow-hidden rounded-[1.4rem] border border-white/16 bg-white/[0.075] px-5 py-6 shadow-[0_34px_120px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl sm:px-7 sm:py-8 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:gap-10 lg:px-10 lg:py-10"
        >
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#ff5b62]">
              <span className="h-px w-9 bg-[#ff5b62]/70" aria-hidden="true" />
              Ďalší krok
            </div>
            <h2
              id="footer-cta-title"
              className="mt-4 max-w-3xl font-serif text-[2.35rem] font-semibold leading-[0.98] text-white sm:text-5xl lg:text-[4rem]"
            >
              Zistime, akú príležitosť má vaša nehnuteľnosť.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              Najväčšia hodnota webu je zachytiť majiteľa pred predajom. Odhad ceny, konzultácia a databáza kupujúcich
              vytvárajú konkrétne obchodné príležitosti.
            </p>
          </div>

          <div className="relative mt-8 grid gap-3 lg:mt-0">
            <Link
              href="/#odhad-ceny"
              className={`group inline-flex min-h-14 items-center justify-between gap-4 rounded-lg border border-[#ff777b]/42 bg-[#e8232a]/24 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_44px_rgba(232,35,42,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-200 hover:-translate-y-0.5 hover:border-[#ff8b8f]/70 hover:bg-[#e8232a]/34 ${focusClass}`}
            >
              <span className="inline-flex items-center gap-3">
                <BarChart3 size={18} aria-hidden="true" />
                Zisti cenu zdarma
              </span>
              <ArrowRight size={18} className="transition duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/booking?service=realitna-konzultacia"
              className={`group inline-flex min-h-14 items-center justify-between gap-4 rounded-lg border border-white/14 bg-white/[0.075] px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-[#6aa7ff]/42 hover:bg-white/[0.12] ${focusClass}`}
            >
              <span className="inline-flex items-center gap-3">
                <CalendarDays size={18} aria-hidden="true" />
                Konzultácia
              </span>
              <ArrowRight size={18} className="text-white/54 transition duration-200 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
            </Link>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={`group inline-flex min-h-14 items-center justify-between gap-4 rounded-lg border border-white/14 bg-white/[0.075] px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-[#6aa7ff]/42 hover:bg-white/[0.12] ${focusClass}`}
            >
              <span className="inline-flex items-center gap-3">
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </span>
              <ArrowRight size={18} className="text-white/54 transition duration-200 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-12 grid gap-10 border-y border-white/10 py-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-8 lg:py-12">
          <div className="max-w-sm">
            <Logo variant="footer" className="h-24 w-24" />
            <p className="mt-5 text-base font-semibold leading-7 text-white">{company.slogan}</p>
            <p className="mt-3 text-sm leading-7 text-white/56">
              Moderný realitný web pre seller leads, kupujúcich, obhliadky a platené konzultácie.
            </p>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white">
              <Phone size={18} className="text-[#6aa7ff]" aria-hidden="true" />
              Kontakt
            </h3>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-white/62">
              <a href={company.phoneHref} className={`transition hover:text-white ${focusClass}`}>
                {company.phoneDisplay}
              </a>
              <a href={company.emailHref} className={`transition hover:text-white ${focusClass}`}>
                {company.email}
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white">
              <Home size={18} className="text-[#6aa7ff]" aria-hidden="true" />
              Funnely
            </h3>
            <div className="mt-6 grid gap-3 text-sm leading-7 text-white/62">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className={`transition hover:text-white ${focusClass}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white">
              <Users size={18} className="text-[#6aa7ff]" aria-hidden="true" />
              Publikum
            </h3>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-white/62">
              <p>Majitelia, ktorí zvažujú predaj</p>
              <p>Kupujúci a konzultační klienti</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs font-semibold uppercase tracking-[0.16em] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.legalName}</p>
          <p>Realitný lead engine</p>
        </div>
      </div>
    </footer>
  );
}
