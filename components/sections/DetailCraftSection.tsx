import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const methodFeatures = [
  "CENOVÁ STRATÉGIA",
  "PREMIUM PREZENTÁCIA",
  "VIDEO A SOCIÁLNE SIETE",
  "KVALIFIKOVANÉ OBHLIADKY",
  "VYJEDNÁVANIE",
  "TRANSAKČNÉ VEDENIE"
];

export function DetailCraftSection() {
  return (
    <section
      id="jakubova-metoda"
      data-scene-stage="craft"
      data-scene-intensity="medium"
      className="relative z-10 min-h-[700px] overflow-hidden bg-[#efe5d8] py-16 text-[#17130f] md:py-24 lg:min-h-[730px] lg:py-28 xl:min-h-[760px]"
    >
      <Image
        src="/images/detail/background2.webp"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-[49%_center] md:object-[50%_center] lg:object-[51%_center]"
      />
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(244,234,220,0.78)_0%,rgba(244,234,220,0.38)_34%,rgba(244,234,220,0.18)_52%,rgba(244,234,220,0.62)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_48%,rgba(255,204,142,0.24),transparent_25rem),linear-gradient(180deg,rgba(255,255,255,0.42)_0%,transparent_34%,rgba(219,202,179,0.24)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-[min(1600px,calc(100%_-_32px))] gap-6 md:w-[min(1600px,calc(100%_-_48px))] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
        <article
          data-motion="reveal"
          data-parallax="10"
          className="relative overflow-hidden rounded-[24px] border border-white/70 bg-[#fffaf0]/78 p-6 shadow-[0_34px_110px_rgba(58,45,30,0.18),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-xl sm:p-8 md:p-10 lg:min-h-[500px] lg:p-12 xl:min-h-[545px] xl:rounded-[28px] xl:p-14"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.82),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,0.32),transparent_45%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c96a3f] sm:text-sm">
              Jakubova metóda
            </p>
            <div className="mt-7 h-px w-12 bg-[#c96a3f]/62" aria-hidden="true" />
            <h2 className="mt-7 max-w-[12ch] font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-[#211f1b] sm:text-6xl md:text-[4.6rem] lg:text-[4.25rem] xl:text-[5rem]">
              Predaj potrebuje viac než iba portálový inzerát.
            </h2>
            <p className="mt-7 max-w-[37rem] text-base leading-8 text-black/64 sm:text-lg sm:leading-9">
              Moderný realitný proces spája dáta, obsah, kvalifikáciu záujemcov a vyjednávanie. Cieľom je dostať
              nehnuteľnosť pred správnych ľudí a nestratiť hodnotu v chaose predaja.
            </p>
          </div>
        </article>

        <div data-motion="stagger" className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {methodFeatures.map((feature, index) => (
            <article
              key={feature}
              data-motion-item
              className="group relative min-h-[170px] overflow-hidden rounded-[20px] border border-white/72 bg-[#fffaf0]/72 p-6 shadow-[0_24px_76px_rgba(58,45,30,0.13),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#fffaf0]/84"
            >
              <div className="relative flex h-full flex-col">
                <p className="font-serif text-lg font-semibold leading-none text-[#c96a3f]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-5 h-px w-7 bg-[#c96a3f]/58" aria-hidden="true" />
                <h3 className="mt-7 max-w-[13rem] text-xl font-black uppercase leading-[1.16] tracking-normal text-[#20201d]">
                  {feature}
                </h3>
                <span className="mt-auto grid size-10 self-end rounded-full border border-[#d99270]/62 bg-white/38 text-[#c96a3f]">
                  <ArrowUpRight className="m-auto" size={17} strokeWidth={1.7} aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
