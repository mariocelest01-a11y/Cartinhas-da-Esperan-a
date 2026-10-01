import { CheckCircle2, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface WhatYouGetProps {
  onCtaClick: () => void;
}

export function WhatYouGet({ onCtaClick }: WhatYouGetProps) {
  const items = [
    "54 modelos diferentes de Cartinhas da Esperança",
    "Arquivo digital em PDF em alta definição",
    "Cartinhas diagramadas e prontas para imprimir em folhas A4",
    "Mensagens sobre fé, paz, coragem, esperança, cura, sabedoria, proteção e muito mais",
    "Arquivo para você imprimir sempre que precisar na sua casa ou gráfica",
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#ECE4DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#DFC27E]/60 shadow-sm relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
              Transparência Total
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance mb-3">
              O que você recebe por apenas R$ 10
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5F57]">
              Sem mensalidades. Sem pegadinhas. Uma entrega digital limpa e direta.
            </p>
          </div>

          <div className="space-y-4 max-w-xl mx-auto mb-10">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8DFD7] shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#6B1D2F] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-[#3B2C27] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Destaque visual pedido nas instruções */}
          <div className="p-4 bg-[#FFFDF9] rounded-xl border border-[#B68A36]/40 text-center max-w-md mx-auto mb-8">
            <p className="text-xs sm:text-sm text-[#581523] font-semibold flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#B68A36]" />
              Você compra uma vez e recebe o arquivo digital.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6B1D2F] hover:bg-[#521321] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#DFC27E]" />
              <span>Receber o Arquivo PDF Completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#8A7568] mt-2">
              Pagamento 100% seguro • Envio imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
