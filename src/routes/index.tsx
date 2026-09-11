import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Abordagem,
  Depoimentos,
  Online,
  Passos,
  Sobre,
  Temas,
} from "@/components/site/Sections";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

const title = "Ton Lucas | Hipnose e psicologia online";
const description =
  "Hipnose e psicologia em sessões individuais online com Ton Lucas. Ansiedade, emagrecimento, vícios e medos, com atendimento sigiloso para todo o Brasil e exterior.";

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
    <div className="min-h-screen scroll-smooth bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Temas />
        <Abordagem />
        <Online />
        <Sobre />
        <Passos />
        <Depoimentos />
        <ContactForm />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
