interface NavbarProps {
  onCtaClick: () => void;
}

export function Navbar({ onCtaClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD7] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#581523] hover:text-[#420E19] transition-colors whitespace-nowrap"
        >
          Cartinhas da Esperança
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#5F534D]">
          <a href="#mecanismo" className="hover:text-[#581523] transition-colors">
            Como Funciona
          </a>
          <a href="#modelos" className="hover:text-[#581523] transition-colors">
            54 Modelos
          </a>
          <a href="#exemplos" className="hover:text-[#581523] transition-colors">
            Ver Cartinhas
          </a>
          <a href="#usos" className="hover:text-[#581523] transition-colors">
            Onde Usar
          </a>
          <a href="#oferta" className="hover:text-[#581523] transition-colors">
            Oferta (R$10)
          </a>
          <a href="#faq" className="hover:text-[#581523] transition-colors">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCtaClick}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#6B1D2F] hover:bg-[#531422] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer active:scale-[0.98]"
          >
            Quero por R$10
          </button>
        </div>
      </div>
    </header>
  );
}
