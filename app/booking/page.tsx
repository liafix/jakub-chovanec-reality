import type { Metadata } from "next";
import { BookingForm } from "@/components/ui/BookingForm";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Realitná konzultácia 1:1 | Jakub Chovanec Reality",
  description:
    "Rezervujte si platenú 60-minútovú realitnú konzultáciu pred predajom, kúpou alebo investičným rozhodnutím.",
  path: "/booking"
});

export default function BookingPage() {
  return (
    <main className="pt-28">
      <section className="container grid gap-10 py-16 pb-32 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-[#e44f22]">Sekundárny platený produkt</p>
          <h1 className="mt-4 text-5xl font-black leading-tight">Realitná konzultácia 1:1 - 60 min.</h1>
          <p className="mt-6 text-lg leading-8 text-black/66">
            Konzultácia je vhodná, keď potrebujete konkrétne odporúčanie pred predajom, kúpou, investíciou alebo
            vyjednávaním. Bezplatný odhad ceny nehnuteľnosti zostáva hlavný funnel pre majiteľov.
          </p>
        </div>
        <BookingForm />
      </section>
    </main>
  );
}
