import { Download, Printer, Scissors, Heart, ArrowRight } from 'lucide-react';
import maoEntregandoImg from '../assets/images/mao_entregando_cartinha_1790891002096.jpg';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export function HowItWorks({ onCtaClick }: HowItWorksProps) {
  const steps = [
    {
      num: "Passo 1",
      title: "Baixe o PDF",
      desc: "Após a aprovação de R$10, você recebe o link direto e imediato para baixar o arquivo completo em PDF no seu celular ou computador.",
      icon: Download,
    },
    {
      num: "Passo 2",
      title: "Imprima as cartinhas",
      desc: "Imprima em casa ou em qualquer papelaria. Pode ser em papel comum A4 ou em folhas mais grossas (gramatura 120g a 180g) para maior durabilidade.",
      icon: Printer,
    },
    {
      num: "Passo 3",
      title: "Recorte com uma tesoura",
      desc: "Basta seguir os traços discretos de corte. É uma atividade rápida, gostosa e relaxante para fazer em poucos minutos.",
      icon: Scissors,
    },
    {
      num: "Passo 4",
      title: "Coloque em uma cesta ou recipiente",
      desc: "Deixe disponível em uma cestinha de palha, caixa decorativa ou pote de vidro e retire uma cartinha sempre que quiser.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#ECE4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Sem Complicação
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance mb-4">
            É simples de preparar
          </h2>
          <p className="text-sm sm:text-base text-[#6E5F57] leading-relaxed max-w-2xl mx-auto">
            Não é preciso ter nenhuma habilidade manual avançada. O material foi pensado para ser prático, rápido e acessível para qualquer pessoa.
          </p>
        </div>

        {/* 4 Passos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD7] hover:border-[#6B1D2F]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E2D5CC] flex items-center justify-center text-[#6B1D2F] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B68A36] uppercase tracking-wider block mb-1">
                    {st.num}
                  </span>
                  <h3 className="font-serif-title font-bold text-lg text-[#3B111B] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E5F57] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Destaque: Compartilhamento Pessoal com Foto */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8DFD7] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-[#EAE2D8]">
              <img
                src={maoEntregandoImg}
                onError={(e) => {
                  e.currentTarget.src = '/images/mao_entregando_cartinha_1790891002096.jpg';
                }}
                alt="Mãos entregando uma cartinha de esperança e encorajamento com carinho"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1D2F] bg-[#FAF2EF] px-3 py-1 rounded-full border border-[#EADBD5] inline-block">
              Gesto que Transforma
            </span>
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#3B111B]">
              Você também pode compartilhar uma cartinha diretamente com alguém que precisa receber uma mensagem especial.
            </h3>
            <p className="text-xs sm:text-sm text-[#66574F] leading-relaxed">
              Muitas vezes, uma pequena frase lida no momento certo tem o poder de acalmar uma tempestade interior. Entregue em mãos, coloque dentro de um livro ou envelope, ou tire uma foto para enviar pelo WhatsApp para quem você ama.
            </p>
            <div className="pt-2">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6B1D2F] hover:bg-[#521321] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <span>Baixar o arquivo por R$ 10</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
