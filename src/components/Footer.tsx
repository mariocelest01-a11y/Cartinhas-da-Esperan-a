import { CONFIG } from '../config';

export function Footer() {
  return (
    <footer className="bg-[#2D2725] text-[#D8CCC4] py-12 px-4 sm:px-6 border-t border-[#443B37] text-xs">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#443B37]">
          <div>
            <span className="font-serif-title text-xl font-bold text-white block">
              Cartinhas da Esperança
            </span>
            <p className="text-[#A99C94] mt-1 text-xs">
              54 modelos diferentes de mensagens de fé para imprimir e compartilhar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#C8BCB4]">
            <a href="#mecanismo" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#modelos" className="hover:text-white transition-colors">54 Modelos</a>
            <a href="#exemplos" className="hover:text-white transition-colors">Ver Cartinhas</a>
            <a href="#oferta" className="hover:text-white transition-colors">Oferta (R$10)</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
          </div>
        </div>

        {/* Informações legais e avisos de tráfego direto */}
        <div className="pt-8 space-y-3 text-[11px] text-[#A6978E] leading-relaxed">
          <p>
            <strong>Aviso Legal & Termos de Uso:</strong> Este produto é exclusivamente digital, disponibilizado em formato PDF para impressão e uso pessoal e de compartilhamento familiar. As mensagens contidas no arquivo têm o propósito de reflexão bíblica, conforto espiritual e encorajamento pessoal, não substituindo aconselhamento médico, psicológico ou profissional de qualquer natureza.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 text-[#8C7E76]">
            <p>© {new Date().getFullYear()} Cartinhas da Esperança. Todos os direitos reservados.</p>
            <p>Suporte: {CONFIG.SUPPORT_EMAIL}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
