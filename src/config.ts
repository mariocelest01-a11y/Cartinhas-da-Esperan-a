/**
 * Configuração central da página de vendas Cartinhas da Esperança.
 * Atualize os placeholders conforme suas ferramentas de tráfego e checkout.
 */

export const CONFIG = {
  // Link direto do checkout EscalePay
  CHECKOUT_URL: "https://checkout.escalepay.com/1306148",

  // ID do Meta Pixel para rastreamento de anúncios
  META_PIXEL_ID: "1112112788439854",
  GA_MEASUREMENT_ID: "[GA_MEASUREMENT_ID]",

  // Informações do Produto
  PRODUCT_NAME: "Cartinhas da Esperança",
  CARD_COUNT: 54,
  PRICE_BRL: "10,00",
  CURRENCY_SYMBOL: "R$",
  FORMAT: "Arquivo digital em PDF (Pronto para imprimir)",

  // Contato e suporte
  SUPPORT_EMAIL: "suporte@cartinhasdaesperanca.com",
  
  // Placeholder de garantia
  GUARANTEE_INFO: "[CONFIRMAR GARANTIA]",
};

/**
 * Função utilitária para rastrear clique no CTA e redirecionar para o checkout
 */
export function redirectToCheckout() {
  if (typeof window !== 'undefined') {
    // Dispara evento padrão InitiateCheckout do Meta Pixel
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === 'function') {
      try {
        fbq('track', 'InitiateCheckout', {
          content_name: CONFIG.PRODUCT_NAME,
          value: 10.00,
          currency: 'BRL',
          num_items: CONFIG.CARD_COUNT,
        });
      } catch (e) {
        console.warn('Erro ao disparar pixel:', e);
      }
    }

    // Redireciona imediatamente para o checkout da EscalePay
    window.location.href = CONFIG.CHECKOUT_URL;
  }
}

