import { HelpCircle } from 'lucide-react';

export function ObjectionBreaker() {
  const objections = [
    {
      q: "Preciso ter experiência para fazer?",
      a: "Não. Basta imprimir o arquivo e recortar as cartinhas. É uma atividade simples, rápida e prazerosa.",
    },
    {
      q: "Preciso de algum material especial?",
      a: "Não. Para começar, você precisa basicamente de uma impressora e uma tesoura comum. Se quiser, pode usar folhas de gramatura maior ou potes decorativos, mas não é obrigatório.",
    },
    {
      q: "Posso imprimir novamente?",
      a: "O arquivo digital permite que você imprima as cartinhas conforme a sua necessidade, respeitando os termos de uso do produto.",
    },
    {
      q: "Posso usar as cartinhas para presentear alguém?",
      a: "Sim. Você pode escolher uma mensagem e entregar ou compartilhar com alguém que gostaria de receber uma palavra especial.",
    },
    {
      q: "É um produto físico?",
      a: "Não. Você recebe um arquivo digital em PDF. Depois, pode imprimir as cartinhas na sua casa ou em qualquer gráfica rápida.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#ECE4DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance">
            Talvez você esteja pensando...
          </h2>
          <p className="text-sm text-[#6E5F57] mt-2">
            Veja como é simples e sem mistérios aproveitar as Cartinhas da Esperança.
          </p>
        </div>

        <div className="space-y-4">
          {objections.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E8DFD7] shadow-2xs hover:border-[#6B1D2F]/30 transition-colors"
            >
              <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#3B111B] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#B68A36] shrink-0" />
                {item.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4F48] leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
