import { CalendarClock, FileCheck2, Scale } from "lucide-react";
import { areas } from "@/data/advogado";

const icones = [CalendarClock, FileCheck2, Scale];

export function Atuacao() {
  return (
    <section id="atuacao" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Áreas de atuação</p>
            <h2 className="mt-6 max-w-lg text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.1]">
              Três frentes, uma especialidade.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Toda a atuação é concentrada em direito previdenciário — do planejamento ao processo
            judicial, quando necessário.
          </p>
        </div>

        <div className="mt-16 border-t border-border">
          {areas.map((a, i) => {
            const Icone = icones[i] ?? CalendarClock;
            return (
              <article
                key={a.numero}
                className="group grid gap-6 border-b border-border py-10 transition-colors hover:bg-background md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-12 md:py-12"
              >
                <div className="flex items-center gap-5 md:w-40 md:flex-col md:items-start md:gap-8">
                  <span className="font-display text-sm text-muted-foreground">{a.numero}</span>
                  <Icone className="size-7 stroke-[1.25] text-ink" aria-hidden />
                </div>

                <h3 className="text-2xl leading-snug md:text-[1.75rem]">{a.titulo}</h3>

                <div>
                  <p className="text-base leading-relaxed text-ink-soft">{a.resumo}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {a.itens.map((item) => (
                      <li
                        key={item}
                        className="text-xs uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
