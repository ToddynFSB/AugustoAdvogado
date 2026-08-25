import { ArrowUpRight } from "lucide-react";
import { advogado, ctaLabel, whatsappHref } from "@/data/advogado";

export function Cta() {
  return (
    <section className="bg-ink py-20 text-primary-foreground md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
        <h2 className="text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.05]">
          Entenda sua situação previdenciária
          <br className="hidden sm:block" /> antes de decidir.
        </h2>

        <div className="lg:justify-self-end">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-primary-foreground px-8 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-primary-foreground/85 sm:w-auto"
          >
            {ctaLabel}
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-primary-foreground/45">
            WhatsApp {advogado.telefoneFormatado}
          </p>
        </div>
      </div>
    </section>
  );
}
