import { User, Users, Gift, HandHeart, Sparkles, Coffee } from 'lucide-react';

export function UsageOccasions() {
  const occasions = [
    {
      title: "Para você",
      subtitle: "Comece o dia escolhendo uma mensagem.",
      desc: "Tire uma cartinha pela manhã junto ao seu café, antes de sair para o trabalho ou nos instantes que antecedem a sua oração.",
      icon: User,
    },
    {
      title: "Para a família",
      subtitle: "Deixe as cartinhas disponíveis para quem estiver em casa.",
      desc: "Deixe a cesta na mesa de centro, na cozinha ou no hall. Cada familiar pode retirar uma palavra sempre que sentir no coração.",
      icon: Users,
    },
    {
      title: "Para presentear",
      subtitle: "Escolha uma mensagem especial para acompanhar um presente.",
      desc: "Amarre uma cartinha com um barbante ou fita em uma lembrancinha de aniversário, livro ou caixa de bombons para surpreender.",
      icon: Gift,
    },
    {
      title: "Para alguém que precisa",
      subtitle: "Compartilhe uma cartinha com uma pessoa querida.",
      desc: "Visite um amigo enfermo, abrace alguém em luto ou entregue uma mensagem no trabalho para quem está enfrentando um dia pesado.",
      icon: HandHeart,
    },
    {
      title: "Para momentos de oração",
      subtitle: "Use uma mensagem como ponto de partida para sua reflexão.",
      desc: "Abra a Bíblia a partir da referência da cartinha e aprofunde o seu tempo devocional a sós com Deus.",
      icon: Coffee,
    },
    {
      title: "Para encontros especiais",
      subtitle: "Utilize como uma forma simples de compartilhar fé.",
      desc: "Uma dinâmica acolhedora para pequenos almoços de domingo, reuniões de amigos ou momentos de comunhão fraterna.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="usos" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#ECE4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Possibilidades de Uso
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance mb-4">
            Você pode criar o seu próprio cantinho de esperança
          </h2>
          <p className="text-sm sm:text-base text-[#6E5F57] leading-relaxed max-w-2xl mx-auto">
            As cartinhas se adaptam ao seu dia a dia e à sua rotina. Veja algumas maneiras delicadas em que elas costumam ser aproveitadas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occ) => {
            const Icon = occ.icon;
            return (
              <div
                key={occ.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8DFD7] hover:border-[#6B1D2F]/30 shadow-sm hover:shadow transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF2EF] text-[#6B1D2F] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-title font-bold text-xl text-[#3B111B] mb-1">
                    {occ.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C6D2B] mb-3">
                    {occ.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#66574F] leading-relaxed">
                    {occ.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
