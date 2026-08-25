import { advogado, whatsappHref } from "@/data/advogado";

const nav = [
  { href: "#advogado", label: "O advogado" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#autoridade", label: "Especialização" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-16">
      <div className="container-page grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg leading-snug text-ink">{advogado.nome}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Advocacia previdenciária · {advogado.oab}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            Planejamento previdenciário, requerimentos junto ao INSS e processos judiciais, com base
            em {advogado.cidade}, {advogado.estado}.
          </p>
        </div>

        <nav aria-label="Seções" className="flex flex-col gap-3 text-sm text-ink-soft">
          <span className="eyebrow">Navegar</span>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-opacity hover:opacity-60">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm text-ink-soft">
          <span className="eyebrow">Contato</span>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-opacity hover:opacity-60"
          >
            WhatsApp {advogado.telefoneFormatado}
          </a>
          <a
            href={advogado.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-opacity hover:opacity-60"
          >
            Instagram {advogado.instagramHandle}
          </a>
          <a
            href={advogado.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>
          <a
            href={advogado.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-opacity hover:opacity-60"
          >
            Google Maps
          </a>
        </div>
      </div>

      <div className="container-page mt-14 border-t border-border pt-8">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Conteúdo de caráter meramente informativo, em conformidade com o Código de Ética e
          Disciplina da OAB. Não há oferta de serviços com promessa de resultado.
        </p>
      </div>
    </footer>
  );
}
