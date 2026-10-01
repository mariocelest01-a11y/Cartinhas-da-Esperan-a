import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export function FinalCta({ onCtaClick }: FinalCtaProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF7F2] via-[#F4ECE8] to-[#FAF7F2] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#DFC27E]/60 flex items-center justify-center mx-auto mb-6 text-[#6B1D2F]">
          <Heart className="w-6 h-6 fill-[#6B1D2F]/20 text-[#6B1D2F]" />
        </div>

        <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-3 block">
          Espalhe Fé e Acolhimento
        </span>

        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B111B] text-balance mb-6 max-w-2xl mx-auto">
          Uma pequena cartinha pode carregar uma grande mensagem.
        </h2>

        <p className="text-base sm:text-lg text-[#63554F] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          Tenha <strong className="text-[#6B1D2F] font-semibold">54 modelos de mensagens</strong> de fé, esperança e encorajamento prontos para imprimir e compartilhar quando quiser.
        </p>

        {/* Preço e Botão */}
        <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-[#DFC27E]/80 shadow-lg max-w-md mx-auto">
          <span className="text-xs uppercase tracking-wider text-[#8A7568] font-semibold">
            Investimento Único
          </span>

          <div className="my-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-[#6B1D2F] font-serif-title">
              R$ 10,00
            </span>
          </div>

          <p className="text-xs text-[#7A6960] mb-6">
            Coleção completa em PDF • 54 modelos diferentes
          </p>

          <button
            onClick={onCtaClick}
            className="w-full py-4 px-6 bg-[#6B1D2F] hover:bg-[#521321] text-white font-bold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 group"
          >
            <Sparkles className="w-5 h-5 text-[#DFC27E]" />
            <span>QUERO AS CARTINHAS DA ESPERANÇA</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="mt-4 pt-4 border-t border-[#F2ECE6] text-[11px] text-[#7A6960] flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6B1D2F]" />
            <span>Pagamento único • Acesso imediato ao arquivo em PDF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
