import { Printer, Scissors, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import folhaA4Img from '../assets/images/folha_impressa_a4_1790890981139.jpg';
import cestaCartinhasImg from '../assets/images/cesta_com_cartinhas_1790890991412.jpg';

interface VisualMechanismProps {
  onCtaClick: () => void;
}

export function VisualMechanism({ onCtaClick }: VisualMechanismProps) {
  const steps = [
    {
      num: "1",
      title: "IMPRIMA",
      desc: "Abra o arquivo PDF e imprima em qualquer impressora caseira ou gráfica rápida.",
      icon: Printer,
    },
    {
      num: "2",
      title: "RECORTE",
      desc: "Com uma tesoura simples, siga as linhas suaves de corte de cada cartinha.",
      icon: Scissors,
    },
    {
      num: "3",
      title: "COLOQUE NA CESTA",
      desc: "Disponha em uma cestinha, caixinha, pote de vidro ou recipiente da sua casa.",
      icon: Sparkles,
    },
    {
      num: "4",
      title: "ESCOLHA UMA MENSAGEM",
      desc: "Retire uma palavra abençoada no seu dia ou entregue a alguém com amor.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="mecanismo" className="py-16 md:py-24 bg-white border-y border-[#ECE4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2">
            Mecanismo Visual Simples
          </p>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance mb-4">
            Olha como uma simples folha pode se transformar...
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E57] leading-relaxed max-w-2xl mx-auto">
            Você só precisa de uma impressora, uma tesoura e alguns minutos. Em poucos instantes, o arquivo digital ganha vida em pequenas mensagens físicas cheias de afeto.
          </p>
        </div>

        {/* Os 4 Passos do Mecanismo em Destaque Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD7] hover:border-[#DFC27E] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#6B1D2F] text-white flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#B68A36] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-serif-title font-bold text-lg text-[#3B111B] mb-2 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E5F57] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#C4B6AD]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Demonstração Fotográfica do Processo: A4 -> Cesta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8DFD7]">
          {/* Card Foto 1 */}
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-[#EAE2D8]">
              <img
                src={folhaA4Img}
                onError={(e) => {
                  e.currentTarget.src = '/images/folha_impressa_a4_1790890981139.jpg';
                }}
                alt="Folha A4 impressa com modelos de cartinhas cristãs prontas para serem recortadas com tesoura"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-[#6B1D2F] uppercase tracking-wider">
                Etapa 1 & 2 • Na sua casa
              </span>
              <h4 className="font-serif-title text-base sm:text-lg font-bold text-[#3B111B]">
                Impressão limpa e recorte descomplicado
              </h4>
              <p className="text-xs sm:text-sm text-[#6E5F57]">
                O arquivo organiza os 54 modelos para você imprimir conforme a sua necessidade, usando papel comum ou de maior gramatura.
              </p>
            </div>
          </div>

          {/* Card Foto 2 */}
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-[#EAE2D8]">
              <img
                src={cestaCartinhasImg}
                onError={(e) => {
                  e.currentTarget.src = '/images/cesta_com_cartinhas_1790890991412.jpg';
                }}
                alt="Cesta decorativa com cartinhas de esperança prontas para serem sorteadas ou presenteadas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-[#6B1D2F] uppercase tracking-wider">
                Etapa 3 & 4 • O resultado
              </span>
              <h4 className="font-serif-title text-base sm:text-lg font-bold text-[#3B111B]">
                Seu cantinho de mensagens pronto para abençoar
              </h4>
              <p className="text-xs sm:text-sm text-[#6E5F57]">
                Coloque em uma cestinha, pote de vidro ou caixinha na sala, mesa de trabalho ou cabeceira. Uma palavra sempre à mão.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Curto de Reforço */}
        <div className="mt-10 text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B1D2F] hover:bg-[#521321] text-white text-sm sm:text-base font-semibold rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Quero as 54 Cartinhas por R$ 10</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#8A786E] mt-2">
            Acesso imediato ao arquivo PDF após a confirmação
          </p>
        </div>
      </div>
    </section>
  );
}
