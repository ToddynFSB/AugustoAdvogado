import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Advogado } from "@/components/site/Advogado";
import { Atuacao } from "@/components/site/Atuacao";
import { Autoridade } from "@/components/site/Autoridade";
import { Ajuda } from "@/components/site/Ajuda";
import { Cta } from "@/components/site/Cta";
import { Localizacao } from "@/components/site/Localizacao";
import { Footer } from "@/components/site/Footer";
import { WhatsappFlutuante } from "@/components/site/WhatsappFlutuante";

const TITLE = "José Augusto de Sousa Gois | Advogado Previdenciário em Itabirito";
const DESCRIPTION =
  "Advogado especializado em Direito Previdenciário em Itabirito/MG. Planejamento previdenciário, pedidos de aposentadoria e benefícios no INSS e processos judiciais.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "José Augusto de Sousa Gois",
          description: DESCRIPTION,
          telephone: "+5531984209140",
          knowsAbout: [
            "Direito Previdenciário",
            "Planejamento previdenciário",
            "Aposentadoria",
            "Benefícios do INSS",
            "Revisão de benefício",
          ],
          areaServed: { "@type": "City", name: "Itabirito", addressRegion: "MG" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Itabirito",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          geo: { "@type": "GeoCoordinates", latitude: -20.2476523, longitude: -43.8064881 },
          sameAs: [
            "https://www.instagram.com/joseaugustodesousagois/",
            "https://www.linkedin.com/in/jos%C3%A9-augusto-de-sousa-gois-171644aa/",
            "https://zeprev.blogspot.com/",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Advogado />
        <Atuacao />
        <Autoridade />
        <Ajuda />
        <Cta />
        <Localizacao />
      </main>
      <Footer />
      <WhatsappFlutuante />
    </div>
  );
}
