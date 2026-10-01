import { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';

interface TopUrgencyBarProps {
  onCtaClick: () => void;
}

export function TopUrgencyBar({ onCtaClick }: TopUrgencyBarProps) {
  // Timer de contagem regressiva suave (ex: 15 minutos reciclado ou salvo localmente)
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('cartinhas_timer_end');
    const now = Date.now();
    if (saved && Number(saved) > now) {
      return Math.floor((Number(saved) - now) / 1000);
    }
    const end = now + 15 * 60 * 1000;
    localStorage.setItem('cartinhas_timer_end', String(end));
    return 15 * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reinicia ciclo de 15 minutos para manter a experiência funcional
          const newEnd = Date.now() + 15 * 60 * 1000;
          localStorage.setItem('cartinhas_timer_end', String(newEnd));
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="bg-[#581523] text-[#FAF7F2] py-2.5 px-4 text-xs md:text-sm font-medium border-b border-[#7A2234]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#DFC27E] shrink-0 animate-pulse" />
          <span>
            <strong className="font-semibold text-[#DFC27E]">Oferta Especial de Lançamento:</strong>{' '}
            <span className="hidden sm:inline">Coleção completa com 54 modelos diferentes</span> por apenas{' '}
            <strong className="text-white font-bold">R$ 10</strong>
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 bg-[#420E19] px-2.5 py-1 rounded border border-[#7A2234]/70">
            <Clock className="w-3.5 h-3.5 text-[#DFC27E]" />
            <span className="text-[11px] uppercase tracking-wider text-[#EBDAD4] hidden md:inline">
              Tempo restante:
            </span>
            <span className="font-mono font-bold text-white text-xs tabular-nums">
              {formattedTime}
            </span>
          </div>

          <button
            onClick={onCtaClick}
            className="hidden lg:inline-flex items-center text-xs font-semibold text-[#DFC27E] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
          >
            Garantir por R$10 &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
