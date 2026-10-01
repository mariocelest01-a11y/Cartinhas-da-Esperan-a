import { ShieldCheck, Mail } from 'lucide-react';
import { CONFIG } from '../config';

export function GuaranteeSection() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-[#ECE4DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#DFC27E]/70 shadow-sm text-center">
          <div className="w-14 h-14 rounded-2xl bg-white border border-[#E0D4C9] flex items-center justify-center mx-auto mb-4 text-[#6B1D2F]">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Segurança & Respeito
          </span>

          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#3B111B] mb-4">
            Garantia e Tranquilidade
          </h2>

          <div className="max-w-xl mx-auto space-y-3 text-xs sm:text-sm text-[#66574F] leading-relaxed mb-6">
            <p className="font-medium text-[#3B111B]">
              {CONFIG.GUARANTEE_INFO}
            </p>
            <p>
              Queremos que sua experiência com as Cartinhas da Esperança seja leve, abençoada e sem qualquer dor de cabeça. Se você tiver qualquer dificuldade com o download do arquivo em PDF ou no recebimento do seu acesso, nossa equipe prestará suporte direto.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-[#7A6960] bg-white px-4 py-2 rounded-xl border border-[#E8DFD7]">
            <Mail className="w-3.5 h-3.5 text-[#6B1D2F]" />
            <span>Suporte por e-mail: <strong className="text-[#3B111B]">{CONFIG.SUPPORT_EMAIL}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
