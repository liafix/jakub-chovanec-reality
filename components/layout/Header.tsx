"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { MagneticButton } from "@/components/motion/effects/MagneticButton";
import { company } from "@/lib/content/services";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "min-h-16 border-white/10 bg-[#050505]/92 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
          : "min-h-20 border-white/10 bg-[#050505]/62"
      }`}
    >
      <div className="container flex min-h-[inherit] items-center justify-between gap-4">
        <Logo variant="header" />

        <nav className="hidden items-center gap-14 text-base font-semibold text-white/74 md:flex">
          <Link href="/#odhad-ceny">Odhad ceny</Link>
          <Link href="/sluzby/databaza-kupujucich">Kupujúci</Link>
          <Link href="/booking?service=realitna-konzultacia">Konzultácia</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>

        <MagneticButton as="a" href={company.phoneHref} className="inline-flex">
          <span className="btn-secondary min-h-14 rounded-md border-white/18 bg-white/[0.055] px-7 py-3 text-base text-white hover:border-white/34 hover:bg-white/[0.1]">
            <Phone size={18} aria-hidden="true" />
            <span>{company.phoneDisplay}</span>
          </span>
        </MagneticButton>
      </div>
    </header>
  );
}
