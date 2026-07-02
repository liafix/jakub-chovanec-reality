import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { PageTransition } from "@/components/layout/PageTransition";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Jakub Chovanec | Reality",
  description: "Premium real estate personal brand website for property sellers, buyers and 1:1 real estate consultations.",
  path: "/"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body>
        <SmoothScrollProvider>
          <PageTransition>
            <Header />
            {children}
            <Footer />
            <MobileActionBar />
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
