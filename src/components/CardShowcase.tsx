import { useState } from 'react';
import { CARD_SAMPLES, CardSample } from '../data/cardsData';
import { Sparkles, Dices, ArrowRight, BookOpen, Quote } from 'lucide-react';

interface CardShowcaseProps {
  onCtaClick: () => void;
}

export function CardShowcase({ onCtaClick }: CardShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [drawnCard, setDrawnCard] = useState<CardSample | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const categories = ['Todas', 'Fé', 'Paz', 'Coragem', 'Esperança', 'Proteção', 'Conforto'];

  const filteredCards = selectedCategory === 'Todas'
    ? CARD_SAMPLES
    : CARD_SAMPLES.filter((c) => c.category === selectedCategory || (selectedCategory === 'Conforto' && c.category === 'Conforto'));

  const handleDrawCard = () => {
    setIsDrawing(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * CARD_SAMPLES.length);
      setDrawnCard(CARD_SAMPLES[randomIndex]);
      setIsDrawing(false);
    }, 450);
  };

  return (
    <section id="exemplos" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#ECE4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Mostruário Real
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance mb-4">
            Veja algumas das cartinhas que você vai receber
          </h2>
          <p className="text-sm sm:text-base text-[#6E5F57] leading-relaxed max-w-2xl mx-auto">
            Não é só um arquivo genérico. Cada uma das <strong className="text-[#6B1D2F]">54 cartinhas</strong> possui diagramação delicada, bordas florais sutis, versículos autênticos e tipografia acolhedora.
          </p>
        </div>

        {/* Experimente a experiência de tirar uma cartinha */}
        <div className="mb-12 max-w-2xl mx-auto bg-white p-6 sm:p-7 rounded-2xl border border-[#DFC27E]/60 shadow-sm text-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#B68A36]">
            <Dices className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1D2F]">
              Demonstração Interativa
            </span>
          </div>
          <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#3B111B] mb-2">
            Como seria tirar uma cartinha agora da sua cesta?
          </h3>
          <p className="text-xs sm:text-sm text-[#73635B] mb-4">
            Clique no botão abaixo para simular a experiência de retirar uma palavra de esperança hoje:
          </p>

          <button
            onClick={handleDrawCard}
            disabled={isDrawing}
            className="px-5 py-2.5 bg-[#6B1D2F] hover:bg-[#521321] text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60"
          >
            <Sparkles className="w-4 h-4 text-[#DFC27E]" />
            <span>{isDrawing ? 'Sorteando cartinha...' : 'Tirar uma Cartinha de Demonstração'}</span>
          </button>

          {/* Resultado da Cartinha Sorteada */}
          {drawnCard && (
            <div className="mt-6 p-6 bg-[#FFFDF9] rounded-2xl border-2 border-[#DFC27E]/80 shadow-md text-left transition-all animate-fadeIn">
              <div className="flex items-center justify-between border-b border-[#EBDAD4] pb-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B1D2F]">
                  Cartinha sorteada • {drawnCard.category}
                </span>
                <span className="text-[11px] text-[#8C7A70] italic">
                  Modelo #{drawnCard.id} de 54
                </span>
              </div>
              <p className="font-serif-title text-xl font-bold text-[#3B111B] mb-2">
                "{drawnCard.verse}"
              </p>
              {drawnCard.reference && (
                <p className="text-xs font-semibold text-[#B68A36] uppercase tracking-wider">
                  — {drawnCard.reference}
                </p>
              )}
              <div className="mt-4 pt-3 border-t border-[#F2ECE6] text-[11px] text-[#7A6960] flex items-center justify-between">
                <span>Esta é apenas 1 das 54 cartinhas inclusas.</span>
                <button
                  onClick={onCtaClick}
                  className="text-[#6B1D2F] font-bold hover:underline"
                >
                  Garantir os 54 modelos &rarr;
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Filtros de Categorias (Interactive controls via clean tabs) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#6B1D2F] text-white shadow-sm'
                  : 'bg-white text-[#63554F] hover:bg-[#F2ECE6] border border-[#E0D4C9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vitrine de Cartas em formato físico de recorte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-5 border border-dashed border-[#B68A36]/40 shadow-sm hover:shadow-md hover:border-[#6B1D2F]/50 transition-all duration-200 flex flex-col justify-between relative group"
            >
              {/* Marcação de corte artesanal */}
              <div className="absolute top-2 right-2 text-[10px] text-[#B8A89F] font-mono select-none">
                ✂ Modelo #{card.id}
              </div>

              <div>
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B1D2F] bg-[#FAF2EF] px-2 py-0.5 rounded">
                    {card.category}
                  </span>
                </div>

                <div className="relative mb-3">
                  <Quote className="w-5 h-5 text-[#DFC27E]/40 absolute -top-2 -left-1 pointer-events-none" />
                  <p className="font-serif-title text-base sm:text-lg font-bold text-[#2E1E1E] leading-snug pt-1">
                    "{card.verse}"
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F2ECE6] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#8C6D2B] text-[11px] flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#B68A36]" /> {card.reference}
                </span>
                <span className="text-[10px] text-[#A6978E]">Folha A4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de que existem mais 42 modelos no arquivo */}
        <div className="mt-12 text-center bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#E8DFD7] max-w-xl mx-auto">
          <p className="text-sm font-semibold text-[#3B111B] mb-1">
            + 42 outros modelos exclusivos no arquivo PDF completo
          </p>
          <p className="text-xs text-[#6B5E57] mb-4">
            Totalizando exatamente <strong className="text-[#6B1D2F]">54 modelos diferentes</strong> prontos para imprimir e recortar.
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6B1D2F] hover:bg-[#521321] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>Quero Todos os 54 Modelos por R$ 10</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
