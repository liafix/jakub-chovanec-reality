import type { Metadata } from "next";
import { BookingForm } from "@/components/ui/BookingForm";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Rezervovať konzultáciu | Jakub Chovanec Reality",
  description:
    "Rezervujte si platenú realitnú konzultáciu alebo kvalifikovanú žiadosť o obhliadku nehnuteľnosti.",
  path: "/booking"
});

export default function BookingPage() {
  return (
    <main className="pt-28">
      <section className="container grid gap-10 py-16 pb-32 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-[#e44f22]">Konzultácia / obhliadka</p>
          <h1 className="mt-4 text-5xl font-black leading-tight">Rezervovať realitnú konzultáciu alebo obhliadku.</h1>
          <p className="mt-6 text-lg leading-8 text-black/66">
            Vyplňte základné údaje, realitný zámer, lokalitu a preferovaný termín. Tento formulár v Phase 2 stále používa
            existujúci checkout flow pre platený krok. Bezplatný odhad ceny a databáza kupujúcich dostanú vlastné
            formuláre až vo Phase 4.
          </p>
        </div>
        <BookingForm />
      </section>
    </main>
  );
}
