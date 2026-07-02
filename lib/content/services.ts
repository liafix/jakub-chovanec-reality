import type { PaymentType, ServiceSlug } from "@/lib/contracts";

export const company = {
  name: "Jakub Chovanec",
  legalName: "Jakub Chovanec | Reality",
  descriptor: "Moderny predaj nehnutelnosti",
  slogan: "Najmladsi realitak na Slovensku",

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
  legalAddress: "Doplnit po potvrdeni obchodnych udajov",
  mapAddressTitle: "Slovensko",
  city: "Slovensko",

  licensePlate: "",
  serviceArea: ["Slovensko", "Trenciansky kraj", "Bratislavsky kraj", "online konzultacie"]
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

const serviceArea = ["Slovensko", "Trenciansky kraj", "Bratislavsky kraj", "online"];

const sellerEstimateSteps: ServiceProcessStep[] = [
  {
    title: "Zakladne udaje",
    text: "Majitel posle typ nehnutelnosti, lokalitu, vymeru, stav a planovany termin predaja."
  },
  {
    title: "Trhove porovnanie",
    text: "Pozrieme sa na konkurenciu, cenu podobnych ponuk a realny dopyt v lokalite."
  },
  {
    title: "Strategia predaja",
    text: "Odhad ceny doplnime odporucanym postupom prezentacie, inzercie a kvalifikacie zaujemcov."
  }
];

const consultationSteps: ServiceProcessStep[] = [
  {
    title: "Situacia",
    text: "Prejdeme aktualnu otazku: predaj, kupa, investicia, vyjednavanie alebo priprava ponuky."
  },
  {
    title: "Moznosti",
    text: "Porovname rizika, cenu, nacasovanie a prakticke kroky podla realnej situacie."
  },
  {
    title: "Akcny plan",
    text: "Vystupom je jasne odporucanie, co spravit najblizsie a comu sa vyhnut."
  }
];

export const services: Service[] = [
  {
    slug: "odhad-ceny-nehnutelnosti",
    cardImage: "/images/sluzby/rekonstrukcie-na-kluc.webp",
    cardPreview:
      "Bezplatny odhad ceny pre majitelov, ktori zvazuju predaj bytu, domu alebo pozemku.",
    cardImageAlt: "Neutralny placeholder pre realitny odhad",
    label: "Odhad ceny nehnutelnosti zdarma",
    shortLabel: "Odhad ceny",
    h1: "Zistite realnu cenu nehnutelnosti este pred predajom",
    intro:
      "Hlavny funnel webu pomaha zachytit majitelov, ktori uvazuju nad predajom. Cielom je ziskat kvalifikovane udaje o nehnutelnosti a otvorit obchodny rozhovor skor, nez majitel skonci iba pri portaloch.",
    metaTitle: "Odhad ceny nehnutelnosti zdarma | Jakub Chovanec",
    metaDescription:
      "Bezplatny odhad ceny bytu, domu alebo pozemku pre majitelov, ktori zvazuju predaj cez modernu realitnu strategiu.",
    localities: serviceArea,
    benefits: [
      "prvy kontakt s majitelom este pred rozhodnutim predavat",
      "zaklad pre cenovu strategiu a prezentaciu nehnutelnosti",
      "kvalifikacia predajneho horizontu, stavu a motivacie",
      "najvyssi obchodny potencial celeho webu"
    ],
    processSteps: sellerEstimateSteps,
    faq: [
      {
        question: "Je odhad ceny zavazny?",
        answer:
          "Nie. Ide o bezplatny vstupny odhad a odporucanie dalsieho postupu pred osobnou alebo online konzultaciou."
      },
      {
        question: "Ake udaje su potrebne?",
        answer:
          "Typ nehnutelnosti, lokalita, vymera, stav, planovany termin predaja a kontaktne udaje."
      }
    ],
    primaryCta: "Zisti cenu nehnutelnosti zdarma",
    secondaryCta: "Rezervovat konzultaciu",
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
      "Strategia predaja, premium prezentacia, video obsah, inzercia, kvalifikovane obhliadky a vyjednavanie.",
    cardImageAlt: "Neutralny placeholder pre realitny predaj",
    label: "Predaj nehnutelnosti",
    shortLabel: "Predaj",
    h1: "Moderny predaj nehnutelnosti cez video, strategiu a data",
    intro:
      "Predaj nie je iba zverejnenie inzeratu. Dobre nastaveny proces spaja cenu, prezentaciu, distribuciu, kvalifikaciu zaujemcov, vyjednavanie a bezpecne prevedenie transakcie.",
    metaTitle: "Predaj nehnutelnosti | Jakub Chovanec Reality",
    metaDescription:
      "Moderny predaj bytu, domu alebo pozemku cez cenovu strategiu, premium prezentaciu, video a kvalifikovane obhliadky.",
    localities: serviceArea,
    benefits: [
      "cenova strategia namiesto nahodneho odhadu",
      "premium prezentacia pre vyssi dojem a doveru",
      "video a socialne siete ako distribucna vyhoda",
      "vyjednavanie s cielom nepredavat pod hodnotou"
    ],
    processSteps: [
      {
        title: "Cena",
        text: "Nastavime cenove rozpatie a strategiu podla trhu, lokality a stavu nehnutelnosti."
      },
      {
        title: "Prezentacia",
        text: "Pripravime nehnutelnost, text, foto/video koncept a argumenty pre kupujucich."
      },
      {
        title: "Predaj",
        text: "Riesime inzerciu, kvalifikovane obhliadky, komunikaciu, vyjednavanie a dalsie kroky."
      }
    ],
    faq: [
      {
        question: "Preco nestaci dat nehnutelnost iba na portal?",
        answer:
          "Portal je distribucny kanal, nie predajna strategia. Rozhoduje cena, prezentacia, dopyt, vyjednavanie a kvalita zaujemcov."
      },
      {
        question: "Pomaha video pri predaji?",
        answer:
          "Ano, najma pri budovani dovery, odliseni ponuky a pritiahnuti pozornosti mimo realitnych portalov."
      }
    ],
    primaryCta: "Zisti cenu nehnutelnosti zdarma",
    secondaryCta: "Rezervovat konzultaciu",
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
      "Databaza ludi, ktori hladaju byt, dom alebo pozemok podla lokality, rozpoctu a financovania.",
    cardImageAlt: "Neutralny placeholder pre databazu kupujucich",
    label: "Databaza kupujucich",
    shortLabel: "Kupujuci",
    h1: "Hladate nehnutelnost? Zaradte sa do databazy kupujucich",
    intro:
      "Kupujuci mozu zanechat lokalitu, rozpocet, typ nehnutelnosti, sposob financovania a casovy horizont. Pre Jakuba to vytvara vlastny zoznam dopytu mimo portalov.",
    metaTitle: "Databaza kupujucich | Jakub Chovanec Reality",
    metaDescription:
      "Databaza kupujucich pre ludi, ktori hladaju byt, dom alebo pozemok a chcu byt kontaktovani pri vhodnej ponuke.",
    localities: serviceArea,
    benefits: [
      "vlastny dopyt pre buduce predajne prilezitosti",
      "lepsie parovanie kupujucich s ponukami",
      "rychlejsie overenie financovania a casoveho horizontu",
      "hodnota pre majitelov, ktori chcu predavat efektivne"
    ],
    processSteps: [
      {
        title: "Dopyt",
        text: "Kupujuci doplni lokalitu, rozpocet, typ nehnutelnosti a sposob financovania."
      },
      {
        title: "Kvalifikacia",
        text: "Dopyt sa rozdeli podla pripravenosti, realnosti rozpoctu a casoveho horizontu."
      },
      {
        title: "Prepojenie",
        text: "Pri vhodnej ponuke moze Jakub rychlo kontaktovat relevantnych zaujemcov."
      }
    ],
    faq: [
      {
        question: "Je zapis do databazy plateny?",
        answer: "Nie. V tejto faze ide o dopytovy funnel a pripravu na Phase 4 formular."
      },
      {
        question: "Co mam doplnit ako kupujuci?",
        answer: "Lokalitu, rozpocet, typ nehnutelnosti, financovanie, casovy horizont a kontakt."
      }
    ],
    primaryCta: "Hladam nehnutelnost",
    secondaryCta: "Kontaktovat Jakuba",
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
      "Bezpecne placeholder karty pre vybrane ponuky, pripravene na neskorsie realne nehnutelnosti.",
    cardImageAlt: "Neutralny placeholder pre vybrane realitne ponuky",
    label: "Vybrane ponuky",
    shortLabel: "Ponuky",
    h1: "Vybrane ponuky a property landing pages",
    intro:
      "Sekcia ukazuje, ako budu neskor prezentovane konkretne nehnutelnosti: video, fotky, lokalita, benefity, mapa a jasna vyzva na rezervaciu obhliadky.",
    metaTitle: "Vybrane ponuky | Jakub Chovanec Reality",
    metaDescription:
      "Placeholder vybranych realitnych ponuk pripraveny pre buduce property landing pages a rezervacie obhliadok.",
    localities: serviceArea,
    benefits: [
      "ukazka premium prezentacie bez cudzich fotografii",
      "priestor pre buduce samostatne landing pages",
      "CTA pre rezervaciu obhliadky a kvalifikaciu zaujemcov",
      "dovera pre majitelov aj kupujucich"
    ],
    processSteps: [
      {
        title: "Karta",
        text: "Zakladne udaje, lokalita, cena placeholder a hlavna vyhoda."
      },
      {
        title: "Detail",
        text: "Neskor pribudne video, foto, mapa, benefity a otazky kupujucich."
      },
      {
        title: "Obhliadka",
        text: "Zaujemca sa kvalifikuje pred tym, nez sa rezervuje termin."
      }
    ],
    faq: [
      {
        question: "Su ponuky realne?",
        answer: "Nie. Vo Phase 2 ide iba o bezpecne placeholder karty bez cudzich obrazkov."
      },
      {
        question: "Kedy vzniknu realne landing pages?",
        answer: "Az po dodani schvalenych podkladov alebo v neskorsej faze projektu."
      }
    ],
    primaryCta: "Pozriet placeholder ponuky",
    secondaryCta: "Rezervovat obhliadku",
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
      "Kvalifikovana ziadost o obhliadku pre ludi, ktori maju zaujem o konkretnu ponuku.",
    cardImageAlt: "Neutralny placeholder pre rezervaciu obhliadky",
    label: "Rezervacia obhliadky",
    shortLabel: "Obhliadka",
    h1: "Rezervacia obhliadky s kvalifikaciou zaujemcu",
    intro:
      "Viewing request funnel pomaha znizit chaos. Pred obhliadkou je vhodne vediet, o aku nehnutelnost ide, aky ma zaujemca rozpocet, financovanie a casovy horizont.",
    metaTitle: "Rezervacia obhliadky | Jakub Chovanec Reality",
    metaDescription:
      "Kvalifikovana ziadost o obhliadku nehnutelnosti pre zaujemcov o byt, dom alebo pozemok.",
    localities: serviceArea,
    benefits: [
      "menej nekvalifikovanych obhliadok",
      "lepsia disciplina zaujemcov",
      "rychlejsie rozhodovanie pri silnych kupujucich",
      "lepsia ochrana casu majitela aj realitaka"
    ],
    processSteps: consultationSteps,
    faq: [
      {
        question: "Je rezervacia obhliadky automaticky potvrdena?",
        answer: "Nie. Po odoslani ziadosti treba termin este potvrdit."
      },
      {
        question: "Preco kvalifikovat zaujemcu?",
        answer:
          "Aby obhliadky davali zmysel pre predavajuceho, kupujuceho aj realitneho maklera."
      }
    ],
    primaryCta: "Rezervovat obhliadku",
    secondaryCta: "Kontaktovat Jakuba",
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
      "Platena 1:1 konzultacia pred predajom, kupou alebo investicnym rozhodnutim.",
    cardImageAlt: "Neutralny placeholder pre realitnu konzultaciu",
    label: "Realitna konzultacia 1:1",
    shortLabel: "Konzultacia",
    h1: "Realitna konzultacia 1:1 - 60 min",
    intro:
      "Sekundarny produkt pre ludi, ktori chcu konkretne odporucanie pred predajom, kupou alebo investiciou. Konzultacia filtruje vaznych zaujemcov a vytvara okamzity prijem.",
    metaTitle: "Realitna konzultacia 1:1 | Jakub Chovanec",
    metaDescription:
      "Platena 60-minutova realitna konzultacia pred predajom, kupou alebo investicnym rozhodnutim.",
    localities: serviceArea,
    benefits: [
      "rychle odporucanie bez plneho predajneho procesu",
      "filter pre vaznych klientov",
      "sekundarny prijem cez Stripe v neskorsej faze",
      "vhodne pred predajom, kupou alebo investiciou"
    ],
    processSteps: consultationSteps,
    faq: [
      {
        question: "Je konzultacia hlavny produkt webu?",
        answer: "Nie. Hlavny produkt je seller estimate funnel, konzultacia je sekundarna."
      },
      {
        question: "Bude platba riesena cez Stripe?",
        answer: "Ano, ale uprava Stripe produktu patri az do Phase 4."
      }
    ],
    primaryCta: "Rezervovat konzultaciu",
    secondaryCta: "Zistit cenu zdarma",
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
      "Maly mentoring teaser pre ludi, ktori chcu pochopit zaciatky v realitach. Nie je hlavnym produktom.",
    cardImageAlt: "Neutralny placeholder pre realitny mentoring",
    label: "Realitny start 1:1",
    shortLabel: "Mentoring",
    h1: "Realitny start 1:1 ako sekundarny mentoring",
    intro:
      "Mentoring moze neskor monetizovat osobnu znacku, ale nesmie prebit hlavny seller funnel. Vo Phase 2 ostava iba ako maly teaser.",
    metaTitle: "Realitny start 1:1 | Jakub Chovanec",
    metaDescription:
      "Sekundarny mentoringovy teaser pre zaciatky v realitach, bez prebitia hlavneho seller funnelu.",
    localities: serviceArea,
    benefits: [
      "monetizuje osobnu znacku neskor",
      "ostava mensi ako seller funnel",
      "vhodne pre zaujemcov o realitny start",
      "neodvadza pozornost od majitelov nehnutelnosti"
    ],
    processSteps: consultationSteps,
    faq: [
      {
        question: "Je mentoring hlavny biznis webu?",
        answer: "Nie. Je to iba sekundarna ponuka, hlavny biznis je predaj nehnutelnosti a seller leads."
      },
      {
        question: "Bude mentoring plateny?",
        answer: "Mozno neskor. Vo Phase 2 je to iba obsahovy teaser."
      }
    ],
    primaryCta: "Mam zaujem o mentoring",
    secondaryCta: "Najprv konzultacia",
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
