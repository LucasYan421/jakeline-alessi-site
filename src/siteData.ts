import { config } from '../EditionPanel/config';
import { content, fotos } from '../EditionPanel/content';

export { config, content, fotos };

/**
 * Gera o link direto para o WhatsApp oficial com a mensagem configurada
 */
export function getWhatsAppLink(customMessage?: string): string {
  // Remove caracteres não numéricos garantindo compatibilidade com wa.me
  const cleanPhone = (config.whatsapp || '').replace(/\D/g, '');
  const message = customMessage || config.whatsappMessage || 'Olá, Jakeline! Gostaria de solicitar um orçamento para o meu casamento.';
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Formata o número de telefone para exibição visual elegante (ex: (61) 99999-9999)
 */
export function formatPhoneDisplay(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length === 13 && digits.startsWith('55')) {
    // 55 61 99999-9999
    const ddd = digits.slice(2, 4);
    const part1 = digits.slice(4, 9);
    const part2 = digits.slice(9);
    return `+55 (${ddd}) ${part1}-${part2}`;
  }
  if (digits.length === 11) {
    const ddd = digits.slice(0, 2);
    const part1 = digits.slice(2, 7);
    const part2 = digits.slice(7);
    return `(${ddd}) ${part1}-${part2}`;
  }
  return rawPhone;
}
