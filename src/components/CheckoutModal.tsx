import { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { CONFIG } from '../config';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!isOpen) return null;

  const isPlaceholder = CONFIG.CHECKOUT_URL === '[LINK_DO_CHECKOUT]';

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);

    if (!isPlaceholder && CONFIG.CHECKOUT_URL.startsWith('http')) {
      window.location.href = CONFIG.CHECKOUT_URL;
      return;
    }

    // Se estiver em modo demonstração com placeholder
    setTimeout(() => {
      setIsRedirecting(false);
      alert('Demonstração de Checkout: Substitua [LINK_DO_CHECKOUT] no arquivo src/config.ts pelo link da sua plataforma de pagamentos (Kiwify, Hotmart, Eduzz, etc.).');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#DFC27E]/80 overflow-hidden">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F2] text-[#6B1D2F] hover:bg-[#F2ECE6] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Topo do Modal */}
        <div className="bg-[#6B1D2F] p-6 text-white text-center">
          <p className="text-[11px] uppercase tracking-wider text-[#DFC27E] font-semibold mb-1">
            Resumo do Pedido
          </p>
          <h3 className="font-serif-title text-2xl font-bold">
            {CONFIG.PRODUCT_NAME}
          </h3>
          <p className="text-xs text-[#EBDAD4] mt-1">
            54 modelos diferentes em arquivo digital PDF
          </p>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6">
          <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD7] mb-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD7]/80">
              <span className="text-xs text-[#7A6960]">Item:</span>
              <span className="text-xs font-semibold text-[#3B111B]">54 Cartinhas (PDF)</span>
            </div>
            <div className="flex items-center justify-between pt-3">
              <span className="text-xs font-medium text-[#7A6960]">Total a pagar:</span>
              <span className="font-serif-title text-2xl font-bold text-[#6B1D2F]">
                R$ 10,00
              </span>
            </div>
          </div>

          <form onSubmit={handleProceed} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#4F413B] mb-1.5">
                Seu e-mail para receber o PDF:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#D8C7B9] focus:outline-none focus:ring-2 focus:ring-[#6B1D2F] bg-[#FAF7F2]/50"
              />
              <span className="text-[11px] text-[#8C7A70] block mt-1">
                O arquivo será enviado para este e-mail após a confirmação.
              </span>
            </div>

            <button
              type="submit"
              disabled={isRedirecting}
              className="w-full py-4 bg-[#6B1D2F] hover:bg-[#521321] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
            >
              <span>{isRedirecting ? 'Conectando ao checkout...' : 'Ir para Pagamento Seguro'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Destaque do Placeholder de Checkout para o proprietário */}
          {isPlaceholder && (
            <div className="mt-4 p-3 bg-[#FFFDF9] rounded-xl border border-[#DFC27E]/60 text-[11px] text-[#7A6960]">
              <div className="flex items-center gap-1.5 font-semibold text-[#6B1D2F] mb-0.5">
                <ExternalLink className="w-3 h-3" />
                <span>Configuração de Checkout:</span>
              </div>
              <p>
                Placeholder ativo: <code className="bg-[#FAF2EF] px-1 py-0.5 rounded text-[#6B1D2F]">[LINK_DO_CHECKOUT]</code>. Altere em <code className="font-mono text-[#3B111B]">src/config.ts</code> para direcionar diretamente para sua plataforma de checkout.
              </p>
            </div>
          )}

          {/* Garantias do Checkout */}
          <div className="mt-5 pt-4 border-t border-[#F2ECE6] grid grid-cols-3 gap-2 text-center text-[10px] text-[#8C7A70]">
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#6B1D2F]" />
              <span>Compra Segura</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FileText className="w-4 h-4 text-[#6B1D2F]" />
              <span>Formato PDF</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-[#6B1D2F]" />
              <span>Entrega Imediata</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
