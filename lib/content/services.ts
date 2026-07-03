import type { PaymentType, ServiceSlug } from "@/lib/contracts";

export const company = {
  name: "Jakub Chovanec",
  legalName: "Jakub Chovanec | Reality",
  descriptor: "Moderný predaj nehnuteľností",
  slogan: "Najmladší realiťák na Slovensku",

  ico: "",
  email: "kontakt@example.com",
  emailHref: "mailto:kontakt@example.com",

  phoneDisplay: "+421 900 000 000",
  phoneHref: "tel:+421900000000",

  mobileDisplay: "+421 900 000 000",
  mobileHref: "tel:+421900000000",
  whatsappDisplay: "+421 900 000 000",
  whatsappHref:
    "https://wa.me/421900000000?text=Dobry%20den%2C%20mam%20zaujem%20o%20realitnu%20sluzbu.",

  baseLocation: "Slovensko",

  address: "Slovensko",
  legalAddress: "Doplniť po potvrdení obchodných údajov",
  mapAddressTitle: "Slovensko",
  city: "Slovensko",

  licensePlate: "",
  serviceArea: ["Slovensko", "Trenčiansky kraj", "Bratislavský kraj", "online konzultácie"]
} as const;

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  text: string;
};

export type ServiceJsonLdData = {
  serviceType: string;
  areaServed: string[];
  providerName: string;
};

export type Service = {
  slug: ServiceSlug;
  label: string;
  shortLabel: string;
  cardImage: string;
  cardPreview?: string;
  cardImageAlt?: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  localities: string[];
  benefits: string[];
  processSteps: ServiceProcessStep[];
  faq: ServiceFaq[];
  primaryCta: string;
  secondaryCta: string;
  paymentType?: PaymentType;
  jsonLd: ServiceJsonLdData;
};

const serviceArea = ["Slovensko", "Trenčiansky kraj", "Bratislavský kraj", "online"];

const sellerEstimateSteps: ServiceProcessStep[] = [
  {
    title: "Základné údaje",
    text: "Majiteľ pošle typ nehnuteľnosti, lokalitu, výmeru, stav a plánovaný termín predaja."
  },
  {
    title: "Trhové porovnanie",
    text: "Pozrieme sa na konkurenciu, cenu podobných ponúk a reálny dopyt v lokalite."
  },
  {
    title: "Stratégia predaja",
    text: "Odhad ceny doplníme odporúčaným postupom prezentácie, inzercie a kvalifikácie záujemcov."
  }
];

const consultationSteps: ServiceProcessStep[] = [
  {
    title: "Situacia",
    text: "Prejdeme aktuálnu otázku: predaj, kúpa, investícia, vyjednávanie alebo príprava ponuky."
  },
  {
    title: "Možnosti",
    text: "Porovnáme riziká, cenu, načasovanie a praktické kroky podľa reálnej situácie."
  },
  {
    title: "Akčný plán",
    text: "Výstupom je jasné odporúčanie, čo spraviť najbližšie a čomu sa vyhnúť."
  }
];

export const services: Service[] = [
  {
    slug: "odhad-ceny-nehnutelnosti",
    cardImage: "/images/sluzby/rekonstrukcie-na-kluc.webp",
    cardPreview:
      "Bezplatný odhad ceny pre majiteľov, ktorí zvažujú predaj bytu, domu alebo pozemku.",
    cardImageAlt: "Neutrálny placeholder pre realitný odhad",
    label: "Odhad ceny nehnuteľnosti zdarma",
    shortLabel: "Odhad ceny",
    h1: "Zistite reálnu cenu nehnuteľnosti ešte pred predajom",
    intro:
      "Hlavný funnel webu pomáha zachytiť majiteľov, ktorí uvažujú nad predajom. Cieľom je získať kvalifikované údaje o nehnuteľnosti a otvoriť obchodný rozhovor skôr, než majiteľ skončí iba pri portáloch.",
    metaTitle: "Odhad ceny nehnuteľnosti zdarma | Jakub Chovanec",
    metaDescription:
      "Bezplatný odhad ceny bytu, domu alebo pozemku pre majiteľov, ktorí zvažujú predaj cez modernú realitnú stratégiu.",
    localities: serviceArea,
    benefits: [
      "prvý kontakt s majiteľom ešte pred rozhodnutím predávať",
      "základ pre cenovú stratégiu a prezentáciu nehnuteľnosti",
      "kvalifikácia predajného horizontu, stavu a motivácie",
      "najvyšší obchodný potenciál celého webu"
    ],
    processSteps: sellerEstimateSteps,
    faq: [
      {
        question: "Je odhad ceny záväzný?",
        answer:
          "Nie. Ide o bezplatný vstupný odhad a odporúčanie ďalšieho postupu pred osobnou alebo online konzultáciou."
      },
      {
        question: "Aké údaje sú potrebné?",
        answer:
          "Typ nehnuteľnosti, lokalita, výmera, stav, plánovaný termín predaja a kontaktné údaje."
      }
    ],
    primaryCta: "Zisti cenu nehnuteľnosti zdarma",
    secondaryCta: "Rezervovať konzultáciu",
    paymentType: "consultation_fee",
    jsonLd: {
      serviceType: "Real estate price estimate",
      areaServed: serviceArea,
      providerName: company.name
    }
  },
  {
    slug: "predaj-nehnutelnosti",
    cardImage: "/images/prace/praca.webp",
    cardPreview:
      "Stratégia predaja, premium prezentácia, video obsah, inzercia, kvalifikované obhliadky a vyjednávanie.",
    cardImageAlt: "Neutrálny placeholder pre realitný predaj",
    label: "Predaj nehnuteľnosti",
    shortLabel: "Predaj",
    h1: "Moderný predaj nehnuteľnosti cez video, stratégiu a dáta",
    intro:
      "Predaj nie je iba zverejnenie inzerátu. Dobre nastavený proces spája cenu, prezentáciu, distribúciu, kvalifikáciu záujemcov, vyjednávanie a bezpečné prevedenie transakcie.",
    metaTitle: "Predaj nehnuteľnosti | Jakub Chovanec Reality",
    metaDescription:
      "Moderný predaj bytu, domu alebo pozemku cez cenovú stratégiu, premium prezentáciu, video a kvalifikované obhliadky.",
    localities: serviceArea,
    benefits: [
      "cenová stratégia namiesto náhodného odhadu",
      "premium prezentácia pre vyšší dojem a dôveru",
      "video a sociálne siete ako distribučná výhoda",
      "vyjednávanie s cieľom nepredávať pod hodnotou"
    ],
    processSteps: [
      {
        title: "Cena",
        text: "Nastavíme cenové rozpätie a stratégiu podľa trhu, lokality a stavu nehnuteľnosti."
      },
      {
        title: "Prezentácia",
        text: "Pripravíme nehnuteľnosť, text, foto/video koncept a argumenty pre kupujúcich."
      },
      {
        title: "Predaj",
        text: "Riešime inzerciu, kvalifikované obhliadky, komunikáciu, vyjednávanie a ďalšie kroky."
      }
    ],
    faq: [
      {
        question: "Prečo nestačí dať nehnuteľnosť iba na portál?",
        answer:
          "Portál je distribučný kanál, nie predajná stratégia. Rozhoduje cena, prezentácia, dopyt, vyjednávanie a kvalita záujemcov."
      },
      {
        question: "Pomáha video pri predaji?",
        answer:
          "Áno, najmä pri budovaní dôvery, odlíšení ponuky a pritiahnutí pozornosti mimo realitných portálov."
      }
    ],
    primaryCta: "Zisti cenu nehnuteľnosti zdarma",
    secondaryCta: "Rezervovať konzultáciu",
    paymentType: "consultation_fee",
    jsonLd: {
      serviceType: "Real estate sales strategy",
      areaServed: serviceArea,
      providerName: company.name
    }
  },
  {
    slug: "databaza-kupujucich",
    cardImage: "/images/detail/background2.webp",
    cardPreview:
      "Databáza ľudí, ktorí hľadajú byt, dom alebo pozemok podľa lokality, rozpočtu a financovania.",
    cardImageAlt: "Neutrálny placeholder pre databázu kupujúcich",
    label: "Databáza kupujúcich",
    shortLabel: "Kupujúci",
    h1: "Hľadáte nehnuteľnosť? Zaraďte sa do databázy kupujúcich",
    intro:
      "Kupujúci môžu zanechať lokalitu, rozpočet, typ nehnuteľnosti, spôsob financovania a časový horizont. Pre Jakuba to vytvára vlastný zoznam dopytu mimo portálov.",
    metaTitle: "Databáza kupujúcich | Jakub Chovanec Reality",
    metaDescription:
      "Databáza kupujúcich pre ľudí, ktorí hľadajú byt, dom alebo pozemok a chcú byť kontaktovaní pri vhodnej ponuke.",
    localities: serviceArea,
    benefits: [
      "vlastný dopyt pre budúce predajné príležitosti",
      "lepšie párovanie kupujúcich s ponukami",
      "rýchlejšie overenie financovania a časového horizontu",
      "hodnota pre majiteľov, ktorí chcú predávať efektívne"
    ],
    processSteps: [
      {
        title: "Dopyt",
        text: "Kupujúci doplní lokalitu, rozpočet, typ nehnuteľnosti a spôsob financovania."
      },
      {
        title: "Kvalifikácia",
        text: "Dopyt sa rozdelí podľa pripravenosti, reálnosti rozpočtu a časového horizontu."
      },
      {
        title: "Prepojenie",
        text: "Pri vhodnej ponuke môže Jakub rýchlo kontaktovať relevantných záujemcov."
      }
    ],
    faq: [
      {
        question: "Je zápis do databázy platený?",
        answer: "Nie. V tejto fáze ide o dopytový funnel a prípravu na Phase 4 formulár."
      },
      {
        question: "Čo mám doplniť ako kupujúci?",
        answer: "Lokalitu, rozpočet, typ nehnuteľnosti, financovanie, časový horizont a kontakt."
      }
    ],
    primaryCta: "Hľadám nehnuteľnosť",
    secondaryCta: "Kontaktovať Jakuba",
    jsonLd: {
      serviceType: "Buyer database",
      areaServed: serviceArea,
      providerName: company.name
    }
  },
  {
    slug: "vybrane-ponuky",
    cardImage: "/images/proof/dokaz-pred-kontaktom.webp",
    cardPreview:
      "Bezpečné placeholder karty pre vybrané ponuky, pripravené na neskoršie reálne nehnuteľnosti.",
    cardImageAlt: "Neutrálny placeholder pre vybrané realitné ponuky",
    label: "Vybrané ponuky",
    shortLabel: "Ponuky",
    h1: "Vybrané ponuky a property landing pages",
    intro:
      "Sekcia ukazuje, ako budú neskôr prezentované konkrétne nehnuteľnosti: video, fotky, lokalita, benefity, mapa a jasná výzva na rezerváciu obhliadky.",
    metaTitle: "Vybrané ponuky | Jakub Chovanec Reality",
    metaDescription:
      "Placeholder vybraných realitných ponúk pripravený pre budúce property landing pages a rezervácie obhliadok.",
    localities: serviceArea,
    benefits: [
      "ukážka premium prezentácie bez cudzích fotografií",
      "priestor pre budúce samostatné landing pages",
      "CTA pre rezerváciu obhliadky a kvalifikáciu záujemcov",
      "dôvera pre majiteľov aj kupujúcich"
    ],
    processSteps: [
      {
        title: "Karta",
        text: "Základné údaje, lokalita, cena placeholder a hlavná výhoda."
      },
      {
        title: "Detail",
        text: "Neskôr pribudne video, foto, mapa, benefity a otázky kupujúcich."
      },
      {
        title: "Obhliadka",
        text: "Záujemca sa kvalifikuje pred tým, než sa rezervuje termín."
      }
    ],
    faq: [
      {
        question: "Sú ponuky reálne?",
        answer: "Nie. Vo Phase 2 ide iba o bezpečné placeholder karty bez cudzích obrázkov."
      },
      {
        question: "Kedy vzniknú reálne landing pages?",
        answer: "Až po dodaní schválených podkladov alebo v neskoršej fáze projektu."
      }
    ],
    primaryCta: "Pozrieť placeholder ponuky",
    secondaryCta: "Rezervovať obhliadku",
    jsonLd: {
      serviceType: "Selected real estate listings",
      areaServed: serviceArea,
      providerName: company.name
    }
  },
  {
    slug: "rezervacia-obhliadky",
    cardImage: "/images/contact/contact-background.webp",
    cardPreview:
      "Kvalifikovaná žiadosť o obhliadku pre ľudí, ktorí majú záujem o konkrétnu ponuku.",
    cardImageAlt: "Neutrálny placeholder pre rezerváciu obhliadky",
    label: "Rezervácia obhliadky",
    shortLabel: "Obhliadka",
    h1: "Rezervácia obhliadky s kvalifikáciou záujemcu",
    intro:
      "Viewing request funnel pomáha znížiť chaos. Pred obhliadkou je vhodné vedieť, o akú nehnuteľnosť ide, aký má záujemca rozpočet, financovanie a časový horizont.",
    metaTitle: "Rezervácia obhliadky | Jakub Chovanec Reality",
    metaDescription:
      "Kvalifikovaná žiadosť o obhliadku nehnuteľnosti pre záujemcov o byt, dom alebo pozemok.",
    localities: serviceArea,
    benefits: [
      "menej nekvalifikovaných obhliadok",
      "lepšia disciplína záujemcov",
      "rýchlejšie rozhodovanie pri silných kupujúcich",
      "lepšia ochrana času majiteľa aj realiťáka"
    ],
    processSteps: consultationSteps,
    faq: [
      {
        question: "Je rezervácia obhliadky automaticky potvrdená?",
        answer: "Nie. Po odoslaní žiadosti treba termín ešte potvrdiť."
      },
      {
        question: "Prečo kvalifikovať záujemcu?",
        answer:
          "Aby obhliadky dávali zmysel pre predávajúceho, kupujúceho aj realitného makléra."
      }
    ],
    primaryCta: "Rezervovať obhliadku",
    secondaryCta: "Kontaktovať Jakuba",
    paymentType: "reservation_fee",
    jsonLd: {
      serviceType: "Property viewing request",
      areaServed: serviceArea,
      providerName: company.name
    }
  },
  {
    slug: "realitna-konzultacia",
    cardImage: "/hero/background-interior.webp",
    cardPreview:
      "Platená 1:1 konzultácia pred predajom, kúpou alebo investičným rozhodnutím.",
    cardImageAlt: "Neutrálny placeholder pre realitnú konzultáciu",
    label: "Realitná konzultácia 1:1",
    shortLabel: "Konzultácia",
    h1: "Realitná konzultácia 1:1 - 60 min",
    intro:
      "Sekundárny produkt pre ľudí, ktorí chcú konkrétne odporúčanie pred predajom, kúpou alebo investíciou. Konzultácia filtruje vážnych záujemcov a vytvára okamžitý príjem.",
    metaTitle: "Realitná konzultácia 1:1 | Jakub Chovanec",
    metaDescription:
      "Platená 60-minútová realitná konzultácia pred predajom, kúpou alebo investičným rozhodnutím.",
    localities: serviceArea,
    benefits: [
      "rýchle odporúčanie bez plného predajného procesu",
      "filter pre vážnych klientov",
      "sekundárny príjem cez Stripe v neskoršej fáze",
      "vhodné pred predajom, kúpou alebo investíciou"
    ],
    processSteps: consultationSteps,
    faq: [
      {
        question: "Je konzultácia hlavný produkt webu?",
        answer: "Nie. Hlavný produkt je seller estimate funnel, konzultácia je sekundárna."
      },
      {
        question: "Bude platba riesena cez Stripe?",
        answer: "Áno, ale úprava Stripe produktu patrí až do Phase 4."
      }
    ],
    primaryCta: "Rezervovať konzultáciu",
    secondaryCta: "Zistiť cenu zdarma",
    paymentType: "consultation_fee",
    jsonLd: {
      serviceType: "Real estate consultation",
      areaServed: serviceArea,
      providerName: company.name
    }
  },
  {
    slug: "realitny-start",
    cardImage: "/images/footer/footer-background.webp",
    cardPreview:
      "Malý mentoring teaser pre ľudí, ktorí chcú pochopiť začiatky v realitách. Nie je hlavným produktom.",
    cardImageAlt: "Neutrálny placeholder pre realitný mentoring",
    label: "Realitný štart 1:1",
    shortLabel: "Mentoring",
    h1: "Realitný štart 1:1 ako sekundárny mentoring",
    intro:
      "Mentoring môže neskôr monetizovať osobnú značku, ale nesmie prebiť hlavný seller funnel. Vo Phase 2 ostáva iba ako malý teaser.",
    metaTitle: "Realitný štart 1:1 | Jakub Chovanec",
    metaDescription:
      "Sekundárny mentoringový teaser pre začiatky v realitách, bez prebitia hlavného seller funnelu.",
    localities: serviceArea,
    benefits: [
      "monetizuje osobnú značku neskôr",
      "ostáva menší ako seller funnel",
      "vhodné pre záujemcov o realitný štart",
      "neodvádza pozornosť od majiteľov nehnuteľnosti"
    ],
    processSteps: consultationSteps,
    faq: [
      {
        question: "Je mentoring hlavný biznis webu?",
        answer: "Nie. Je to iba sekundárna ponuka, hlavný biznis je predaj nehnuteľnosti a seller leads."
      },
      {
        question: "Bude mentoring plateny?",
        answer: "Možno neskôr. Vo Phase 2 je to iba obsahový teaser."
      }
    ],
    primaryCta: "Mám záujem o mentoring",
    secondaryCta: "Najprv konzultácia",
    paymentType: "consultation_fee",
    jsonLd: {
      serviceType: "Real estate mentoring",
      areaServed: serviceArea,
      providerName: company.name
    }
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const processSteps = sellerEstimateSteps.map((step) => step.title);
