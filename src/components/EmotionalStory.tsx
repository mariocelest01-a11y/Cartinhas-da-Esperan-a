import { Heart, SunMedium, MessageCircleHeart } from 'lucide-react';

export function EmotionalStory() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#6B1D2F] font-bold mb-3">
            <Heart className="w-3.5 h-3.5 text-[#B68A36] fill-[#B68A36]/20" />
            Um Toque de Carinho
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance">
            Às vezes, tudo o que alguém precisa é de uma palavra certa.
          </h2>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-[#E8DFD7] shadow-sm relative overflow-hidden">
          {/* Delicada citação estética */}
          <div className="space-y-5 text-[#52453F] text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Existem dias em que acordamos com o peito apertado ou preocupados com o futuro.
            </p>
            <p>
              Dias em que as forças parecem poucas e precisamos de um sopro de coragem.
            </p>
            <p>
              Dias em que o coração pede silêncio, desaceleração e uma paz que só Deus pode dar.
            </p>
            <p className="font-medium text-[#3B111B]">
              E também existem momentos em que vemos alguém que amamos — uma mãe, um filho, uma amiga querida — passando por uma fase difícil e não encontramos as palavras exatas para consolar.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-[#F2ECE6] flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="flex items-start gap-3">
              <SunMedium className="w-6 h-6 text-[#B68A36] shrink-0 mt-1" />
              <div>
                <p className="font-serif-title text-lg font-bold text-[#581523]">
                  Foi pensando nesses pequenos momentos que nasceram as Cartinhas da Esperança.
                </p>
                <p className="text-xs sm:text-sm text-[#73635B] mt-1">
                  Um gesto singelo que lembra: Deus continua cuidando, sustentando e ouvindo cada oração.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="text-xs font-semibold text-[#6B1D2F] bg-[#F4ECE8] px-4 py-2 rounded-full border border-[#E8DFD7] flex items-center gap-1.5 whitespace-nowrap">
                <MessageCircleHeart className="w-4 h-4 text-[#6B1D2F]" /> 54 mensagens de fé
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
