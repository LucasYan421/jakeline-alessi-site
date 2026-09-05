import React from 'react';
import { MessageCircle } from 'lucide-react';
import { content, getWhatsAppLink } from '../siteData';

export const CtaFinal: React.FC = () => {
  const whatsappUrl = getWhatsAppLink();

  return (
    <section id="cta-final" className="py-20 sm:py-28 bg-[#1A1A1A] text-white relative overflow-hidden border-b border-[#2D2D2D]">
      {/* Elementos decorativos de iluminação suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4C3A3]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Detalhe de Linha Champagne */}
        <div className="w-12 h-px bg-[#D4C3A3] mx-auto mb-8" />

        {/* Título Principal */}
        <h2
          id="cta-final-titulo"
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6"
        >
          {content.ctaFinal.titulo}
        </h2>

        {/* Descrição */}
        <p
          id="cta-final-descricao"
          className="text-base sm:text-lg md:text-xl text-[#FAF9F6]/85 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          {content.ctaFinal.descricao}
        </p>

        {/* Botão de Ação para WhatsApp */}
        <div>
          <a
            id="cta-final-botao"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 sm:py-5 text-[11px] uppercase tracking-premium font-semibold bg-white text-[#1A1A1A] hover:bg-[#D4C3A3] hover:text-[#1A1A1A] transition-all duration-300 shadow-xl active:scale-98"
          >
            <MessageCircle className="w-4 h-4 mr-2.5 text-[#1A1A1A]" />
            {content.ctaFinal.botao}
          </a>
        </div>

      </div>
    </section>
  );
};
