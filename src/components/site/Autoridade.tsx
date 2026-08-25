import { ArrowUpRight } from "lucide-react";
import { advogado, ctaLabel, whatsappHref } from "@/data/advogado";

const itens = [
  {
    titulo: "Especialização declarada",
    texto:
      "Pós-graduação em Direito Previdenciário e do Trabalho pelo IEPREV, com atuação voltada aos segurados do INSS.",
  },
  {
    titulo: "Análise antes do pedido",
    texto:
      "Carteira de trabalho, PPP, vínculos e recolhimentos conferidos antes de qualquer requerimento.",
  },
  {
    titulo: "Da via administrativa ao Judiciário",
    texto:
      "Orientação já no pedido junto ao INSS — não apenas quando o caso chega ao processo judicial.",
  },
  {
    titulo: "Atualização com os tribunais",
    texto:
      "Acompanhamento de teses como o Tema 1102/STF e o Tema 1.018/STJ e das regras que mudam a cada ano após a EC 103/2019.",
  },
  {
    titulo: "Linguagem sem juridiquês",
    texto:
      "Anos de produção de conteúdo educativo em texto e vídeo explicando regras previdenciárias de forma simples.",
  },
  {
    titulo: "Atendimento direto",
    texto: `Contato com o próprio advogado, com base em ${advogado.cidade}, ${advogado.estado}.`,
  },
];

export function Autoridade() {
  return (
    <section id="autoridade" className="bg-ink py-24 text-primary-foreground md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-primary-foreground/45">Especialização</p>
            <h2 className="mt-6 text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.08]">
              Previdenciário exige
              <br />
              método, não promessas.
            </h2>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-10 inline-flex items-center gap-3 border-b border-primary-foreground/30 pb-2 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary-foreground"
            >
              {ctaLabel}
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {itens.map((item) => (
              <div key={item.titulo}>
                <span className="block h-px w-8 bg-primary-foreground/40" aria-hidden />
                <h3 className="mt-5 text-lg leading-snug">{item.titulo}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/60">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-20 max-w-2xl border-t border-primary-foreground/15 pt-8 text-xs leading-relaxed text-primary-foreground/40">
          Cada caso previdenciário depende do histórico contributivo e das regras aplicáveis à data
          do requerimento. Nenhuma informação deste site constitui promessa de resultado ou de
          concessão de benefício.
        </p>
      </div>
    </section>
  );
}
