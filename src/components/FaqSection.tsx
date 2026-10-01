import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. O produto é físico?",
      a: "Não. As Cartinhas da Esperança são um produto 100% digital fornecido em arquivo PDF de alta qualidade. Você recebe o arquivo e realiza a impressão na sua casa ou em uma gráfica.",
    },
    {
      q: "2. Como recebo o produto?",
      a: "Assim que o pagamento de R$10 for aprovado pela plataforma de checkout, o link para download é enviado imediatamente para o seu e-mail cadastrado e também exibido na tela de confirmação.",
    },
    {
      q: "3. Preciso ter uma impressora?",
      a: "Não necessariamente. Você pode imprimir em sua própria impressora ou simplesmente enviar o arquivo PDF para qualquer gráfica rápida, copiadora ou papelaria do seu bairro.",
    },
    {
      q: "4. Posso imprimir as cartinhas mais de uma vez?",
      a: "Sim. O arquivo digital permite que você imprima as páginas quantas vezes desejar para repor sua cestinha ou preparar novas cartinhas, respeitando os termos de uso pessoal do produto.",
    },
    {
      q: "5. Posso compartilhar as cartinhas?",
      a: "Sim! A essência das cartinhas é justamente espalhar esperança. Você pode recortar e entregar em mãos, colocar em envelopes ou até mesmo tirar fotos e enviar por mensagem.",
    },
    {
      q: "6. Posso presentear alguém?",
      a: "Sim. Você pode montar uma caixinha ou cestinha completa com as cartinhas já impressas e recortadas e presentear uma amiga, familiar ou pessoa especial.",
    },
    {
      q: "7. Quantas cartinhas existem?",
      a: "O arquivo contém exatamente 54 modelos diferentes de cartinhas, distribuídas em temas como Fé, Paz, Coragem, Esperança, Cura, Sabedoria e Proteção.",
    },
    {
      q: "8. O pagamento é único?",
      a: "Sim! Você paga apenas uma vez o valor de R$10. Não existe nenhuma cobrança mensal, assinatura ou renovação automática.",
    },
    {
      q: "9. O produto funciona no celular?",
      a: "Sim. O arquivo é entregue em formato PDF padrão universal, que pode ser aberto, visualizado e compartilhado facilmente tanto no celular quanto no computador ou tablet.",
    },
    {
      q: "10. Como vou receber o arquivo?",
      a: "Você receberá o arquivo PDF por e-mail imediatamente após a confirmação do pagamento, com instruções claras e diretas para baixar com apenas um clique.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#ECE4DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B68A36] font-bold mb-2 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B111B] text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-[#6E5F57] mt-2">
            Respostas claras e objetivas sobre o produto e o processo de entrega.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DFD7] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-title text-base sm:text-lg font-bold text-[#3B111B]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B1D2F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#66574F] leading-relaxed border-t border-[#F2ECE6]/80">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
