import { advogado, formacao } from "@/data/advogado";

export function Advogado() {
  return (
    <section id="advogado" className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="eyebrow">Conheça o advogado</p>
            <span className="mt-6 block h-px w-16 bg-ink" aria-hidden />
          </div>

          <div>
            <h2 className="max-w-2xl text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.1]">
              {advogado.nome} é advogado com atuação especializada em Direito Previdenciário.
            </h2>

            <div className="mt-9 grid max-w-3xl gap-6 text-base leading-relaxed text-ink-soft md:grid-cols-2 md:gap-10">
              <p>
                Pós-graduado em Direito Previdenciário e do Trabalho pelo IEPREV, dedica a atuação à
                orientação de segurados em questões relacionadas à Previdência Social —
                planejamento, requerimentos junto ao INSS e demandas judiciais.
              </p>
              <p>
                Formado em Direito e em Administração Pública, atende em {advogado.cidade},{" "}
                {advogado.estado}, com contato direto com o próprio advogado. Desde 2020 mantém
                produção autoral de conteúdo educativo sobre regras previdenciárias.
              </p>
            </div>

            <dl className="mt-16 border-t border-border">
              {formacao.map((f) => (
                <div
                  key={f.titulo}
                  className="flex flex-col gap-1 border-b border-border py-6 md:flex-row md:items-baseline md:gap-10"
                >
                  <dt className="font-display text-base text-ink md:flex-1">{f.titulo}</dt>
                  <dd className="text-sm text-muted-foreground md:w-80 md:text-right">
                    {f.instituicao}
                  </dd>
                </div>
              ))}
              <div className="flex flex-col gap-1 border-b border-border py-6 md:flex-row md:items-baseline md:gap-10">
                <dt className="font-display text-base text-ink md:flex-1">Inscrição profissional</dt>
                <dd className="text-sm text-muted-foreground md:w-80 md:text-right">
                  {advogado.oab}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
