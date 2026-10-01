import { Shield, Sparkles, Feather, Compass, HeartPulse, Anchor, Sun } from 'lucide-react';
import { CATEGORIES } from '../data/cardsData';

export function ProductCategories() {
  const icons = [
    Anchor,      // Fé
    Feather,     // Paz
    Sun,         // Coragem
    Sparkles,    // Esperança
    Compass,     // Sabedoria
    Shield,      // Proteção
    HeartPulse,  // Cura & Conforto
  ];

  return (
    <section id="modelos" className="py-16 md:py-24 bg-white border-b border-[#ECE4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Coleção Completa
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance mb-4">
            Conheça as Cartinhas da Esperança
          </h2>
          <p className="text-sm sm:text-base text-[#685952] max-w-2xl mx-auto leading-relaxed">
            Uma coleção com <strong className="text-[#6B1D2F] font-semibold">54 modelos diferentes</strong> de cartinhas com mensagens relacionadas à fé, paz, coragem, esperança, cura, sabedoria, proteção e muito mais.
          </p>
        </div>

        {/* Grade das Categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={cat.name}
                className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD7] hover:border-[#B68A36]/60 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-xl bg-white border border-[#E2D5CC] flex items-center justify-center text-[#6B1D2F]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] font-medium">
                      {cat.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif-title font-bold text-xl text-[#3B111B] mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66574F] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8DFD7]/60 flex items-center justify-between text-xs text-[#8A7568]">
                  <span>Modelos temáticos</span>
                  <span className="font-medium text-[#6B1D2F]">Prontas em PDF</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota ética e transparente de conformidade */}
        <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFD7] text-center max-w-2xl mx-auto text-xs text-[#7A6960]">
          <p>
            * As descrições acima representam os temas das mensagens para reflexão pessoal e conforto. O produto não promete nem garante cura médica, resultados financeiros ou milagres específicos.
          </p>
        </div>
      </div>
    </section>
  );
}
