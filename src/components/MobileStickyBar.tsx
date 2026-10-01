import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface MobileStickyBarProps {
  onCtaClick: () => void;
}

export function MobileStickyBar({ onCtaClick }: MobileStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#DFC27E]/80 shadow-2xl px-3 py-2.5 transition-all animate-slideUp">
      <div className="flex items-center justify-between gap-3 max-w-sm mx-auto">
        <div className="leading-tight">
          <div className="flex items-center gap-1 text-[11px] font-bold text-[#6B1D2F]">
            <Sparkles className="w-3 h-3 text-[#B68A36]" />
            <span>54 Modelos em PDF</span>
          </div>
          <span className="font-serif-title font-extrabold text-lg text-[#3B111B] leading-none">
            R$ 10,00
          </span>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 max-w-[200px] py-2.5 px-3 bg-[#6B1D2F] hover:bg-[#521321] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
        >
          <span>QUERO AGORA</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
