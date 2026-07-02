import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Stránka neexistuje | Jakub Chovanec Reality",
  description: "Táto stará lokálna stránka nie je súčasťou realitnej informačnej architektúry.",
  path: "/rekonstrukcie-nova-dubnica"
});

export default function InactiveLegacyLocalPage() {
  notFound();
}
