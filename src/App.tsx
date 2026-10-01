import { TopUrgencyBar } from './components/TopUrgencyBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisualMechanism } from './components/VisualMechanism';
import { EmotionalStory } from './components/EmotionalStory';
import { ProductCategories } from './components/ProductCategories';
import { CardShowcase } from './components/CardShowcase';
import { HowItWorks } from './components/HowItWorks';
import { UsageOccasions } from './components/UsageOccasions';
import { WhatYouGet } from './components/WhatYouGet';
import { OfferSection } from './components/OfferSection';
import { ObjectionBreaker } from './components/ObjectionBreaker';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { redirectToCheckout } from './config';

export default function App() {
  // Rola suavemente até a seção de oferta
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#oferta';
    }
  };

  // Redireciona diretamente para o checkout da EscalePay
  const handleCheckoutClick = () => {
    redirectToCheckout();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2725] flex flex-col font-sans selection:bg-[#EBDAD4] selection:text-[#581523]">
      {/* 1. Barra Superior com Timer de Contagem Regressiva */}
      <TopUrgencyBar onCtaClick={scrollToOffer} />

      {/* 2. Top Navigation Bar (Contrato de 3 Zonas) */}
      <Navbar onCtaClick={scrollToOffer} />

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        {/* 3. Hero — Primeira Dobra */}
        <Hero onCtaClick={scrollToOffer} />

        {/* 4. Mecanismo Visual Imediato (Imprima -> Recorte -> Cesta -> Escolha) */}
        <VisualMechanism onCtaClick={scrollToOffer} />

        {/* 5. Contexto Emocional / Problema */}
        <EmotionalStory />

        {/* 6. Apresentação do Produto & 7 Categorias */}
        <ProductCategories />

        {/* 7. Mostrar o Produto por Dentro (Vitrine Real de Cartinhas + Sorteio Interativo) */}
        <CardShowcase onCtaClick={scrollToOffer} />

        {/* 8. Como Funciona (Passo a Passo Visual) */}
        <HowItWorks onCtaClick={scrollToOffer} />

        {/* 9. Para Que Você Pode Usar (Cantinho da Esperança) */}
        <UsageOccasions />

        {/* 10. O Que Você Recebe */}
        <WhatYouGet onCtaClick={scrollToOffer} />

        {/* 11. Valor & Oferta Completa — Botão principal leva ao checkout */}
        <OfferSection onCtaClick={handleCheckoutClick} />

        {/* 12. Quebra de Objeções */}
        <ObjectionBreaker />

        {/* 13. Garantia & Suporte */}
        <GuaranteeSection />

        {/* 14. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 15. CTA Final Emocional */}
        <FinalCta onCtaClick={scrollToOffer} />
      </main>

      {/* 16. Rodapé */}
      <Footer />

      {/* 17. Botão Sticky Mobile (Altura <= 15% do Viewport) */}
      <MobileStickyBar onCtaClick={scrollToOffer} />
    </div>
  );
}
