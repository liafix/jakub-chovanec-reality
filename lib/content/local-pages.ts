import type { ServiceSlug } from "@/lib/contracts";

export type LocalPage = {
  slug: string;
  path: string;
  location: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  contextTitle: string;
  context: string;
  includedTitle: string;
  included: string[];
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  serviceLinks: ServiceSlug[];
  ctaText: string;
  faq: Array<{ question: string; answer: string }>;
};

export const localPages: LocalPage[] = [];

export function getLocalPage(slug: string) {
  return localPages.find((page) => page.slug === slug);
}
