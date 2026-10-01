export interface CardSample {
  id: number;
  category: "Fé" | "Paz" | "Coragem" | "Esperança" | "Sabedoria" | "Proteção" | "Conforto";
  title: string;
  verse?: string;
  reference?: string;
  colorTheme: string;
}

export const CATEGORIES = [
  {
    name: "Fé",
    desc: "Para lembrar de confiar.",
    highlight: "Em todos os momentos",
  },
  {
    name: "Paz",
    desc: "Para aqueles momentos em que o coração precisa desacelerar.",
    highlight: "Calmaria para a alma",
  },
  {
    name: "Coragem",
    desc: "Para lembrar que você pode continuar.",
    highlight: "Força para seguir em frente",
  },
  {
    name: "Esperança",
    desc: "Para aqueles dias em que você precisa olhar para frente.",
    highlight: "Um novo amanhecer",
  },
  {
    name: "Sabedoria",
    desc: "Para momentos em que precisa de direção.",
    highlight: "Discernimento e clareza",
  },
  {
    name: "Proteção",
    desc: "Para lembrar de colocar seus caminhos nas mãos de Deus.",
    highlight: "Sob o cuidado do Pai",
  },
  {
    name: "Cura & Conforto",
    desc: "Mensagens para momentos que pedem conforto e esperança.",
    highlight: "Alento e carinho",
  },
];

export const CARD_SAMPLES: CardSample[] = [
  {
    id: 1,
    category: "Fé",
    title: "Confie no Senhor",
    verse: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    reference: "Provérbios 3:5",
    colorTheme: "wine",
  },
  {
    id: 2,
    category: "Paz",
    title: "Descanso para a Alma",
    verse: "A paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês.",
    reference: "Filipenses 4:7",
    colorTheme: "rose",
  },
  {
    id: 3,
    category: "Coragem",
    title: "Seja Forte e Corajoso",
    verse: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore, pois o Senhor estará com você.",
    reference: "Josué 1:9",
    colorTheme: "gold",
  },
  {
    id: 4,
    category: "Esperança",
    title: "O Tempo de Deus",
    verse: "Deus fez tudo formoso no seu devido tempo.",
    reference: "Eclesiastes 3:11",
    colorTheme: "wine",
  },
  {
    id: 5,
    category: "Proteção",
    title: "Entrega e Descansa",
    verse: "Entrega o teu caminho ao Senhor; confia nele, e o mais ele fará.",
    reference: "Salmos 37:5",
    colorTheme: "gold",
  },
  {
    id: 6,
    category: "Conforto",
    title: "Cuidado em Cada Detalhe",
    verse: "Deus cuida de você em todos os detalhes, mesmo naqueles que ninguém vê.",
    reference: "Palavra de Conforto",
    colorTheme: "rose",
  },
  {
    id: 7,
    category: "Fé",
    title: "Você Não Está Só",
    verse: "Você não está sozinho(a), Deus caminha com você a cada passo da jornada.",
    reference: "Mensagem de Fé",
    colorTheme: "wine",
  },
  {
    id: 8,
    category: "Proteção",
    title: "Nada Falta",
    verse: "O Senhor é o meu pastor; de nada terei falta.",
    reference: "Salmos 23:1",
    colorTheme: "gold",
  },
  {
    id: 9,
    category: "Esperança",
    title: "Planos de Paz",
    verse: "Porque sou eu que conheço os planos que tenho para vocês, planos de paz e de lhes dar esperança.",
    reference: "Jeremias 29:11",
    colorTheme: "rose",
  },
  {
    id: 10,
    category: "Coragem",
    title: "Não Temas",
    verse: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço.",
    reference: "Isaías 41:10",
    colorTheme: "wine",
  },
  {
    id: 11,
    category: "Paz",
    title: "Oração e Gratidão",
    verse: "Deus ouve suas orações, acolhe suas lágrimas e conhece perfeitamente o seu coração.",
    reference: "Palavra de Paz",
    colorTheme: "rose",
  },
  {
    id: 12,
    category: "Sabedoria",
    title: "Em Todo Tempo",
    verse: "Em todo tempo Deus é bom. Ele ilumina os passos de quem busca a Sua luz.",
    reference: "Mensagem de Sabedoria",
    colorTheme: "gold",
  },
];
