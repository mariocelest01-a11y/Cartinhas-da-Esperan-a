import { FileText, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import heroMockupImg from '../assets/images/hero_cartinhas_mockup_1790890968287.jpg';

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF6F0] to-[#FAF7F2]">
      {/* Elementos decorativos de fundo sutis */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EBDAD4]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#DFC27E]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Metadados limpos sem cápsulas artificiais */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#735C52] mb-5 font-medium tracking-wide">
          <span className="text-[#6B1D2F] font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A36]" /> 54 Modelos Diferentes
          </span>
          <span aria-hidden="true" className="text-[#C4B6AD]">·</span>
          <span>Arquivo Digital em PDF</span>
          <span aria-hidden="true" className="text-[#C4B6AD]">·</span>
          <span>Pronto para Imprimir e Recortar</span>
        </div>

        {/* Título Principal & Subtítulo */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#3B111B] leading-[1.18] tracking-tight text-balance mb-5">
            Uma palavra de fé pode chegar exatamente quando alguém mais precisa.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5F534D] leading-relaxed text-balance max-w-2xl mx-auto font-normal">
            Transforme uma simples folha A4 em <strong className="text-[#581523] font-semibold">54 Cartinhas da Esperança</strong>, prontas para imprimir, recortar e compartilhar mensagens de fé, paz, coragem e esperança.
          </p>
        </div>

        {/* Mockup Central do Produto com Moldura Artesanal */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white ring-1 ring-[#D8C7B9]/60">
            <img
              src={heroMockupImg}
              onError={(e) => {
                // Fallback para caminho estático público se necessário
                e.currentTarget.src = '/images/hero_cartinhas_mockup_1790890968287.jpg';
              }}
              alt="Cartinhas da Esperança impressas organizadas delicadamente em uma cesta rústica e sobre mesa de linho"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
              loading="eager"
            />

            {/* Destaque flutuante artesanal na foto */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 sm:px-5 rounded-xl border border-[#DFC27E]/60 shadow-lg text-left max-w-xs sm:max-w-sm">
              <p className="text-[11px] uppercase tracking-wider text-[#8A7568] font-semibold">
                Coleção Completa
              </p>
              <p className="font-serif-title text-base sm:text-lg font-bold text-[#581523]">
                54 Modelos Diferentes de Mensagens
              </p>
              <p className="text-xs text-[#63554F] mt-0.5">
                Prontas em folha A4 com guias de recorte suaves
              </p>
            </div>
          </div>
        </div>

        {/* Bloco de Ação Rápida e Preço R$ 10 */}
        <div className="max-w-md mx-auto text-center bg-white/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#E8DFD7] shadow-sm">
          {/* Preço em Destaque */}
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-sm font-medium text-[#7C6C64]">Por apenas</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#6B1D2F] font-serif-title">
              R$ 10,00
            </span>
          </div>

          <p className="text-xs text-[#7C6C64] mb-5">
            Valor único simbólico • Sem assinaturas ou taxas extras
          </p>

          {/* Botão Principal */}
          <button
            onClick={onCtaClick}
            className="w-full py-4 px-6 bg-[#6B1D2F] hover:bg-[#521321] text-white font-bold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] group"
          >
            <span>QUERO AS CARTINHAS DA ESPERANÇA</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Microtextos de Confiança e Clareza */}
          <div className="mt-4 pt-3 border-t border-[#F2ECE6] flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#6E5F57]">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#581523]" /> Pagamento único
            </span>
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-[#581523]" /> Arquivo em PDF
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#581523]" /> Download imediato
            </span>
          </div>
        </div>

        {/* Resumo rápido dos 5 segundos de entendimento */}
        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs sm:text-sm">
          <div className="p-3 bg-white/60 rounded-xl border border-[#ECE4DC]">
            <p className="text-[11px] text-[#8C7B71] uppercase tracking-wider font-medium">O que é</p>
            <p className="font-semibold text-[#420E19] mt-0.5">Cartinhas da Esperança</p>
          </div>
          <div className="p-3 bg-white/60 rounded-xl border border-[#ECE4DC]">
            <p className="text-[11px] text-[#8C7B71] uppercase tracking-wider font-medium">O que recebe</p>
            <p className="font-semibold text-[#420E19] mt-0.5">54 modelos diferentes</p>
          </div>
          <div className="p-3 bg-white/60 rounded-xl border border-[#ECE4DC]">
            <p className="text-[11px] text-[#8C7B71] uppercase tracking-wider font-medium">Formato</p>
            <p className="font-semibold text-[#420E19] mt-0.5">PDF digital de alta resolução</p>
          </div>
          <div className="p-3 bg-white/60 rounded-xl border border-[#ECE4DC]">
            <p className="text-[11px] text-[#8C7B71] uppercase tracking-wider font-medium">Investimento</p>
            <p className="font-semibold text-[#420E19] mt-0.5">R$ 10 (pagamento único)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
