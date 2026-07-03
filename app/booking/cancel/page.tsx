import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Platba nebola dokončená | Jakub Chovanec Reality",
    description: "Platba za realitnú konzultáciu nebola dokončená. Môžete sa vrátiť k rezervácii alebo kontaktovať Jakuba.",
    path: "/booking/cancel"
  }),
  robots: {
    index: false,
    follow: false
  }
};

export default function BookingCancelPage() {
  return (
    <main className="pt-28">
      <section className="container grid min-h-[60vh] place-items-center py-16 text-center">
        <div className="max-w-xl rounded-md border border-black/10 bg-white/72 p-8">
          <p className="text-sm font-black uppercase text-[#e44f22]">Platba nedokončená</p>
          <h1 className="mt-4 text-4xl font-black">Konzultácia zatiaľ nie je potvrdená.</h1>
          <p className="mt-4 leading-7 text-black/64">
            Platbu môžete skúsiť znova. Ak chcete najprv vyriešiť otázku priamo, ozvite sa telefonicky alebo cez kontakt.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/booking?service=realitna-konzultacia" className="btn-primary">
              Späť na konzultáciu
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontaktovať
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
