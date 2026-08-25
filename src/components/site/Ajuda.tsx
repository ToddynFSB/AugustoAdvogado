const passos = [
  {
    numero: "01",
    titulo: "Conversa inicial",
    texto:
      "Você descreve sua situação: tempo de trabalho, se já houve pedido no INSS e o que gostaria de esclarecer.",
  },
  {
    numero: "02",
    titulo: "Análise dos documentos",
    texto:
      "Histórico de contribuições, carteira de trabalho e PPP são conferidos para identificar o que já está comprovado e o que falta.",
  },
  {
    numero: "03",
    titulo: "Caminho definido",
    texto:
      "Com o cenário claro, define-se o próximo passo — planejar, requerer no INSS ou discutir judicialmente.",
  },
];

export function Ajuda() {
  return (
    <section id="ajuda" className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Como pode ajudar</p>
          <h2 className="mt-6 text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.1]">
            Antes de pedir a aposentadoria, é preciso entender o que você já tem.
          </h2>
          <p className="mt-7 text-base leading-relaxed text-ink-soft">
            Muitos pedidos são negados por documentação incompleta ou por escolha de uma regra menos
            vantajosa. O trabalho começa pela leitura do seu histórico — e só depois pela decisão.
          </p>
        </div>

        <ol className="mt-16 grid gap-px bg-border sm:grid-cols-3">
          {passos.map((p) => (
            <li key={p.numero} className="bg-background p-8 lg:p-10">
              <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
                {p.numero}
              </span>
              <h3 className="mt-8 text-xl leading-snug">{p.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
