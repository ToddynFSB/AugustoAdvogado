/**
 * Informações reais, obtidas de fontes públicas:
 * - ficha pública no Google Maps (Itabirito/MG, categoria "advogado previdenciário")
 * - blog do profissional: https://zeprev.blogspot.com
 * - perfil público no LinkedIn
 * - WhatsApp informado pelo próprio profissional
 * Nada aqui é inventado. Campos não confirmados ficam nulos e não são exibidos.
 */

export const advogado = {
  nome: "José Augusto de Sousa Gois",
  tratamento: "Dr. José Augusto",
  oab: "OAB/MG 189.757",
  cidade: "Itabirito",
  estado: "MG",
  coords: { lat: -20.2476523, lng: -43.8064881 },
  mapsUrl:
    "https://www.google.com/maps/place/Jos%C3%A9+Augusto+de+Sousa+Gois/@-20.2483933,-43.8081454,17.5z",
  instagram: "https://www.instagram.com/joseaugustodesousagois/",
  instagramHandle: "@joseaugustodesousagois",
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-augusto-de-sousa-gois-171644aa/",
  blog: "https://zeprev.blogspot.com/",
  whatsapp: "5531984209140",
  telefoneFormatado: "+55 31 98420-9140",
  // Endereço completo e horário não constam nas fontes públicas consultadas.
  endereco: null as string | null,
  horario: null as string | null,
} as const;

export const mensagemContato =
  "Olá, Dr. José Augusto. Conheci seu trabalho pelo site e gostaria de conversar sobre uma questão previdenciária.";

export function whatsappHref(mensagem: string = mensagemContato): string {
  return `https://wa.me/${advogado.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const ctaLabel = "Falar com o advogado";

export const formacao = [
  {
    titulo: "Pós-graduação em Direito Previdenciário e do Trabalho",
    instituicao: "IEPREV",
  },
  {
    titulo: "Bacharelado em Direito",
    instituicao: "Universidade Presidente Antônio Carlos — Itabirito",
  },
  {
    titulo: "Bacharelado em Administração Pública",
    instituicao: "UFOP — Universidade Federal de Ouro Preto",
  },
];

export const areas = [
  {
    numero: "01",
    titulo: "Planejamento previdenciário",
    resumo:
      "Análise do histórico de contribuições e das regras aplicáveis para entender qual caminho de aposentadoria faz sentido — antes de dar entrada em qualquer pedido.",
    itens: ["Leitura do CNIS e do tempo de contribuição", "Regras de transição da EC 103/2019", "Organização de carteira de trabalho e PPP"],
  },
  {
    numero: "02",
    titulo: "Pedidos de aposentadoria e benefícios no INSS",
    resumo:
      "Condução do requerimento administrativo junto ao INSS, com a documentação conferida antes do protocolo e acompanhamento até a decisão.",
    itens: ["Aposentadorias por idade e por tempo de contribuição", "Aposentadoria da pessoa com deficiência", "Comprovação de períodos e vínculos"],
  },
  {
    numero: "03",
    titulo: "Processos judiciais",
    resumo:
      "Atuação judicial quando a via administrativa não resolve — inclusive em revisões de benefício já concedido, à luz das teses julgadas pelos tribunais.",
    itens: ["Benefícios negados pelo INSS", "Revisões de benefício concedido", "Acompanhamento de teses do STF e do STJ"],
  },
];
