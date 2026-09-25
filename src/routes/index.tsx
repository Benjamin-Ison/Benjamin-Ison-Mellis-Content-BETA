import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { Faqs } from "@/components/Faqs";
import { FinalCta } from "@/components/FinalCta";

const title = "Mellis Content | Gestión de Instagram para negocios locales";
const description =
  "Creamos y publicamos el contenido de tu negocio en Instagram para que te encuentren y te compren. Agendá una consulta uno a uno gratis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <HowItWorks />
        <SocialProof />
        <Faqs />
        <FinalCta />
      </main>
      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mellis Content — Versión beta
      </footer>
    </div>
  );
}
