import { ArrowDownRight } from "lucide-react";
import retrato from "@/assets/jose-augusto-terno.jpg";
import { advogado, ctaLabel, whatsappHref } from "@/data/advogado";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-primary-foreground">
      <div className="container-page relative grid min-h-[88svh] grid-cols-1 items-end gap-10 pt-28 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:max-h-[980px] lg:pt-32 lg:pb-24">
        {/* filete vertical geométrico discreto */}
        <span
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-primary-foreground/10 lg:block"
          aria-hidden
        />

        <div className="reveal max-w-xl lg:pr-12">
          <p className="eyebrow text-primary-foreground/45">
            {advogado.cidade} · {advogado.estado} — {advogado.oab}
          </p>

          <h1 className="mt-7 text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.98]">
            José Augusto
            <br />
            de Sousa Gois
          </h1>

          <p className="mt-6 font-display text-lg text-primary-foreground/85 sm:text-xl">
            Advogado especializado em Direito Previdenciário
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/60">
            Cada histórico de contribuição é analisado antes de qualquer pedido — para que a decisão
            sobre a aposentadoria seja tomada com clareza, e não no escuro.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex h-14 items-center justify-center gap-3 bg-primary-foreground px-8 text-sm font-semibold uppercase tracking-[0.14em] whitespace-nowrap text-ink transition-colors hover:bg-primary-foreground/85"
            >
              {ctaLabel}
              <ArrowDownRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#atuacao"
              className="inline-flex h-14 items-center justify-center border border-primary-foreground/25 px-8 text-sm font-semibold uppercase tracking-[0.14em] whitespace-nowrap text-primary-foreground/85 transition-colors hover:border-primary-foreground"
            >
              Áreas de atuação
            </a>
          </div>
        </div>

        <figure className="reveal-slow relative mx-auto w-full max-w-sm lg:max-w-none">
          <img
            src={retrato}
            alt="José Augusto de Sousa Gois, advogado previdenciário em Itabirito, Minas Gerais"
            width={1365}
            height={2048}
            loading="eager"
            className="portrait-mono aspect-3/4 w-full object-cover object-top lg:aspect-4/5"
          />
          <span
            className="pointer-events-none absolute -bottom-3 -left-3 h-20 w-px bg-primary-foreground/25 lg:-left-6"
            aria-hidden
          />
          <figcaption className="mt-4 text-[0.6875rem] uppercase tracking-[0.18em] text-primary-foreground/35">
            Fotografia do profissional
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
