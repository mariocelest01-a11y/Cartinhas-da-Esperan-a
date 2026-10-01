import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface OfferSectionProps {
  onCtaClick: () => void;
}

export function OfferSection({ onCtaClick }: OfferSectionProps) {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-gradient-to-b from-white via-[#FAF7F2] to-white border-b border-[#ECE4DC] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Oferta Especial
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B111B] text-balance">
            Leve as 54 Cartinhas da Esperança
          </h2>
          <p className="text-sm sm:text-base text-[#6E5F57] mt-2">
            Um valor simples e acessível para espalhar palavras de consolo e coragem.
          </p>
        </div>

        {/* Caixa de Oferta com Design Nobre */}
        <div className="bg-white rounded-3xl border-2 border-[#DFC27E]/80 shadow-xl overflow-hidden relative">
          {/* Faixa Superior */}
          <div className="bg-[#6B1D2F] py-3 px-6 text-center text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#DFC27E]" />
            <span>Coleção Completa • 54 Modelos Exclusivos em PDF</span>
          </div>

          <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Mockup reduzido e lista */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FAF2EF] text-[#6B1D2F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#3B2C27]">
                    54 modelos diferentes
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FAF2EF] text-[#6B1D2F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#52453F]">
                    Arquivo PDF em alta resolução
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FAF2EF] text-[#6B1D2F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#52453F]">
                    Pronto para imprimir e recortar
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FAF2EF] text-[#6B1D2F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#52453F]">
                    Pode ser utilizado para você ou para compartilhar com quem ama
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE6] text-xs text-[#7A6960]">
                <p>
                  ✓ Impressão compatível com qualquer impressora caseira ou profissional.
                </p>
              </div>
            </div>

            {/* Preço e CTA */}
            <div className="md:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8DFD7] text-center flex flex-col justify-center">
              <span className="text-xs uppercase tracking-wider text-[#8A7568] font-semibold">
                Pagamento Único
              </span>

              <div className="my-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#6B1D2F] font-serif-title">
                  R$ 10
                </span>
              </div>

              <p className="text-xs text-[#6B5E57] mb-6 leading-relaxed">
                Por apenas R$10 você recebe o arquivo digital completo.
              </p>

              <button
                onClick={onCtaClick}
                className="w-full py-4 px-6 bg-[#6B1D2F] hover:bg-[#521321] text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 group"
              >
                <span>QUERO RECEBER AGORA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-[11px] text-[#8C7A70] mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6B1D2F]" /> Produto digital em PDF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
